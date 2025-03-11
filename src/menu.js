export const cocktails = function(){
    
    const title = document.createElement("h1");
    title.innerText = "VA-11 HALL-A – Drink Menu";
    title.classList.add("title");

    const flavourOne = document.createElement("p");
    flavourOne.innerText = "A drink for every story, a story for every drink.";

    const flavourTwo = document.createElement("p");
    flavourTwo.innerText = "No matter who you are or where you come from, there's always a drink waiting for you at VA-11 HALL-A.";

    const menuTitle = document.createElement("ul");
    menuTitle.innerText = "SIGNATURE COCKTAILS";

    const sep = document.createElement("div");
    sep.classList.add("separator");

    const itemOne = document.createElement("li");
    itemOne.innerHTML = "<h5>Bleeding Jane</h5><p>A bold, spicy twist on the classic, with synthetic vodka, spiced tomato extract, and a hint of cyber-pepper.</p>"

    const itemTwo = document.createElement("li");
    itemTwo.innerHTML = "<h5>Piano Man</h5><p>A sophisticated mix of aged bourbon, cyber-lime, and bitters, finished with a hint of smoked synthwood.</p>"

    const itemThre = document.createElement("li");
    itemThre.innerHTML = "<h5>Sugar Rush</h5><p>A neon-pink explosion of sweet liqueur, white rum, and carbonated cherry fizz.</p>"

    const itemFour = document.createElement("li");
    itemFour.innerHTML = "<h5>Zen Star</h5><p>A perfectly balanced blend of gin, blue algae essence, and citrus mist.</p>"

    const itemFive = document.createElement("li");
    itemFive.innerHTML = "<h5>Moonblast</h5><p>A dreamy fusion of coconut synth-milk, white rum, and lychee foam, served over crushed ice.</p>"

    const itemSix = document.createElement("li");
    itemSix.innerHTML = "<h5>Cobalt Velvet</h5><p>A dangerously smooth whiskey and cola infusion, served ice-cold in a frosted glass.</p>"

    const itemSeven = document.createElement("li");
    itemSeven.innerHTML = "<h5>Bad Touch</h5><p>A risky yet delightful mix of blue absinthe, synthetic honey, and citrus zest.</p>"

    const itemEight = document.createElement("li");
    itemEight.innerHTML = "<h5>Flaming Moai</h5><p>A towering, fiery mix of dark rum, pineapple core essence, and a touch of glowing blue curacao.</p>"

    menuTitle.appendChild(itemOne);
    menuTitle.appendChild(itemTwo);
    menuTitle.appendChild(itemThre);
    menuTitle.appendChild(itemFour);
    menuTitle.appendChild(itemFour);
    menuTitle.appendChild(itemFive);
    menuTitle.appendChild(itemSix);
    menuTitle.appendChild(itemSeven);
    menuTitle.appendChild(itemEight);

    content.appendChild(title);
    content.appendChild(flavourOne);
    content.appendChild(sep);
    content.appendChild(menuTitle);
    content.appendChild(flavourTwo);

}   