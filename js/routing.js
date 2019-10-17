const urlDataJSON = "https://my-json-server.typicode.com/damiantymkowski/Whatever/db";
let home;
let register;
const registerButton = document.getElementById("wannaRegisterBtn");
registerButton.addEventListener("click", alert("test"));

fetch(urlDataJSON).then(
    function(dataUI) {return dataUI.json();}
)

.then(
    function(json){
        home = json.home[0]["html"];
        register = json.register[0]["html"];
    }
)

.then(
    function(){
const routes = {
    '/' : home,
    '/register' : register
    };

window.onpopstate = () => {
    mainBox.innerHTML = routes[window.location.pathname]
}

const mainBox = document.querySelector(".welcomeBox__loginForm");
mainBox.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    mainBox.innerHTML = routes[pathname]
}
    }
)

