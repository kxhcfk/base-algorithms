const graph = {};

graph['start'] = {};
graph['start']['a'] = 6;
graph['start']['b'] = 2;

graph['a'] = {};
graph['a']['fin'] = 1;
graph['b'] = {};
graph['b']['a'] = 3;
graph['b']['fin'] = 5;
graph['fin'] = {};

console.log(graph);

const costs = {};

costs['a'] = 6;
costs['b'] = 2;
costs['fin'] = Infinity;

console.log(costs);

const parents = {};

parents['a'] = 'start';
parents['b'] = 'start';
parents['fin'] = null;

console.log(parents)

const processed = [];

let node = findLowestCostNode(costs);
while (node) {
    const cost = costs[node];
    const neighbors = graph[node];

    for (let n of Object.keys(neighbors)) {
        const newCost = cost + neighbors[n];

        if (costs[n] > newCost) {
            costs[n] = newCost;
            parents[n] = node;
        }
    }

    processed.push(node);
    node = findLowestCostNode(costs);
}

console.log(parents)

function findLowestCostNode(costs) {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    for (let node in costs) {
        let cost = costs[node];

        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }

    return lowestCostNode;
}