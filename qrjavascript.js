let items=document.querySelector(".items");
let qrInput=document.querySelector("#inputdata");
let generateButton=document.querySelector("#generater");
let img=document.querySelector("#qrimage");

let previousInput;
generateButton.onclick=function()
{
    let input=qrInput.value.trim();
    if(!input || previousInput===input)
    {
        return 
    }
    else
    {
       previousInput=input;
       generateButton.innerText="Generating QR Code...";
       img.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
       img.onload=function()
       {
        items.classList.add("active");
        generateButton.innerText="Generate QR Code";

       }
    }
}

