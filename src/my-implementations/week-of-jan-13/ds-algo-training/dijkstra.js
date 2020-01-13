function dijkstra(graph, src) {
  //initialization
  let solutions = {};
  solutions[src] = [];
  solutions[src].dist = 0;

  while(true) {
     let parent = null;
     let nearest = null;
     let dist = Infinity;
     
     //for each existing solution
     for(let n in solutions) {
         if(!solutions[n])
            continue;

        let nDist = soltuions[n].dist;
        let adj = graph[n];

        // for each of its adjacent nodes...
        for(let a in adj) {
            //without a solution already...
            if(solutions[a])
                continue;

            //choose nearest node with lowest *total* cost
            var d = adj[a] + nDist;

            if(d < dist) {
                //reference parent
                parent = solutions[n];
                nearest = a;
                dist = d;
            }
        }
     }

     //no more solutions
     if(dist === Infinity) {
         break;
     }

     //extend parent's solution path
     solutions[nearest] = parent.concat(nearest);
     //extend parent's cost
     solutions[nearest].dist = dist;
  }

  return solutions;
}