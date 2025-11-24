const menu = document.getElementById("menu");
const hamBTn = document.getElementById("ham-btn");
const closeBtn = document.getElementById("close-btn");

hamBTn.addEventListener("click", () => {
  menu.classList.remove("-translate-x-full");
});
closeBtn.addEventListener("click", () => {
  menu.classList.add("-translate-x-full");
});

// INTERSECTION OBSERVER FOR TEXT
const text = document.querySelectorAll(".text");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("translate-y-0", "opacity-100");
    }
  });
});
text.forEach((text) => observer.observe(text));

// INTERSECTION OBSERVER FOR ABOUT SECTION

// For image
const image = document.querySelectorAll(".image");
const AboutSection = new IntersectionObserver((entries, AboutSection) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("translate-x-0", "opacity-100");
    }
  });
});
image.forEach((img) => AboutSection.observe(img));

// for text
const rightText = document.querySelectorAll(".right");
const AboutSection2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("translate-x-0", "opacity-100");
      entry.target.classList.remove("translate-x-full");
    }
  });
});

rightText.forEach((el) => AboutSection2.observe(el));

// INTERSECTION OBSERVER FOR MISSION STATEMENTS
const mission = document.querySelectorAll(".mission");
const box1 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "-translate-y-15");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
mission.forEach((el) => box1.observe(el));

// INTERSECTION OBSERVER FOR  VISION STATEMENTS
const vision = document.querySelectorAll(".vision");
const box2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "-translate-y-15");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
vision.forEach((el) => box2.observe(el));

// INTERSECTION OBSERVER FOR VALUES

const values = document.querySelectorAll(".values");
const box3 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "-translate-y-10");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

values.forEach((el) => box3.observe(el));
