let shipmentDetail=JSON.parse(localStorage.getItem("shipment"));
let h=document.getElementById("detail");
h.innerText="Shipping to "+shipmentDetail.name+", "+shipmentDetail.address+", "+"Phone number "+shipmentDetail.number;
let obj = JSON.parse(localStorage.getItem("bookData") || {});
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let p=document.getElementById("date");
let z=new Date();
let month = months[z.getMonth()];
let year=z.getFullYear();
let date=z.getDate()+2;
p.innerText=date+", "+month+" "+year;
let img=document.getElementById("img");
img.src=`https://covers.openlibrary.org/b/isbn/${obj.isbn[0]}-L.jpg`;


