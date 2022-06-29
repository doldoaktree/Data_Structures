function nextGreaterElement (arr) {
    let nextBigElem = '';
    
   while (arr.length > 0) {
    const currElem = arr.shift();
        for (let i=0; i<=arr.length; i++) {
            if (arr.length === 0) {
                nextBigElem = nextBigElem + -1;
            }
            if (arr[i] > currElem) {
            nextBigElem = nextBigElem + arr[i] + " ";
            break;
            }  
        }
    } 
    return nextBigElem;  
}

const t = nextGreaterElement([1, 3, 2, 4]);
console.log(t)