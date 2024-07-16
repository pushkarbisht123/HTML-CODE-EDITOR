console.log("JavaScript is linked!");


function ex(){
    let a=document.getElementById("code_area").value;
    let b=document.getElementById("Result");
    b.innerHTML=a;
    let c=document.getElementById("code_box");
    c.style.display="none";
    let z=document.getElementById("show");
    z.style.display="block";
    let v=document.getElementById("btn_1st");
    v.style.display="none";
    let g=document.getElementById("btn_2nd");
    g.style.display="block";
   
}

function rtn(){
    let z=document.getElementById("show");
    z.style.display="none";
    let c=document.getElementById("code_box");
    c.style.display="block";
    let v=document.getElementById("btn_1st");
    v.style.display="block";
    let g=document.getElementById("btn_2nd");
    g.style.display="none";
}