document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const navToggler = document.getElementById("menuToggler");
  const navLinks = document.getElementById("navLinks");

  // Theme toggle
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light-mode") ? "light" : "dark"
    );
  });

  // Mobile nav toggle
  navToggler.addEventListener("click", () => {
    console.log("Menu Toggler Clicked!"); // Add this line
    navLinks.classList.toggle("open");
  });

  // Reveal animation
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach(el => observer.observe(el));
});
emailjs.init("tCX9fmGlrDH8GGNEG");

    const form = document.getElementById("contact-form");
    const response = document.getElementById("form-response");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const button = form.querySelector("button");
      button.disabled = true;
      button.innerText = "Sending...";

      emailjs.sendForm("service_d2n6sjf", "template_caxmix7", form)
        .then(() => {
          response.textContent = "✅ Message sent successfully!";
          response.style.color = "green";
          form.reset();
        })
        .catch((err) => {
          response.textContent = "❌ Failed to send message.";
          response.style.color = "red";
          console.error("EmailJS Error:", err);
        })
        .finally(() => {
          button.disabled = false;
          button.innerText = "Send Message";
        });
    });