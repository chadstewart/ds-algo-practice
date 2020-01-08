function dijkstra(graph, start) {
    //intialization
    let solutins = {};
    solutions[start] = [];
    solutions[start].distance = 0;

    while(true) {
        let parent = null;
        let nearest = null;
        let distance = Infinity;

        //for each existing solution
        for(let n in solutions) {
            if(!solutions[n])
                continue;

            let nDistance = solutions[n].distance;
            let adjacenctNode = graph[n];

            //for each of it's adjacent nodes...
            for(let a in adjacentNode) {
                if(solutions[a])
                    continue;

                //choose nearest node with lowest *total cost
                let d = adjacentNode[a] + nDistance;

                if(d < distance) {
                //reference parent
                parent - solutions[n];
                nearest = a;
                distance = d;
                }
            }
        }

        //no more solutions
        if(distance === Infinity) {
            break;
        }

        //extend parent's solution path
        solutions[nearest] = parent.concat(nearest);
        //extend parent's cost
        solutions[nearest].distance = distance;
    }
}