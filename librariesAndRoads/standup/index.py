def roadsAndLibraries(n, c_lib, c_road, cities):
    graph = {}
    unvisited = set()
    totalCities = 0
    for city in cities:
        if not city[0] in graph:
            graph[city[0]] = set()
            totalCities += 1
        if not city[1] in graph:
            graph[city[1]] = set()
            totalCities += 1
        unvisited.add(city[0])
        unvisited.add(city[1])
        graph[city[0]].add(city[1])
        graph[city[1]].add(city[0])
    if c_lib <= c_road:
        return n * c_lib
    else:
        visited = set()
        totalCost = 0
        for city in cities:
            if city[0] in unvisited:
                totalCost += c_lib
                unvisited.remove(city[0])
            stack = []
            stack.append(city[0])
            while len(stack) > 0:
                current = stack.pop()
                if not current in visited:
                    visited.add(current)
                    for neighbor in graph[current]:
                        if neighbor in unvisited:
                            unvisited.remove(neighbor)
                            totalCost += c_road
                        stack.append(neighbor)
        if totalCities < n:
            for i in range(n - totalCities):
                totalCost += c_lib

        return totalCost