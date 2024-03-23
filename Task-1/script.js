const playon=document.querySelector(".watchVid");
const X=document.querySelector(".fa-x");
const Iframe=document.querySelector(".iframe");

playon.addEventListener('click',()=>{
    X.style.visibility="visible";
    Iframe.style.display="block";
})

X.addEventListener('click',()=>{
    X.style.visibility="collapse";
    Iframe.style.display="none";
})