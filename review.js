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
let quantity=document.getElementById("quan").value; 

let amount=399;
let x=new Date();
let month = months[x.getMonth()];
let year=x.getFullYear();
let date=x.getDate();
h.innerText=d+date+" "+month+" "+year
let img=document.getElementById("img");
img.src="https://s26162.pcdn.co/wp-content/uploads/2019/11/A1NfEjobJnL-691x1024.jpg"
h1.innerText="Most Influential Classics of All Time (Box Set of 4 Books)"
h2.innerText="by Lao Tzu, Friedrich Nietzsche, James Allen, Kahlil Gibran"
h3.innerText=q+amount;
h4.innerText=h3.innerText;

function myfunc(){
    let quantity=document.getElementById("quan").value;       
    h5.innerText=y+quantity;
    let prod=amount*Number(quantity)
    h6.innerText=t+prod
}
let shipmentDetail=JSON.parse(localStorage.getItem("shipment"));
h7.innerText=n+shipmentDetail.name;
h8.innerText=a+shipmentDetail.address;
h9.innerText=p+shipmentDetail.number;