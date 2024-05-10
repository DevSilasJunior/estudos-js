
//Recursividade 

function fatorar(n){
    console.log(n)
    if (n == 1){
        return 1
    }else {
        return n * fatorar(n-1)
        
    }

}
console.log(fatorar(5))
/*
5! = 5 x 4 x 3 x 2 x 1 
5! = 5 x 4!

n! = n x (n-1)!
1! = 1
*/ 