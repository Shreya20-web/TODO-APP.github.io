function logOut(){
    localStorage.setItem('isLoggedIn', false);
    window.location.pathname="/login.html"
}

function Navbar(probs) {
    return (
        // <div class="container">

        // <div class="navbar">
    
            <nav>
                
            <div class="logo">
                <a href="index.html"><img src="../images/To-do.jpeg" width="100px"/></a>
            </div>
                <ul id="menuitems">
                    <li><i class="fas fa-home"></i>Overview</li>
                    <li><i class="fas fa-chart-bar"></i>Stats</li>
                    <li><i class="fas fa-folder-open"></i>Project</li>
                    <li><i class="fas fa-comment-alt"></i>Chat</li>
                    <li><i class="fas fa-calendar-alt"></i>Calender</li>
                    <div class="icons">
                    <li><i class="fas fa-cog"></i>Setting</li>
                    {/* <button class="btn2" onClick={logOut}><li><i class="fas fa-sign-out-alt"></i>Log Out</li></button> */}
                    <div onClick={logOut}><li><i class="fas fa-sign-out-alt"></i>Log Out</li></div>
                    </div>
                </ul>
            </nav>

    //     </div>
    // </div>
    );
}

export default Navbar;