
  // Add active class based on scroll
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
// Personal info
  
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      {
        threshold: 0.5, // trigger when 50% visible
      }
    );

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((el) => observer.observe(el));
  });


// Profile Summary Section
 document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          observer.unobserve(entry.target); // run only once
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  });

  // About Section


  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
  });

// Skills Section

  document.addEventListener("DOMContentLoaded", () => {
    // Intersection Observer for fade-in animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

    // Optional: Button click event example
    document.getElementById('learnMoreBtn').addEventListener('click', () => {
      alert("Check out my full skill set on my portfolio or GitHub!");
    });
  });

  // Project Section
  
  // Intersection Observer for fade-in
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
  });

  // Contact Me
  
    document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    this.reset(); // Clear the form
  });