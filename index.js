let cuttingButton = 40;
 let cuttingButton1= 0;
 
 
function play(){
    const removeButton=document.getElementById("home");
    removeButton.classList.add("hidden");
    const playGroundSection = document.getElementById("play-ground");
    playGroundSection.classList.remove("hidden");

    
}
const sitsItem = document.getElementById("sits");
const sitsButton=sitsItem.querySelectorAll(".btn");

for (let i=0 ; i<sitsButton.length;i++){
     const setButton = sitsButton[i];
   
 setButton.addEventListener('click',function(){

     setButton.classList.add("bg-[#1DD100]");
    //counting//
    cuttingButton = cuttingButton-1;
    document.getElementById("count").innerText= cuttingButton;
    //counting end//

    cuttingButton1=cuttingButton1+1
    document.getElementById("count2").innerText=cuttingButton1;
 })
}
