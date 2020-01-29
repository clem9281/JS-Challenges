let fs = require("fs");

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
  let unvisited = new Set();
  for (let i = 1; i <= numNodes; i++) {
    unvisited.add(i);
    if (!graph[i]) {
      graph[i] = new Set();
    }
  }
  let distances = new Array(numNodes - 1);
  let q = new Queue();
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
  console.log(...distances);
  // return distances
}
function processData(input) {
  //Enter your code here
  let inputArr = input.split("\n");
  //   console.log(inputArr);
  let numOfCases = Number(inputArr[0]);
  // let cases = new Array(numOfCases).fill([])
  // let count = 0
  // let numNodesForCase = new Array(numOfCases)
  let lookahead = 1;
  // let startNodes = new Array(numOfCases)
  let numOfNodes = null;
  let caseHolder = [];
  let answer = new Array(numOfCases);
  let count = 0;
  for (let i = 1; i < inputArr.length; i++) {
    // console.log(inputArr[i].split(" ").length);
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
  // return answer
}

fs.readFile("./test.txt", "utf8", function(err, contents) {
  //   console.log({ contents });
  processData(contents);
});

console.log("file did finish");
