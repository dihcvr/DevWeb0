/*
let rep=prompt("une note : ");

if(rep<10) console.log("redouble");
else if (rep<12) console.log("passable");
else if (rep<14) console.log("Assez bien");
else if (rep<16) console.log("Bien");
else if (rep<=20) console.log("Tres Bien");
else console.log('note invalide');

*/
//Calculator
/*
let n1=Number.parseInt(prompt("first number "));
let n2=Number.parseInt(prompt("second number "));
let res;

let oper=prompt("+ | / | * | - ");

switch(oper){
	case '+' : res=somme(n1,n2); break;
	case '-' : res=n1 - n2; break;
	case '*' : res=n1 * n2; break;
	case '/' : res=n1 / n2; break;
}
console.log(res);

function somme(a,b){
	if (n1 && n2) {return a+b}
		else return NAN;
}
*/
/*
function user (nom,prenom){
	this.nom=nom;
	this.prenom=prenom;
	this.direHi = function(){
		console.log("Hi");
	}
}

let a= new user ('lakhl','rachid');
let b= new user ('sou','yassir');
*/
/*
function vect (x,y){
	this.x=x;
	this.y=y;	
};

vect.prototype.module=function(){
	return Math.sqrt(this.x**2 +this.y**2);
}

vect.prototype.egale=function(v){

	
	return (this.x==v.x && this.y==v.y);

}

let v1=new vect(2,4);
let v2=new vect(3,4);
console.log(v1.module());
console.log(v2.module());
console.log(v1.egale(v2));
*/
class vect{
	constructor (x,y){
		this.x=x;
		this.y=y;	
	}
	module(){
		return Math.sqrt(this.x**2 +this.y**2);
	}

	egale(v){
		return (this.x==v.x && this.y==v.y);
	}
}

let v1=new vect(2,4);
let v2=new vect(3,4);
console.log(v1.module());
console.log(v2.module());
console.log(v1.egale(v2));