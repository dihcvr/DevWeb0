//Exercice 1 :
	document.getElementById("ex1").innerHTML = "Hello World";

//Exercice 2 : 
document.writeln('<form >');
document.writeln('<input type="text" id="ex2" size ="30">');
document.writeln('</form>');
 
document.getElementById('ex2').value="Vous avez réussi votre exercice";

//Exercice 3 :

function isEmpty(){
     var x = document.forms['fform'].champ.value;
     if( x.length ==0) {
          alert( "Le champ n'est pas remplie!" );
          
     }
 }

//Exercice 4:
a = "1";
b = "2";
c = a + b;
 
document.writeln("Type et valeur des variables:");
document.writeln("  a: ("+typeof(a)+") "+a);
document.writeln("  b: ("+typeof(b)+") "+b);
document.writeln("  c: ("+typeof(c)+") "+c);
 
document.writeln("");
 
a = parseInt(a);
b = parseInt(b);
c = a + b;
 
document.writeln("Type et valeur des variables:");
document.writeln("  a: ("+typeof(a)+") "+a);
document.writeln("  b: ("+typeof(b)+") "+b);
document.writeln("  c: ("+typeof(c)+") "+c);

function myfun() {
  var i;
  var sum = 0;
  for(i = 0; i < arguments.length; ++i) {
    sum += arguments[i];
  }
  return sum;
}
 
var a = 1;
var b = 2;
var c = 3; 
document.writeln("Variables :"+ "<br>");
document.writeln("a = "+a+ "<br>");
document.writeln("b = "+b+ "<br>");
document.writeln("c = "+c+ "<br>");
 
document.writeln("Add:<br>");
document.writeln("Somme de a , b   :   "+myfun(a, b)+ "<br>");
document.writeln("Somme de a , b , c  : "+myfun(a, b, c)+ "<br>");

