let pound=document.createElement('input');
let dolor=document.createElement('input');
pound.id="pound";
pound.placeholder="EGP";
pound.type="number";
pound.style.display="block";
pound.style.padding="10px";

dolor.id="dolor";
dolor.placeholder="USB";
dolor.type="number";
dolor.style.padding="10px";

pound.onkeyup=function(){
    dolor.value=(pound.value)*50;
}

dolor.onkeyup=function(){
    pound.value=(dolor.value)/50;
}

document.body.appendChild(pound);
document.body.appendChild(dolor);