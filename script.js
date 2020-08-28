
function Shape(a, b, c, d) {

    let pi = 3.14;

    this.a = a
    this.b = b
    this.c = c
    this.d = d
    this.type
   
    if(arguments.length === 4) {
        this.type = 'rectangle';
    } else if (arguments.length === 3) {
        this.type = 'triangle';
    }

}

Shape.prototype.getP = function(){
    if(this.type === 'rectangle') {
        return (this.a + this.c) * (this.b + this.d);
    } else {
        return (this.a + this.b + this.c) / 2
    }
}

Shape.prototype.getS = function(){
    if(response.type === 'rectangle') {
        return (this.a + this.c) * (this.b + this.d);
    } else {
        return ((this.a + this.b + this.c) / 2) * ((this.a + this.b + this.c) / 2 - this.a) * ((this.a + this.b + this.c) / 2 - this.b) * ((this.a + this.b + this.c) / 2 - this.c); 
    }
}
const result = new Shape(2, 4, 2, 4);
const result2 = new Shape(8, 4, 8, 4);

console.log(result.getP);
console.log(result2.getP());



