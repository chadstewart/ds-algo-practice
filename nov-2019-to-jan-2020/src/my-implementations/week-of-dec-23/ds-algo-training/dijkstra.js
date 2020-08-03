function dijkstra(graph, start) {
    let solutions = {};
    solutions[start] = [];
    solutions[start].distance = 0;

    while(true) {
        let parent = null;
        let nearest = null;
        let distance = Infinity;

        for(let n in solutions) {
            if(!solutions[start]){
                continue;
            }

            let nDistance = solutions[n].distance;
            let adj = graph[n];

            for(let a in adj) {
                if(solutions[a]) {
                    continue;
                }

                let d = adj[a] + nDistance;

                if(d < distance) {
                    parent = solutions[n];
                    nearest = a;
                    distance = d;
                }
            }
        }

        if(distance === Infinity) {
            break;
        }

        solutions[nearest] = parent.concat(nearest);
        solutions[nearest].distance = distance;
    }

    return solutions;
}