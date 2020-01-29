### EXAMPLES

#### CASE 1

Everything is connected, we can start anywhere and traverse the entire graph

```
cities = [[1, 2], [3, 1], [2, 3]]

       1
     /   \
   /      \
  3 -------2

  {
      1 : {2, 3},
      2 : {1, 3},
      3 : {1, 2}
  }

```

#### CASE 2

There are two separate connected components, so we will need to traverse each component. If we start at 1, 2, 3, or 4, we will never reach 5 or 6. So we know, we will need to reference our list in our traversal.

```
cities = [[1, 3], [3, 4], [2, 4], [1, 2], [2, 3], [5, 6]]

        1
      /   \
     /     \       5------6
    4-------3
     \     /
      \   /
        2

    {
        1: {2, 3},
        3: {1, 2, 4},
        4: {2, 3},
        2: {1, 3, 4},
        5: {6},
        6: {5}
    }

```

#### CASE 3

We are provided the arguments, n, c_lib, c_road and cities, where the cities array represents our roads between cities and n represents our number of cities

```
cities = [[1, 2], [1, 3], [1, 4]]

            1
          / | \
         /  |  \
        2   3   4

    {
        1: {2, 3, 4},
        2: {1},
        3: {1},
        4: {1}
    }
If we look at our visual representation, we see we need a library at city 1, and roads between 1,2; 1,3; 1,4. So given c_lib = 6 and c_road = 1, total cost should be 6 + 1 + 1 + 1 = 9. However, our expected output is 15. Why is that? If we pay close attention to the instructions, we see that n represents our number of cites. In this case, n = 5. So that means, there must be one unconnected city somewhere, and that city needs a library.

```

#### TRAVERSING

```
cities = [[1, 2], [3, 1], [2, 3]]

       1
     /   \
   /      \
  3 -------2

  {
      1 : {2, 3},
      2 : {1, 3},
      3 : {1, 2}
  }

  So, we will iterate through the array in order to find all the nodes. If a node is unvisited, dft it, adding roads and libraries. Let's take a look at what that will look like:

  ----
  visited = {}
  stack = []
  totalCost = 0
  ----
  we will start by looking through cities array, if the city in unvisited, we know we need a library there, and roads connected to it's neighbors. So our first city is [1, 2], 1 is unvisited, add the cost of a library to total cost
  totalCost = 2
  ----
  stack = [1]
  totalCost = 2
  ----
  pop an element off the stack
  stack = []
  current = 1
  totalCost = 2
  visited = {}
  current is unvisited, so we will traverse its neighbors
  don't forget to add current to visited
  neighbors = [2, 3]
  for each neighbor, add it to the stack, and add a road to the total?
  totalCost = 4
  stack = [2, 3]
  visited = {1}
  -----
  pop an element off the stack
  stack = [2]
  current = 3
  totalCost = 4
  visited = {1}
  current is unvisited, so we will traverse its neighbors
  don't forget to add current to visited
  neighbors = [1, 2]
  HERE IS THE GOTCHA
  for each neighbor, add it to the stack, and add a road to the total. So when we add 1 to the stack we are fine, it is in visited so we don't add a road, but when we add 2 to the stack it is not visited, so we add another road. The expected output for this is 4, now we have reached 5. Something is not right with our algo. How can we make sure we are only adding roads where we need them?

```
