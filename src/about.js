export const about = function(){
    const title = document.createElement("h1");
    title.innerText = "CONTACT US";
    title.classList.add("title");

    const info = document.createElement("ul");

    const comms = document.createElement("li");
    comms.innerText = "Comms Line: +77-011-42-VA11"

    const mail = document.createElement("li");
    mail.innerText = "Neural Mail: contact@va11halla.bar"

    const page = document.createElement("li");
    page.innerText = "NetPage: www.va11halla.glitch"

    const soc = document.createElement("li");
    soc.innerText = "Datastream (Socials): @VA11HALLA on GridNet"

    const sep = document.createElement("div");
    sep.classList.add("separator");

    info.appendChild(comms);
    info.appendChild(mail);
    info.appendChild(page);
    info.appendChild(soc);

    content.appendChild(title);
    content.appendChild(sep);
    content.appendChild (info);

}