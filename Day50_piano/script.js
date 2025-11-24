function play(note) {
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-note="${note}"]`);
    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 200);
}

document.querySelectorAll(".key").forEach(k => {
    k.addEventListener("click", () => play(k.getAttribute("data-note")));
});

const keyMap = {
    A: "A", B: "B", C: "C", D: "D", E: "E",
    F: "F", G: "G", H: "H", I: "I", J: "J",
    K: "K", L: "L", M: "M", N: "N", O: "O",
    P: "P", Q: "Q", R: "R", S: "S", T: "T",
    U: "U", V: "V", W: "W", X: "X", Y: "Y", Z: "Z"
};

document.addEventListener("keydown", e => {
    const key = e.key.toUpperCase();
    if (keyMap[key]) play(keyMap[key]);
});