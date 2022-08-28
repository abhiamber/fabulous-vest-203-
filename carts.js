let arr=JSON.parse(localStorage.getItem("cart"))||[];
console.log(arr)
function append(){
   arr.forEach(element => {
    let div=document.createElement("div")
    let img=document.createElement("img");
    img.src=element.image
    let p=document.createElement("p");
    p.innerText="Title : "+element.title
    let p1=document.createElement("p");
    p1.innerText="Author : "+element.author
    let p2=document.createElement("p");
    p2.innerText="Amount : "+Math.floor(element.amount);
    let p3=document.createElement("p");
    p3.innerText=element.quantity
    div.append(img,p,p1,p2)
    let container=document.getElementById("container");
    container.append(div)
    });
}
append()