const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let d="Delivery date : ";
let q="Amount : ";
let y="Quantity : ";
let t="Total : ";
let n="Name : ";
let a="Address : ";
let p="Number : "
let h= document.getElementById("date")
let h1= document.getElementById("desc")
let h2= document.getElementById("auth")
let h3= document.getElementById("amt")
let h4= document.getElementById("price")
let h5= document.getElementById("quantity")
let h6= document.getElementById("total")
let h7= document.getElementById("name")
let h8= document.getElementById("address")
let h9= document.getElementById("number")
let h10=document.getElementById("author")
let quantity=document.getElementById("quan").value; 
let obj = JSON.parse(localStorage.getItem("bookData") || {});
let amount=obj.price;
let x=new Date();
let month = months[x.getMonth()];
let year=x.getFullYear();
let date=x.getDate()+2;
h.innerText=d+date+" "+month+" "+year
let img=document.getElementById("img");
img.src=`https://covers.openlibrary.org/b/isbn/${obj.isbn[0]}-L.jpg`
h1.innerText=obj.title;
h2.innerText="Written by : "+obj.author_name
h3.innerText=q+Math.floor(amount);
h4.innerText=h3.innerText;

function myfunc(){
    let quantity=document.getElementById("quan").value;       
    h5.innerText=y+quantity;
    let prod=amount*Number(quantity)
    h6.innerText=t+Math.floor(prod);
    return prod;
}
let shipmentDetail=JSON.parse(localStorage.getItem("shipment"));
h7.innerText=n+shipmentDetail.name;
h8.innerText=a+shipmentDetail.address;
h9.innerText=p+shipmentDetail.number;
let arr=JSON.parse(localStorage.getItem("cart"))||[];

let productObj={
    title:obj.title,
    author:obj.author_name,
    image:`https://covers.openlibrary.org/b/isbn/${obj.isbn[0]}-L.jpg`,
    amount:obj.price,
}
arr.push(productObj)
console.log(arr)

localStorage.setItem("cart",JSON.stringify(arr))

function myorder(){
    if(h5.innerText==""){
        alert ("please select quantity");
        return;
    }
    else{
        window.location.href="order.html"
    }
}
