function Node(value) {
  this.value = value;
  this.next = null;
}

function Queue() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

Queue.prototype.len = function() {
  return this.size;
};
Queue.prototype.enqueue = function(value) {
  let newNode = new Node(value);
  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
};
Queue.prototype.dequeue = function() {
  if (!this.head) {
    return null;
  } else {
    let val = this.head.value;
    this.head = this.head.next;
    this.size--;
    return val;
  }
};

function bfs(numNodes, startNode, nodes) {
  let graph = {};
  // load graph
  for (let element of nodes) {
    if (!graph[element[0]]) {
      graph[element[0]] = new Set();
    }
    if (!graph[element[1]]) {
      graph[element[1]] = new Set();
    }
    graph[element[0]].add(element[1]);
    graph[element[1]].add(element[0]);
  }
  // the nodes array just has our edges, we should have nodes for 1 - numNodes, the ones not in the edges array are disconnected components, we still need those element in our graph
  for (let i = 1; i <= numNodes; i++) {
    if (!graph[i]) {
      graph[i] = new Set();
    }
  }
  let distances = new Array(numNodes - 1);
  // bft to get the shortest paths from start to whatever node
  let q = new Queue();
  // visited will be a dict with each value as the distance of that node from start
  let visited = {};
  visited[startNode] = 0;
  q.enqueue(startNode);
  while (q.len() > 0) {
    let current = q.dequeue();
    for (let neighbor of graph[current]) {
      if (!visited.hasOwnProperty(neighbor)) {
        visited[neighbor] = visited[current] + 6;
        q.enqueue(neighbor);
      }
    }
  }
  // our bft only got through our connected component, we still have disconnected nodes, but we know their distance is -1. Go from 1 to numNodes adding to our distance array, using count to keep track of index
  let count = 0;
  for (let i = 1; i <= numNodes; i++) {
    if (!visited.hasOwnProperty(i)) {
      distances[count] = -1;
      count++;
    } else if (visited[i] !== 0) {
      distances[count] = visited[i];
      count++;
    }
  }
  // console.log(...distances);
  return distances;
}
function processData(input) {
  //Enter your code here
  let inputArr = input.split("\n");
  let numOfCases = Number(inputArr[0]);
  // the first element of input is the number of cases, then after that the first set of numbers is the number of nodes and edges (we only care about number of nodes for this example), lookahead keeps track of where to look for that information. On our first iteration that is 1, but after that, if there is more than one case, we know we will find that info after the element that only has one number, not two
  let lookahead = 1;
  let numOfNodes = null;
  let caseHolder = [];
  let answer = new Array(numOfCases);
  let count = 0;
  for (let i = 1; i < inputArr.length; i++) {
    let element = inputArr[i].split(" ");
    if (i === lookahead) {
      numOfNodes = Number(inputArr[i].split(" ")[0]);
    } else if (element.length === 1) {
      answer[count] = bfs(numOfNodes, Number(inputArr[i]), caseHolder);
      caseHolder = [];
      lookahead = i + 1;
      count++;
    } else {
      caseHolder.push(element.map(el => Number(el)));
    }
  }
  return answer;
}

module.exports = { processData };
