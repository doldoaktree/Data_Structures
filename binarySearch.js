function binarySearch (array1,x) {
    let mid = Math.floor(array1.length/2); 
    let high = array1.length-1;
    let low = 0;
    let arrayLength = array1.length;


   while (arrayLength > 0) {
        if (array1[mid] === x ) {
            return mid;

            } else if (x > array1[mid]) {  
                low = mid + 1;
                mid = Math.floor((high + low)/2);
                arrayLength = (high-low) + 1;             
            } else {
                high = mid -1;
                mid = Math.floor((high + low)/2); 
            } 
   }        
   return 'number does not exist.'
}
