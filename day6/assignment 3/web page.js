var name = prompt("enter your name:-");

document.getElementById('name').innerHTML = name
const dmode = document.getElementById('dark');

dmode.onclick = function changecolor(){
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
}
changecolor();

const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
 setInterval(clock,1000);

