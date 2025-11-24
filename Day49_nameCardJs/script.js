const jobs = [
    {
        company: "Amazon",
        logo: "https://i.pinimg.com/736x/36/ff/72/36ff72fc8d310f1353ecb2e5862296ab.jpg",
        posted: "5 days ago",
        role: "Senior UI/UX Designer",
        type: ["Part-Time", "Senior Level"],
        salary: "$120/hr",
        location: "Mumbai, India"
    },
    {
        company: "Google",
        logo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
        posted: "30 days ago",
        role: "Graphic Designer",
        type: ["Part-Time", "Flexible Schedule"],
        salary: "$150-220k",
        location: "Kochi, India"
    },
    {
        company: "Dribble",
        logo: "https://images.vexels.com/media/users/3/137251/isolated/preview/4dd720f6ca6047fcf50bb14439e2f7af-dribbble-icon-logo.png?w=360",
        posted: "18 days ago",
        role: "Senior Motion Designer",
        type: ["Contract", "Remote"],
        salary: "$85/hr",
        location: "Chennai, India"
    },
    {
        company: "Figma",
        logo: "https://static.vecteezy.com/system/resources/thumbnails/065/386/869/small/figma-circle-logo-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png",
        posted: "5 days ago",
        role: "UX Designer",
        type: ["Full-Time", "In Office"],
        salary: "$200-250k",
        location: "Bangalore, India"
    },
    {
        company: "Airbnb",
        logo: "https://cdn-icons-png.freepik.com/512/4494/4494647.png",
        posted: "5 days ago",
        role: "Junior UI/UX Designer",
        type: ["Contract", "Remote"],
        salary: "$100/hr",
        location: "Delhi, India"
    },
    {
        company: "Apple",
        logo: "https://i.pinimg.com/564x/f0/e6/40/f0e640bfaee46b31d21a8fa1087c2efc.jpg",
        posted: "5 days ago",
        role: "Graphic Designer",
        type: ["Full-Time", "Flexible Schedule"],
        salary: "$85-120k",
        location: "Kerala, India"
    }
];

let output = "";

jobs.forEach(job => {
    output += `
        <div class="card">
            <div class="card-top">
                <div class="logo"><img src="${job.logo}"></div>
                <div class="save">Save <i class="ri-bookmark-line"></i></div>
            </div>

            <p class="company">${job.company} <span class="posted">${job.posted}</span></p>
            <h3>${job.role}</h3>

            <div class="tags">
                ${job.type.map(t => `<span class="tag">${t}</span>`).join('')}
            </div>

            <div class="bottom-info">
                <div>
                    <p class="salary">${job.salary}</p>
                    <p class="location">${job.location}</p>
                </div>
                <div class="apply-btn">Apply now</div>
            </div>
        </div>
    `;
});

document.querySelector("#job-container").innerHTML = output;


let saveBtns = document.querySelectorAll('.save');

saveBtns.forEach(function (btn) {
    let flag = false; // <--- individual flag for each card

    btn.addEventListener('click', function () {
        if (!flag) {
            this.innerHTML = 'Saved <i class="ri-bookmark-fill"></i>';
            this.style.backgroundColor = "#a1a1a180";
            this.style.color = "#000";
            flag = true;
        } else {
            this.innerHTML = 'Save <i class="ri-bookmark-line"></i>';
            this.style.backgroundColor = "#fff";
            this.style.color = "#000";
            flag = false;
        }
    });
});