function dijkstra(graph, start) {
    //initialization
    let solutions = {};
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
            
            let ndistance = solutions[n].distance;
            let adjacentNode = graph[n];

            //for each of it's adjacent nodes...
            for(let a in adjacentNode) {
                //without a solution already...
                if(solutions[a])
                    continue;
                
                //choose nearest node with lowest *total* cost
                let d = adjacentNode[a] + ndistance;

                if(d < distance) {
                    //reference parent
                    parent = solutions[n];
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