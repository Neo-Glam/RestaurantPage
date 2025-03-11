export const homepage = function(){

    
    const title = document.createElement("h1");
    title.innerText = "WELCOME TO VA-11 HALLL-A";
    title.classList.add("title");

    const flavourOne = document.createElement("p");
    flavourOne.innerText="The last haven in a neon-lit, dystopian cyberpunk world. Hidden in the shadows of Glitch City, this intimate bar serves more than just drinks—it serves stories. Here, bartenders are confidants, and every cocktail is a key to unraveling the lives of the city’s lost souls. Step inside, let the synthwave beats wash over you, and immerse yourself in a world where every sip tells a tale"
    flavourOne.classList.add("flavour")

    const sep = document.createElement("div");
    sep.classList.add("separator");


    const flavourTwo = document.createElement("p");
    flavourTwo.innerText="But VA-11 HALL-A is more than just a bar—it's a refuge from the chaos outside. Corporate oppression, rogue AIs, and the ever-present glow of surveillance drones fade into the background as you take a seat at the counter. The dim neon lights flicker against polished steel, and the air hums with the low buzz of synthwave. Here, conversations flow as freely as the liquor, and every patron carries a story waiting to be told. So, what will it be tonight? A classic Bleeding Jane, or something stronger to drown out the city's whispers?"
    flavourTwo.classList.add("flavour");


    content.appendChild(title);
    content.appendChild(flavourOne);
    content.appendChild(sep);
    content.appendChild(flavourTwo);

}