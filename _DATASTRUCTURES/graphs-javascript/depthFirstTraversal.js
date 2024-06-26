const testGraph = require("./testGraph.js");

const depthFirstTraversal = (start, visitedVertices = [start]) => {
    console.log(start.data);

    if (start.edges.length) {
        const neighbor = start.edges[0].end;

        if (!visitedVertices.includes(neighbor)) {
            visitedVertices.push(neighbor);
            depthFirstTraversal(neighbor, visitedVertices);
        }
    }
};

depthFirstTraversal(testGraph.vertices[0]);

// callbacks

const depthFirstTraversalCallbacks = (start, visitedVertices = [start]) => {
    console.log(start.data);

    start.edges.forEach((edge) => {
        const neighbor = edge.end;

        if (!visitedVertices.includes(neighbor)) {
            visitedVertices.push(neighbor);
            depthFirstTraversal(neighbor, visitedVertices);
        }
    });
};

depthFirstTraversalCallbacks(testGraph.vertices[0]);
