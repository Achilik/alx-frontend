function setCookies() {
    const firstName = document.querySelector("#firstname").value;
    const email = document.querySelector("#email").value;
    document.cookie = `firstname=${firstName}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    const cookies = document.cookie;
    const para = document.createElement("p");
    para.innerHTML = `Cookies: ${cookies}`;
    document.body.appendChild(para);
}
