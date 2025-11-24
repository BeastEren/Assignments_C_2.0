let main = document.querySelector("main");
let but = document.querySelector("#click");
let but2 = document.querySelector("#click2");


const arr = [
    "red blue green",
    "cat dog mouse",
    "sun moon stars",
    "apple mango banana",
    "car bike truck"
];
if (but) {
    but.addEventListener('click', () => {
        let index = Math.floor(Math.random() * arr.length);

        let h1 = document.createElement('h1');
        h1.innerHTML = arr[index];

        let txtSize = Math.random().toFixed(2) * 2;

        let x = Math.floor(Math.random() * 91);
        let y = Math.floor(Math.random() * 91);
        let rot = Math.floor(Math.random() * 361);

        let c1 = Math.floor(Math.random() * 256);
        let c2 = Math.floor(Math.random() * 256);
        let c3 = Math.floor(Math.random() * 256);

        h1.style.scale = txtSize;

        h1.style.position = 'absolute';
        h1.style.top = `${y}%`;
        h1.style.left = `${x}%`;
        h1.style.rotate = `${rot}deg`;

        h1.style.color = `rgb(${c1},${c2},${c3})`;

        main.appendChild(h1);
    });

}
if (but2) {
    but2.addEventListener('click', () => {
        // let i = 10;
        // while (i > 0) {
        let div1 = document.createElement('div');
        let divSize = Math.random().toFixed(2);

        let c1 = Math.floor(Math.random() * 256);
        let c2 = Math.floor(Math.random() * 256);
        let c3 = Math.floor(Math.random() * 256);

        let x = Math.floor(Math.random() * 91);
        let y = Math.floor(Math.random() * 91);
        let rot = Math.floor(Math.random() * 361);

        div1.style.position = 'absolute';
        div1.style.top = `${y}%`;
        div1.style.left = `${x}%`;
        div1.style.rotate = `${rot}deg`;

        div1.style.width = '10rem';
        div1.style.height = '10rem';
        div1.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
        div1.style.scale = divSize;


        main.appendChild(div1);
        //     i--;
        // }
    });
}