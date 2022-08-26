function navbar(){
    return `
    <div id="navbar">
    <div id="search">

        <div id="home">
            <p id="logo"><a href="./index.html">IDEAKART</a></p>
        </div>
        <div id="results">
        
        <input id="input" placeholder="Search">
    
        <button id="btn" onclick="getbooks()">Search</button><br>
        
        </div>
    </div>
    
    
    <div id="options">
        <p><a href="./about.html">About</a></p>
        
        <p><a href="./contact.html">Contact</a></p>
        <p><a href="./signin.html" id="signinT">Sign In</a></p>
        <p><a href="./signup.html" id="signupT">Sign Up</a></p>
    </div>
</div>


    `
}
export default navbar