exports.calculate = function(expression) {
    const exp=expression.trim().split(/\s+/)
    console.log(exp)
    const st=[]
    for (var i=exp.length-1;i>=0;i--){
      var opt=exp[i];
      if (['+','-','*','/'].includes(opt)){
        var a=Number(st.pop())
        var b=Number(st.pop())
        switch(opt){
          case '+':st.push(a+b);break;
          case '-':st.push(a-b);break;
          case '*':st.push(a*b);break;
          case '/':st.push(a/b);break;
        }
      }
      else{
        st.push(Number(opt))
      }
      
    }
    return st.pop()
}

