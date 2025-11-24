const iplTeams = [
    {
        shortName: "MI",
        fullName: "Mumbai Indians",
        primaryColor: "Blue",
        secondaryColor: "Gold",
        captain: "Hardik Pandya",
        trophiesWon: 5
    },
    {
        shortName: "CSK",
        fullName: "Chennai Super Kings",
        primaryColor: "Yellow",
        secondaryColor: "Blue",
        captain: "Ruturaj Gaikwad",
        trophiesWon: 5
    },
    {
        shortName: "RCB",
        fullName: "Royal Challengers Bengaluru",
        primaryColor: "Red",
        secondaryColor: "Black",
        captain: "Faf du Plessis",
        trophiesWon: 0
    },
    {
        shortName: "KKR",
        fullName: "Kolkata Knight Riders",
        primaryColor: "Purple",
        secondaryColor: "Gold",
        captain: "Shreyas Iyer",
        trophiesWon: 3
    },
    {
        shortName: "RR",
        fullName: "Rajasthan Royals",
        primaryColor: "Pink",
        secondaryColor: "Blue",
        captain: "Sanju Samson",
        trophiesWon: 1
    },
    {
        shortName: "SRH",
        fullName: "Sunrisers Hyderabad",
        primaryColor: "Orange",
        secondaryColor: "Black",
        captain: "Pat Cummins",
        trophiesWon: 1
    },
    {
        shortName: "DC",
        fullName: "Delhi Capitals",
        primaryColor: "Blue",
        secondaryColor: "Red",
        captain: "Rishabh Pant",
        trophiesWon: 0
    },
    {
        shortName: "PBKS",
        fullName: "Punjab Kings",
        primaryColor: "Red",
        secondaryColor: "Gold",
        captain: "Shikhar Dhawan",
        trophiesWon: 0
    },
    {
        shortName: "LSG",
        fullName: "Lucknow Super Giants",
        primaryColor: "Blue",
        secondaryColor: "Orange",
        captain: "KL Rahul",
        trophiesWon: 0
    },
    {
        shortName: "GT",
        fullName: "Gujarat Titans",
        primaryColor: "Dark Blue",
        secondaryColor: "Gold",
        captain: "Shubman Gill",
        trophiesWon: 1
    }
];

let card = document.querySelector('.card');
let main = document.querySelector('main');

let h1 = document.querySelector('#fullName');
let h2 = document.querySelector('#shortName');

let chap = document.querySelector('#chap');
let trof = document.querySelector('#trof');

let but = document.querySelector('button');

but.addEventListener('click', () => {
    let dataObj = iplTeams[Math.floor(Math.random() * iplTeams.length)];
    h1.innerHTML = `${dataObj.fullName}`;
    h2.innerHTML = `${dataObj.shortName}`;
    chap.innerHTML = `Captain: ${dataObj.captain}`;
    trof.innerHTML = `Trophies: ${dataObj.trophiesWon}`;

    card.style.backgroundColor = `${dataObj.primaryColor}`;
    main.style.backgroundColor = `${dataObj.secondaryColor}`;
})