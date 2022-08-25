function navbar(){
    return `
    <div id="navbar">
    <div id="search">

        <div id="home">
            <p id="logo"><a href="./index.html">IDEAKART</a></p>
        </div>
        <div id="results">
        <div id="search_div">
        <input id="input" placeholder="Search">
        </div>
        <div id="btn_div">
        <button id="btn" onclick="getbooks()">Search</button><br>
        </div>
        </div>
    </div>
    
    
    <div id="options">
        <p><a href="./about.html">About</a></p>
        
        <p><a href="./contact.html">Contact</a></p>
        <p><a href="./signin.html">Sign In</a></p>
        <p><a href="./signup.html">Sign Up</a></p>
    </div>
</div>


    `
}
export default navbar