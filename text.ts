// type Education = {
//     education : string;
//     institute : string;
//     year: number;
// };

// type Skills =  string;


// type WorkExperience = {
//     position: string;
//     year: number;
//     description: string;
// };

// const educationData : Education[] = [
//     {
//         education: "Under-Graduation",
//         institute: "Karachi University",
//         year: 2024,
//     },
//     {
//         education: "Cloud Applied Generative AI Engineer",
//         institute: "Governor Initiative For Artificial Intelligent and Computing",
//         year: 2024,
//     }
// ];

// const skillData : Skills[] = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "TypeScript",
//     "React.js",
//    " Next.js "  ,
//    "Tailwind CSS" ,
// ];

// const workExperienceData: WorkExperience[] =[
//     {
//         position: "Frontend Developer",
//         year: 2023-2024,
//         description:
//         "Built and maintained interactive, responsive websites. Collaborated on projects using React.js and Next.js, ensuring smooth UI/UX and integrating APIs for dynamic functionality."
//     },
// ];

// function populateEducation(){
//     const educationSection = document.getElementById("education-content")?.querySelector(".card");
//     if(educationSection){
//         educationData.forEach((edu)=> {
//             const educationCard = document.createElement("div");
//             educationCard.classList.add('card');
//             educationCard.classList.add('education-card');

//             educationCard.innerHTML = `<h3 class='card-title'> ${edu.education}</h3>
//             <p class='card-subtitle'> ${edu.institute}</p>
//             <p class='card-details'> ${edu.year}</p>
//             `;
//             educationSection.appendChild(educationCard);
//         });
//     }
// }

// function populateSkills() {
//     const skillsSection = document.getElementById("skill-content")?.querySelector(".skill-list");
//     if (skillsSection) {
//       skillData.forEach((skill) => {
//         const skillItem = document.createElement("li");
//         skillItem.textContent = skill;
//         skillsSection.appendChild(skillItem);
//       });
//     }
//   }

//   function populateWorkExperience() {
//     const workExperienceSection = document.getElementById("work-experience-content")?.querySelector(".card-grid");
//     if (workExperienceSection) {
//       workExperienceData.forEach((work) => {
//         const workCard = document.createElement("div");
//         workCard.classList.add("card");
//         workCard.classList.add("work-experience-card");

//         workCard.innerHTML = `
//         <h3 class="card-title">${work.position}</h3>
//         <p class="card-details">${work.year}</p>
//         <p class="card-details">${work.description}</p>
//     `;

// workExperienceSection.appendChild(workCard);
// });
// }
// }
// function activateTab(tabId: string) {
//     const sections = document.querySelectorAll(".content-section");
//     sections.forEach((section) => section.classList.remove("active"));
  
//     const activeSection = document.getElementById(tabId);
//     if (activeSection) {
//       activeSection.classList.add("active");
//     }
//   }
  
//   document.getElementById("education-tab")?.addEventListener("click", () => activateTab("education-content"));
//   document.getElementById("skill-tab")?.addEventListener("click", () => activateTab("skill-content"));
//   document.getElementById("experience-tab")?.addEventListener("click", () => activateTab("work-experience-content"));
  
 
//   populateEducation();
//   populateSkills();
//   populateWorkExperience();

type Education = {
    education: string;
    institute: string;
    year: number;
};

type Skills = string;

type WorkExperience = {
    position: string;
    year: number;
    description: string;
};

const educationData: Education[] = [
    {
        education: "Under-Graduation",
        institute: "Karachi University",
        year: 2024,
    },
    {
        education: "Cloud Applied Generative AI Engineer",
        institute: "Governor Initiative For Artificial Intelligence and Computing",
        year: 2024,
    }
];

const skillData: Skills[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
];

const workExperienceData: WorkExperience[] = [
    {
        position: "Frontend Developer",
        year: 2023,
        description: "Built and maintained interactive, responsive websites using React.js and Next.js.",
    },
];

// Populate Education Section
function populateEducation() {
    const educationSection = document.getElementById("education-content")?.querySelector(".card");
    if (educationSection) {
        educationSection.innerHTML = ''; // Clear existing content
        educationData.forEach((edu) => {
            const educationCard = document.createElement("div");
            educationCard.classList.add('card');
            educationCard.innerHTML = `
                <h3 class='card-title'>${edu.education}</h3>
                <p class='card-subtitle'>${edu.institute}</p>
                <p class='card-details'>${edu.year}</p>
            `;
            educationSection.appendChild(educationCard);
        });
    }
}

// Populate Skills Section
function populateSkills() {
    const skillsSection = document.getElementById("skills-content")?.querySelector(".skill-list");
    if (skillsSection) {
        skillsSection.innerHTML = ''; // Clear existing content
        skillData.forEach((skill) => {
            const skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillsSection.appendChild(skillItem);
        });
    }
}

// Populate Work Experience Section
function populateWorkExperience() {
    const workExperienceSection = document.getElementById("work-experience-content")?.querySelector(".card");
    if (workExperienceSection) {
        workExperienceSection.innerHTML = ''; // Clear existing content
        workExperienceData.forEach((work) => {
            const workCard = document.createElement("div");
            workCard.classList.add("card");
            workCard.innerHTML = `
                <h3 class="card-title">${work.position}</h3>
                <p class="card-details">${work.year}</p>
                <p class="card-details">${work.description}</p>
            `;
            workExperienceSection.appendChild(workCard);
        });
    }
}

// Activate the tabs and load the corresponding data
function activateTab(tabId: string) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach((section) => section.classList.remove("active"));

    const activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.add("active");
    }

    const buttons = document.querySelectorAll(".tab button");
    buttons.forEach((button) => button.classList.remove("active"));
    document.getElementById(`${tabId.split('-')[0]}-tab`)?.classList.add("active");

    // Populate data for the active tab
    if (tabId === "education-content") {
        populateEducation();
    } else if (tabId === "skills-content") {
        populateSkills();
    } else if (tabId === "work-experience-content") {
        populateWorkExperience();
    }
}

// Event Listeners for Tabs
document.getElementById("education-tab")?.addEventListener("click", () => activateTab("education-content"));
document.getElementById("skills-tab")?.addEventListener("click", () => activateTab("skills-content"));
document.getElementById("experience-tab")?.addEventListener("click", () => activateTab("work-experience-content"));

// Initial population of the first tab
activateTab("education-content"); // Default tab to show on load
