let num = document.querySelector("h1");
let but = document.querySelectorAll("button");
let inc = document.querySelector("#inc");
let dec = document.querySelector("#dec");
let reset = document.querySelector("#reset");

let count = 0;
let holdInterval;

inc.addEventListener('click', () => {
    num.innerHTML = ++count;

    if (count > 0) num.style.color = 'green';
    else if (count == 0) num.style.color = 'rgb(41, 20, 41)';
    else num.style.color = 'red';
})

inc.addEventListener("mousedown", () => {
    holdInterval = setInterval(() => {
        num.innerHTML = ++count;
    }, 250); // adjust speed (250ms per increment)
});
inc.addEventListener("mouseup", () => clearInterval(holdInterval));
inc.addEventListener("mouseleave", () => clearInterval(holdInterval)); // for sefty 


dec.addEventListener('click', () => {
    // if (count <= 0) alert("Can't go below 0");
    // else num.innerHTML = --count;

    num.innerHTML = --count;
    if (count > 0) num.style.color = 'green';
    else if (count == 0) num.style.color = 'rgb(41, 20, 41)';
    else num.style.color = 'red';
})

dec.addEventListener("mousedown", () => {
    holdInterval = setInterval(() => {
        if (count <= 0) {
            alert("Can't go below 0");
            clearInterval(holdInterval);
        } // stop further repeats
        else num.innerHTML = --count;
    }, 300);
})
dec.addEventListener("mouseup", () => clearInterval(holdInterval));
dec.addEventListener("mouseleave", () => clearInterval(holdInterval)); // for sefty 

reset.addEventListener("click", () => {
    count = 0;
    num.innerHTML = count;
})

but.forEach(element => {
    element.addEventListener('mousedown', () => {
        element.style.transform = "scale(0.9) translateY(-5px)";
    });
    element.addEventListener('mouseup', () => {
        element.style.transform = "scale(1) translateY(0px)";
    });
    element.addEventListener('mouseleave', () => {
        element.style.transform = "scale(1) translateY(0px)";
    });
});


// inc.addEventListener('mouseenter', () => {
//     num.innerHTML = `${count}+1`;
//     num.style.color = 'green';
// })
// inc.addEventListener('mouseleave', () => {
//     num.innerHTML = `${count}`;
//     num.style.color = 'rgb(41, 20, 41)';
// })

// dec.addEventListener('mouseenter', () => {
//     num.innerHTML = `${count}-1`;
//     num.style.color = 'red';
// })
// dec.addEventListener('mouseleave', () => {
//     num.innerHTML = `${count}`;
//     num.style.color = 'rgb(41, 20, 41)';
// })

