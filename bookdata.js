// localStorage.setItem("bookData", JSON.stringify(data));
let obj = JSON.parse(localStorage.getItem("bookData") || {}) 
// http://covers.openlibrary.org/b/isbn/${el.isbn[0]}-L.jpg
console.log(obj);

let auther_name=document.getElementById("author_name")

let publisher_name=document.getElementById("publisher_name")

document.getElementById("title").innerHTML=obj.title //this is for Book Titl

document.getElementById("book_image").src=`http://covers.openlibrary.org/b/isbn/${obj.isbn[0]}-L.jpg`

auther_name.innerHTML=obj.author_name[0]
auther_name.href=`https://en.wikipedia.org/wiki/${obj.author_name[0]}`

publisher_name.innerHTML=obj.publisher[0]
publisher_name.href=`https://en.wikipedia.org/wiki/${obj.publisher[0]}`

document.getElementById("number_of_pages").innerHTML=obj.number_of_pages_median

document.getElementById("isbn10").innerHTML=obj.isbn[1]

document.getElementById("isbn13").innerHTML=obj.isbn[0]

document.getElementById("refresh").addEventListener("click", ()=>{
    window.location.reload();
})
