let bulb=document.querySelector("#bulb");
let btn=document.querySelector("button");
var flag=0
btn.addEventListener("click",()=>{
    if(flag==0){

    bulb.style.backgroundColor= "yellow";
    btn.innerText="on"
    flag=1 
}  else{
bulb.style.backgroundColor="transparent";
btn.innerText="off";
flag=0
    }
})