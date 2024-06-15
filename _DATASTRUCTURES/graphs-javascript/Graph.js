const Edge = require("./Edge.js"); // Import the Edge class from the Edge.js file
const Vertex = require("./Vertex.js"); // Import the Vertex class from the Vertex.js file

class Graph {
    constructor(isWeighted = false, isDirected = false) {
        this.vertices = []; // Array to store all the vertices in the graph
        this.isWeighted = isWeighted; // Flag to indicate if the graph is weighted or not
        this.isDirected = isDirected; // Flag to indicate if the graph is directed or not
    }

    addVertex(data) {
        const newVertex = new Vertex(data); // Create a new vertex with the given data
        this.vertices.push(newVertex); // Add the new vertex to the vertices array

        return newVertex; // Return the newly added vertex
    }

    removeVertex(vertex) {
        this.vertices = this.vertices.filter((v) => v !== vertex); // Remove the specified vertex from the vertices array
    }

    addEdge(vertexOne, vertexTwo, weight) {
        const edgeWeight = this.isWeighted ? weight : null; // If the graph is weighted, use the provided weight, otherwise set it to null

        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
            vertexOne.addEdge(vertexTwo, edgeWeight); // Add an edge from vertexOne to vertexTwo with the specified weight

            if (!this.isDirected) {
                vertexTwo.addEdge(vertexOne, edgeWeight); // If the graph is not directed, add an edge from vertexTwo to vertexOne with the same weight
            }
        } else {
            throw new Error("Expected Vertex arguments."); // Throw an error if the arguments are not instances of the Vertex class
        }
    }

    removeEdge(vertexOne, vertexTwo) {
        if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
            vertexOne.removeEdge(vertexTwo); // Remove the edge from vertexOne to vertexTwo

            if (!this.isDirected) {
                vertexTwo.removeEdge(vertexOne); // If the graph is not directed, remove the edge from vertexTwo to vertexOne
            }
        } else {
            throw new Error("Expected Vertex arguments."); // Throw an error if the arguments are not instances of the Vertex class
        }
    }

    print() {
        this.vertices.forEach((vertex) => vertex.print()); // Print each vertex in the graph
    }
}

module.exports = Graph; // Export the Graph class to be used in other files
