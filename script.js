// -----------------------------------
// Animasi Scroll
// -----------------------------------
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// -----------------------------------
// Mode Gelap
// -----------------------------------
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    modeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
