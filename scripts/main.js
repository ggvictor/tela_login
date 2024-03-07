// efeito dark
const divLogin = document.getElementById("login_div");
const lua = document.getElementById("lua");
const sol = document.getElementById("sol");
const button = document.getElementById("button");
lua.addEventListener('click',() => {
    if(lua.classList.contains("fa-moon")){
        lua.classList.remove("fa-moon");
        lua.classList.add("fa-sun");
        divLogin.classList.remove("login_div");
        divLogin.classList.add("dark");
        divLogin.style.color = "white";
        divLogin.style.border = "solid 1px white";
    }else if(lua.classList.contains("fa-sun")){
        lua.classList.remove("fa-sun")
        lua.classList.add("fa-moon")
        divLogin.classList.remove("dark");
        divLogin.classList.add("login_div");
        divLogin.style.color = "black";
    }
});

