let num = prompt("enter no.");

for (let i=1; i<=10; i++){
console.log(num + " * " + i + " = " + num*i);  
document.getElementById("demo").innerHTML = num;
}