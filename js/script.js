// ========== 1. Set Welcome Message ==========
document.addEventListener("DOMContentLoaded", () => {
    const name = "Everyone"; // Kamu bisa ganti ini kalau ingin dinamis
    const userNameSpan = document.getElementById("userName");
    if (userNameSpan) {
        userNameSpan.textContent = name;
    }
});

// ========== 2. Form Submission Handling ==========
const form = document.getElementById("contactForm");
const resultBox = document.getElementById("formResult");

// Toggle hamburger menu on mobile
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

form.addEventListener("submit", function(e) {
    e.preventDefault(); // Mencegah form reload halaman

    // Ambil nilai dari form
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const message = document.getElementById("message").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');

    // Validasi manual
    if (!name || !dob || !message || !gender) {
        alert("Semua field harus diisi!");
        return;
    }

    // Format waktu saat ini
    const now = new Date();
    const currentTime = now.toString();

    // Output hasil ke box
    resultBox.innerHTML = `
    <p><strong>Current time:</strong> ${currentTime}</p>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Tanggal Lahir:</strong> ${dob}</p>
    <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
    <p><strong>Pesan:</strong> ${message}</p>
  `;

    // Optional: reset form setelah submit
    // form.reset();
});

// Scroll detection: add/remove class .scrolled
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
            });
        }
    });
});

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);