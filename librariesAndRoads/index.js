function roadsAndLibraries(n, c_lib, c_road, cities) {
  let graph = {};
  let unvisited = new Set();
  let totalCities = 0;
  for (let city of cities) {
    if (!graph[city[0]]) {
      graph[city[0]] = new Set();
      totalCities++;
    }
    if (!graph[city[1]]) {
      graph[city[1]] = new Set();
      totalCities++;
    }
    unvisited.add(city[0]);
    unvisited.add(city[1]);
    graph[city[0]].add(city[1]);
    graph[city[1]].add(city[0]);
  }
  if (c_lib <= c_road) {
    return n * c_lib;
  } else {
    let visited = new Set();
    let totalCost = 0;
    for (let city of cities) {
      if (!visited.has(city[0])) {
        totalCost += c_lib;
      }
      let stack = [];
      stack.push(city[0]);
      while (stack.length > 0) {
        let current = stack.pop();
        if (!visited.has(current)) {
          visited.add(current);
          unvisited.delete(current);
          for (let neighbor of graph[current]) {
            if (unvisited.has(neighbor)) {
              totalCost += c_road;
              unvisited.delete(neighbor);
            }
            stack.push(neighbor);
          }
        }
      }
    }
    if (totalCities < n) {
      for (let i = 0; i < n - totalCities; i++) {
        totalCost += c_lib;
      }
    }
    return totalCost;
  }
}

module.exports = { roadsAndLibraries };
