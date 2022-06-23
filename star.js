function star() {
    const star = '*';
    const space = ' ';
    let j = 0;
    let limit = 5;
    let res = '';
    let output = '';
    
    while (j<5) {
       
        let i = 0;
        let spaceLine = '';
        limit = limit - 1;

        while (i < limit) {
            spaceLine = spaceLine + space;
            i++
        };

        res = res + star;
        output = spaceLine + res;
        console.log(output) 
        j++  
    }
}