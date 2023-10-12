const graph = {};

graph['you'] = ['alice', 'bob', 'claddre'];
graph['alice'] = ['alice', 'bob', 'claddre'];
graph['bob'] = ['anuj', 'peggy'];
graph['claire'] = ['alice', 'peggy', '213ssdafs'];
graph['peggy'] = ['sdaf', 'wer', 'asii'];

console.log(graph);

function search(name) {
    const search_queue = [];
    search_queue.push(...graph[name]);

    console.log(graph[name])

    const searched = {};

    while (search_queue.length) {
        const person = search_queue.shift();
        console.log(person, search_queue)
        if (!searched.hasOwnProperty(person)) {
            if (person[3] === 'i') {
                return true;
            } else {
                if (graph.hasOwnProperty(person)) {
                    search_queue.push(...graph[person]);
                }
                searched[person] = true;
            }
        }
    }

    return false;
}

console.log(search('you'))