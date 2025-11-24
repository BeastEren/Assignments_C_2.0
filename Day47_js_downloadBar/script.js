let but = document.querySelector('button');
let innerbar = document.querySelector('.inner');
let loadNo = document.querySelector('h2');
let card = document.querySelector('.card');
let detail = document.querySelector('.detail');

but.addEventListener('click', () => {
    let pregress = 0;
    but.style.pointerEvents = 'none';
    let rand = Math.floor(Math.random() * 21) + 20;

    let showTime = document.createElement('h1');
    showTime.style.textAlign = 'center';
    showTime.style.fontSize = '1rem';
    showTime.style.marginTop = '0.6rem';
    showTime.style.color = 'rgb(45, 150, 219)';

    let start = setInterval(() => {
        pregress++;
        innerbar.style.width = `${pregress}%`;
        loadNo.innerHTML = `${pregress}%`;
        but.style.backgroundColor = 'gray'

        if (pregress >= 0) {
            showTime.innerHTML = 'Downloading...'
            detail.appendChild(showTime);
        }
        if (pregress > 60) {
            showTime.innerHTML = "Finishing up...";
        }

        if (pregress >= 100) {
            clearInterval(start);
            innerbar.style.backgroundColor = 'green';
            but.innerHTML = "Done";

            showTime.innerHTML = `It took ${rand / 10} seconds to download.`;
            showTime.style.color = 'green';
        }

    }, rand);

    // setTimeout(() => {
    //     clearInterval(start);
    //     innerbar.style.backgroundColor = 'green';
    //     but.style.backgroundColor = 'gray'
    //     but.innerHTML = "Done";

    //     let showTime = document.createElement('h1');
    //     showTime.innerHTML = `It took ${rand / 10} seconds to download`;
    //     showTime.style.textAlign = 'center';
    //     showTime.style.fontSize = '1rem';
    //     showTime.style.marginTop = '0.6rem';
    //     showTime.style.color = 'rgb(45, 150, 219)';
    //     card.appendChild(showTime);

    // }, rand * 100);
})