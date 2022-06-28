function voteCounter (arr) {
    let j = 0;
    const map1 = new Map ();
    map1.set(arr[0],j+1);
    let currentCandidates = Array.from(map1.keys());
    
    for (let i = 1; i<arr.length; i++) {
        const index = currentCandidates.indexOf(arr[i]);

        if (index >= 0) {
            const votes = map1.get(currentCandidates[index]);
            map1.set((currentCandidates[index]), votes + 1); 
            } else {
                map1.set(arr[i],j+1);
                currentCandidates = Array.from(map1.keys());    
        }
    }
    
    const winner = Array.from(map1.values());
    const highestVote = Math.max(...winner);
    const winnerArr = [];

    map1.forEach((value, key) => {
        if (value === highestVote) {    
            winnerArr.push(key);
        }   
    });
    
    const winnersSorted = winnerArr.sort();
    const winner1 = `${winnersSorted[0]} ${highestVote}`; 
    return winner1;
    
}