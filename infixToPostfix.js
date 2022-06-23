function infixToPostfix(s) {
    let res = '';
    const stack = [];
    const map1 = new Map();
    map1.set('^', 3)
    map1.set('*', 2)
    map1.set('/', 2)
    map1.set('+', 1)
    map1.set('-', 1)
    
    for (let i=0; i<s.length; i++) {
        const regex = /[a-zA-Z]+/g;
        let top = stack[stack.length-1];
        let isLetter = s[i].match(regex);
      
        if (isLetter) {
            res = res + isLetter;  
            } else if (s[i] === '(' || stack.length === 0 || top ==='(') {
                debugger
                stack.push(s[i]);
            } else if (s[i] ===')') {
                let topOfStack = stack.pop();
                while (topOfStack !== '('){
                    res = res + topOfStack;
                    topOfStack = stack.pop();
                }     
            } else if(!isLetter) {
           
                let operatorScanned = map1.get(s[i]);             
                if(compareToStack(operatorScanned)) {
                    stack.push(s[i]);
                } else {
                    while(compareToStack(operatorScanned) === false) {
                        topOfStack = stack.pop();
                        res = res + topOfStack;
                    }
                    stack.push(s[i]);
                    
                }
        }

    }     
        while (stack.length >0) {
            let restOfTop = stack.pop();
            res = res + restOfTop;
        }
       
        return res;
    
    function compareToStack(operatorScanned) {
        let top = stack[stack.length-1];
        let topRank = map1.get(top);
        if (operatorScanned > topRank) {
            return true
        } 
        return false;
    } 
} 

