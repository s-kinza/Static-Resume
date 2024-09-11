// type Education = {
//     education : string;
//     institute : string;
//     year: number;
// };
var _a, _b, _c;
var educationData = [
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
var skillData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
];
var workExperienceData = [
    {
        position: "Frontend Developer",
        year: 2023,
        description: "Built and maintained interactive, responsive websites using React.js and Next.js.",
    },
];
// Populate Education Section
function populateEducation() {
    var _a;
    var educationSection = (_a = document.getElementById("education-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".card");
    if (educationSection) {
        educationSection.innerHTML = ''; // Clear existing content
        educationData.forEach(function (edu) {
            var educationCard = document.createElement("div");
            educationCard.classList.add('card');
            educationCard.innerHTML = "\n                <h3 class='card-title'>".concat(edu.education, "</h3>\n                <p class='card-subtitle'>").concat(edu.institute, "</p>\n                <p class='card-details'>").concat(edu.year, "</p>\n            ");
            educationSection.appendChild(educationCard);
        });
    }
}
// Populate Skills Section
function populateSkills() {
    var _a;
    var skillsSection = (_a = document.getElementById("skills-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".skill-list");
    if (skillsSection) {
        skillsSection.innerHTML = ''; // Clear existing content
        skillData.forEach(function (skill) {
            var skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skillsSection.appendChild(skillItem);
        });
    }
}
// Populate Work Experience Section
function populateWorkExperience() {
    var _a;
    var workExperienceSection = (_a = document.getElementById("work-experience-content")) === null || _a === void 0 ? void 0 : _a.querySelector(".card");
    if (workExperienceSection) {
        workExperienceSection.innerHTML = ''; // Clear existing content
        workExperienceData.forEach(function (work) {
            var workCard = document.createElement("div");
            workCard.classList.add("card");
            workCard.innerHTML = "\n                <h3 class=\"card-title\">".concat(work.position, "</h3>\n                <p class=\"card-details\">").concat(work.year, "</p>\n                <p class=\"card-details\">").concat(work.description, "</p>\n            ");
            workExperienceSection.appendChild(workCard);
        });
    }
}
// Activate the tabs and load the corresponding data
function activateTab(tabId) {
    var _a;
    var sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) { return section.classList.remove("active"); });
    var activeSection = document.getElementById(tabId);
    if (activeSection) {
        activeSection.classList.add("active");
    }
    var buttons = document.querySelectorAll(".tab button");
    buttons.forEach(function (button) { return button.classList.remove("active"); });
    (_a = document.getElementById("".concat(tabId.split('-')[0], "-tab"))) === null || _a === void 0 ? void 0 : _a.classList.add("active");
    // Populate data for the active tab
    if (tabId === "education-content") {
        populateEducation();
    }
    else if (tabId === "skills-content") {
        populateSkills();
    }
    else if (tabId === "work-experience-content") {
        populateWorkExperience();
    }
}
// Event Listeners for Tabs
(_a = document.getElementById("education-tab")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return activateTab("education-content"); });
(_b = document.getElementById("skills-tab")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return activateTab("skills-content"); });
(_c = document.getElementById("experience-tab")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return activateTab("work-experience-content"); });
// Initial population of the first tab
activateTab("education-content"); // Default tab to show on load
