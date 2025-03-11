import "./styles.css";
import { homepage } from "./home";
import { about } from "./about";
import { cocktails } from "./menu";
import logoBar from "./logo.png";

const content = document.querySelector("#content")

const home = document.createElement("button");
home.innerText = "HOME"

home.addEventListener("click", ()=>{
    content.innerHTML = "";
    homepage();
    home.disabled=true;
    contact.disabled=false;
    menu.disabled=false;

})

const contact = document.createElement("button");
contact.innerText = "CONTACT"

contact.addEventListener("click", ()=>{
    content.innerHTML = "";
    about();
    contact.disabled=true;
    home.disabled=false;
    menu.disabled=false;

})

const menu = document.createElement("button");
menu.innerText = "MENU"

menu.addEventListener("click", ()=>{
    content.innerHTML = "";
    cocktails();
    menu.disabled=true;
    contact.disabled=false;
    home.disabled=false;

})

const nav = document.querySelector("#nav");

const logo = document.createElement("img")
logo.src = logoBar
logo.classList.add("logo")

const header = document.querySelector("#header")

nav.appendChild(logo)

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);

homepage();
home.disabled=true;