// Project Filter Function
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Open Modal
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");

function openModal(title, imageSrc, description) {
    modal.style.display = "flex";
    modalTitle.innerText = title;
    modalImage.src = imageSrc;
    modalDescription.innerText = description;
}

document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', () => {
        openModal(project.querySelector('h3').innerText, project.querySelector('img').src, project.querySelector('p').innerText);
    });
});

// Close Modal
document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
};

// Skill Animation on Scroll
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.progress-bar');
    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();
        if (rect.top < window.innerHeight && skill.style.width === '0px') {
            skill.style.width = skill.getAttribute('data-value');
        }
    });
});
