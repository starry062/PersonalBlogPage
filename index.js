window.onload = function () {
    //设定按钮在滚动后显示
    document.onscroll = function () {
        let navButton = document.getElementById("nav-button");
        let scroll = document.documentElement.scrollTop || document.body.scrollTop;
        let width = document.documentElement.clientWidth || document.body.clientWidth;
        if(scroll >= 0.1 * width){
            navButton.style.opacity = '1.0';
            navButton.style.visibility = 'visible'
        }
        else{
            navButton.style.opacity = '0.0';
            navButton.style.visibility = 'hidden'
        }
    }
}

function goTop() {
    window.scrollTo(
        {
            left: 0,
            top: 0,
            behavior: "smooth"
        }
    );
}