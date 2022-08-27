import navbar from "./components/navbar.js";
// localStorage.setItem("bookData", JSON.stringify(data));
let obj = JSON.parse(localStorage.getItem("bookData") || {});
// http://covers.openlibrary.org/b/isbn/${el.isbn[0]}-L.jpg
console.log(obj);

let auther_name = document.getElementById("author_name");

let publisher_name = document.getElementById("publisher_name");

document.getElementById("title").innerHTML = obj.title; //this is for Book Titl

document.getElementById("book_image").src = `http://covers.openlibrary.org/b/isbn/${obj.isbn[0]}-L.jpg`;

auther_name.innerHTML = obj.author_name[0];
auther_name.href = `https://en.wikipedia.org/wiki/${obj.author_name[0]}`;

publisher_name.innerHTML = obj.publisher[0];
publisher_name.href = `https://en.wikipedia.org/wiki/${obj.publisher[0]}`;

let nunber= obj.number_of_pages_median;
(nunber == undefined) ? nunber=450 : nunber=obj.number_of_pages_median

document.getElementById("number_of_pages").innerHTML = nunber;

document.getElementById("isbn10").innerHTML = obj.isbn[1];

document.getElementById("isbn13").innerHTML = obj.isbn[0];

document.getElementById("refresh").addEventListener("click", () => {
  window.location.reload();
});

document.getElementById(
  "authortitle"
).innerHTML = `${obj.author_name[0]} ${obj.title}`;

let description = "";
// try {
//   console.log(obj.cover_edition_key);
//   let str = obj.cover_edition_key;
//   fetch("https://openlibrary.org/works/OL24229209W.json")
//     .then((res) => {
//       return res.json();
//     })
//     .then((res) => {

//       description = res.description;
//       console.log(description);

//       if (description != undefined) {
//         document.getElementById("description").innerHTML = `${description}`;
//       }else {
        
//         document.getElementById("description").innerHTML ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
//       }
//     });  
// } catch (err) {
//   console.log(err);
// }

 

document.getElementById("description").innerHTML ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore excepturi amet assumenda modi, culpa facilis, fugit ipsa eum iste id ipsam vero nam quas. Voluptatibus libero minus, aliquam numquam perspiciatis reiciendis rerum dolorem molestiae fugit sint corrupti quisquam est asperiores modi ex cupiditate doloribus commodi beatae deserunt mollitia praesentium cumque voluptatum? Voluptatibus aliquam iure quod similique delectus, autem nesciunt cupiditate dolores dolore! Velit quos est doloremque nesciunt. Enim non ullam saepe blanditiis facilis ea. Porro, nisi reprehenderit cumque, soluta officiis possimus ab harum eius nihil corporis eum facere quis ratione. Asperiores rem tempora facilis, eius accusamus, eligendi tenetur similique, quo ad assumenda possimus temporibus eaque sequi suscipit repellat optio ipsa. Quia accusantium, commodi accusamus quidem ipsa natus cumque dolores ut, sunt magnam officiis fugit molestiae modi nesciunt, perferendis corrupti eos tenetur animi. Corporis quae eveniet officia fugiat quibusdam repudiandae ipsa magni reprehenderit sed rerum inventore odio et enim voluptas repellat, eligendi labore? Odio, saepe porro corrupti minima asperiores voluptate quos esse excepturi vero consequuntur necessitatibus eligendi autem quas possimus ea quidem? Enim, ex quae, impedit inventore quia quam cumque atque suscipit officia et incidunt illum tenetur dolores architecto numquam blanditiis itaque aliquam. Aliquam obcaecati pariatur consequatur aspernatur officia! Earum ipsum accusantium, maxime harum incidunt similique iure vero deserunt! Perspiciatis modi voluptates impedit! Reprehenderit tempore praesentium assumenda nesciunt molestias nam quis, doloremque iure fuga, optio obcaecati iste. Impedit officiis architecto incidunt beatae totam cumque nam id sequi ratione commodi harum, et ea sed aliquam hic, quisquam vitae quos illo? Veniam, modi vitae dolorem temporibus magni illum esse quas, optio saepe delectus nostrum sint aperiam a eum exercitationem alias quod, facilis perspiciatis unde? Facere, quas numquam sit minus ratione blanditiis aperiam animi nostrum repudiandae rem atque similique dignissimos odio autem recusandae sapiente. Fuga, deleniti quas! Quam perspiciatis molestiae eius, repellat magni numquam.";
// document.getElementById("description").innerHTML =description

let price = document.querySelectorAll('.price');
// console.log(price[0].innerHTML=);

for (let index = 0; index < price.length; index++) {
    price[index].innerHTML=`Rs. ${Math.floor(obj.price)}` 
    // const element = price[index];
    
}

// console.log(price);

let navbar_append = document.getElementById("nav_container");
navbar_append.innerHTML = navbar();
let dat=document.getElementById("signinT")
let dat2=document.getElementById("signupT")
let dat3=document.getElementById("account_tab") 
//added account tab that will appear only after SignIn
// console.log(dat)
 let user_name=JSON.parse(localStorage.getItem("users"))
 if(user_name!=null){
  // console.log(user_name)

  dat.addEventListener("click",function(event){
    event.preventDefault();
    // window.location.href="./index.html"
  })
  dat.innerText=user_name.email
  dat2.innerHTML="Log Out"
  dat2.addEventListener("click",function(event){
    event.preventDefault()
    dat.innerText="Sign In"
    dat2.innerText="Sign Up"
    localStorage.setItem("users",null) 
     localStorage.setItem("users",null) 
    localStorage.setItem("users",null) 
    window.location.href="./index.html"
    
    
  })
  dat3.classList.remove("account_tab")
  dat3.addEventListener("click",function (event){
    event.preventDefault()
    window.location.href="./account.html"
  })
 }

 
