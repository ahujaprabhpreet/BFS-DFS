console.log("Implementation of Depth First Search using Javascript"); 
console.log("\n");

//creating an undirected graph
class Graph { 
    constructor(verticesNumber){ 
        //Vertex array definition
        this.verticesNumber = verticesNumber; 
        //Adjacency List definition
        this.AdjacencyList = new Map(); 

    } 

    //function to add edges in the graph
    addEdge(vertex, vertexDest){ 
    
        //getting the adjacency list for the vertex and adding the vertexdest to denote the edge between vertex and vertexDest
        this.AdjacencyList.get(vertex).push(vertexDest); 
    
        //getting the adjacency list for vertexDest and adding the vertex to denote the edge between vertexDest and vertex
        //because the graph is undirected
        this.AdjacencyList.get(vertexDest).push(vertex);  
    }
    
    //function to add vertex in the graph
    addVertex(vertex) {
    //Adding a new vertex by initializing the adjacency list with a null array 
    this.AdjacencyList.set(vertex, []); 
    }
    
    //function to display the graph using vertex and adjacency list of the graph
    displayGraph(){ 
        //getting all the vertice's keys to use for the loop 
        var get_keys = this.AdjacencyList.keys(); 
  
        //using for loop to iterate through all the vertices of the graph
        for (var i of get_keys){ 
            //getting the adjacency list for the vertex
            var get_values = this.AdjacencyList.get(i); 
            var concat = ""; 
  
            // iterating through the adjacency list of each vertex
            for (var j of get_values) 
                
                //concatenating all the values and making a string 
                concat += j + " "; 
  
                //displaying the vertex along with its adjacency list 
                console.log(i + " -> " + concat); 
        } 
    }
 
    // This is the Main DFS method 
    dfs(startNode){ 
        
        //making a visited array to add all the visited vertices
        var visited = []; 
        for (var i = 0; i < this.verticesNumber; i++) 
            visited[i] = false; 
  
        this.DFSVal(startNode, visited); 
    } 
  
    // The Recursive function which is traversing all the adjacent vertices of  
    // the vertex with which it is being called 
    DFSVal(vertexStart, visited) { 
        visited[vertexStart] = true; 

        console.log(vertexStart); 
        
        //getting neighbours of the vertex being traversed from the adjacency list
        var getNeighbours = this.AdjacencyList.get(vertexStart); 
        
        //loop for traversing all the neighbours of a vertex
        for (var i in getNeighbours) { 
            var getElement = getNeighbours[i]; 

            //checking if the vertex is previously visited or not to call the recursive function on it
            if (!visited[getElement]) 

                //recursive function call
                this.DFSVal(getElement, visited); 
        } 
    } 
}

//implementing the graph class by making a new object
var gra = new Graph(7); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]; 
  
//adding the vertices to the graph
for (var i = 0; i < vertices.length; i++) { 
    gra.addVertex(vertices[i]); 
} 
  
//adding edges in the graph

//from A
gra.addEdge('A', 'B'); 

//from B
gra.addEdge('B', 'C'); 
gra.addEdge('B', 'G'); 

//from C
gra.addEdge('C', 'E'); 
gra.addEdge('C', 'F'); 

//from D
gra.addEdge('D', 'E'); 

//from E
gra.addEdge('E', 'F');

//from F
gra.addEdge('F', 'G');

 
//calling displayGraph to display all the vertices and their adjacency list 
console.log("Graph"); 
gra.displayGraph();
console.log("\n");

//calling dfs to begin traversing with start node as parameter
console.log("DFS Traversal");
gra.dfs('A');