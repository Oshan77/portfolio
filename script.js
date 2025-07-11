const projects = [
  {
    title: "Movie Recommendation System",
    description: "Built with Python and ML to recommend movies.",
    link: "https://github.com/devil12344/Dsa",
    category: "ml"
  },
  {
    title: "Uber Price Prediction",
    description: "ML model to predict ride fares using regression.",
    link: "https://github.com/devil12344/Dsa",
    category: "ml"
  },
  {
    title: "Lead Management App",
    description: "UI/UX design for a lead manager in Figma.",
    link: "https://github.com/devil12344/Dsa",
    category: "uiux"
  },
  {
    title: "Personal Portfolio Website",
    description: "Responsive web portfolio built with HTML/CSS/JS.",
    link: "https://yourdomain.com",
    category: "web"
  }
];

function loadProjects(filter = "all") {
  const container = document.getElementById("project-container");
  container.innerHTML = "";
  const filtered = filter === "all" ? projects : projects.filter(p => p.category === filter);
  filtered.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">View Project</a>
    `;
    container.appendChild(card);
  });
}

document.querySelectorAll(".filter-btns button").forEach(btn => {
  btn.addEventListener("click", () => {
    loadProjects(btn.dataset.filter);
  });
});

document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent! (To make it real, connect to Google Forms or Netlify)");
});

window.onload = () => {
  loadProjects();
};
