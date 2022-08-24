let h=document.getElementById("wallet");
let amount=document.getElementById("amount");
let sum=0;
function myfunc(){
    h.innerHTML=null;
    sum=Number(sum)+Number(amount.value);
    h.innerText=Number(sum);
}

