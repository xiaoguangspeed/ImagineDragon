function QuadraticTime( n ) {
    for(var i=0; i<n; i++) {
        console.log(i)
        for(var j=i; j<n; j++) {
            console.log(j)
        }
    }
}
// QuadraticTime(5)
 function exampleLogarithmic(n) {
     for (var i = 1 ; i <= n; i= i*2 ) {
     console.log(i);
     }
}
exampleLogarithmic(10)