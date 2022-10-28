// func change your position

function APP(nameApp) {
    localStorage.setItem('name' , nameApp);
    location.href = 'https://ziadahmedfawzy.github.io/app_page_web_application/';
}

let nav_open = document.getElementById("nav_open");
let side_bar = document.getElementById("side_bar");

nav_open.addEventListener("click" , function() {
    side_bar.classList.add("show-side-bar");
    side_bar.classList.remove("hide-side-bar");
})

let nav_close = document.getElementById("nav_close");

nav_close.addEventListener("click" , function() {
    side_bar.classList.remove("show-side-bar");
    side_bar.classList.add("hide-side-bar");
})

let header_1st = document.getElementById("header_1st");

window.addEventListener("scroll" , function() {
    if(window.scrollY > 84) {
        header_1st.classList.add("scroll-header");
        header_1st.classList.remove("hide-scroll-header");
    }
    else {
        header_1st.classList.remove("scroll-header");
        header_1st.classList.add("hide-scroll-header");
    }
});

let search_icon = document.getElementById("search_icon")

let seacrh_container = document.getElementById("seacrh_container");

search_icon.addEventListener("click" , function() {
    seacrh_container.classList.add("search-show")
    seacrh_container.classList.remove("search-hide");

})

let close_search = document.getElementById("close_search");

close_search.addEventListener("click" , function() {
    seacrh_container.classList.add("search-hide");
    seacrh_container.classList.remove("search-show")
})

// window.addEventListener("load" , function() {
//     this.setInterval(function() {
//         document.body.innerHTML = "green"
//     } , 2000)
// })
