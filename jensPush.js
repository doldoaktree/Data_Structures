function jensPush(stack,val) {
    const full = 5;
    let top = stack.length;
    if (stack.length === full) {
        return "I'm full, burp!";
    } else {
       stack[top]=val;
       return stack ;
    }; 
};

function jensPop(stack) {
    if (stack.length === 0) {
        return "I'm empty!";
    } else {
        let top = stack[stack.length-1];
        stack.length = stack.length -1;
        return top ;
    };   
};


   