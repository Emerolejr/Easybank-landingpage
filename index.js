
//Mobile section of js code starts here 
document.querySelector(".menu").addEventListener("click",function(){
    if(this.style.backgroundImage=='url("images/icon-menu.svg")'){
        this.style.backgroundImage="url('images/icon-close.svg')"
        document.querySelector("header .menu-list").style.display="block";
    }
    else{
            this.style.backgroundImage="url('images/icon-menu.svg')"
            document.querySelector(".menu-list").style.display="none";
    }
});
//Mobile section of js code ends here 


// Desktop section of js code starts here


// Desktop section of js code ends here