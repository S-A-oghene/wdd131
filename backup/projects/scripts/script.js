// document.addEventListener("DOMContentLoaded", () => {
//     // Hamburger Menu Toggle
//     const hamburger = document.querySelector('.hamburger');
//     const navMenu = document.querySelector('.nav-menu');

//     if (hamburger && navMenu) {
//         hamburger.addEventListener('click', () => {
//             navMenu.classList.toggle('open');
//             hamburger.classList.toggle('open');
//         });
//     }

//   // Filter Projects
//   const projectList = document.querySelector(".projects");
//   const filterButtons = document.querySelectorAll(".filter-btn");

//   if (projectList && filterButtons) {
//     filterButtons.forEach((button) => {
//       button.addEventListener("click", () => {
//         const category = button.getAttribute("data-category");
//         const projects = projectList.querySelectorAll(".project");

//         projects.forEach((project) => {
//           if (category === "all" || project.classList.contains(category)) {
//             project.style.display = "block";
//           } else {
//             project.style.display = "none";
//           }
//         });
//       });
//     });
//   }

//   // Contact Form Submission
//   const form = document.querySelector("form");
//   if (form) {
//     form.addEventListener("submit", (e) => {
//       e.preventDefault();
//       const name = form.querySelector("#name").value;
//       const email = form.querySelector("#email").value;
//       const message = form.querySelector("#message").value;

//       if (name && email && message) {
//         if (validateEmail(email)) {
//           localStorage.setItem(
//             "contactForm",
//             JSON.stringify({ name, email, message })
//           );
//           alert("Form submitted successfully!");
//           form.reset(); // Clear the form after successful submission
//         } else {
//           alert("Please enter a valid email address.");
//         }
//       } else {
//         alert("Please fill in all fields.");
//       }
//     });
//   }

//   function validateEmail(email) {
//     const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return re.test(String(email).toLowerCase());
//   }
// });

// // document.addEventListener("DOMContentLoaded", () => {
// //   const projectList = document.querySelector(".projects");
// //   const filterButtons = document.querySelectorAll(".filter-btn");

// //   filterButtons.forEach((button) => {
// //     button.addEventListener("click", () => {
// //       const category = button.getAttribute("data-category");
// //       const projects = projectList.querySelectorAll(".project");

// //       projects.forEach((project) => {
// //         if (category === "all" || project.classList.contains(category)) {
// //           project.style.display = "block";
// //         } else {
// //           project.style.display = "none";
// //         }
// //       });
// //     });
// //   });

// //   const form = document.querySelector("form");
// //   form.addEventListener("submit", (e) => {
// //     e.preventDefault();
// //     const name = form.querySelector("#name").value;
// //     const email = form.querySelector("#email").value;
// //     const message = form.querySelector("#message").value;

// //     if (name && email && message) {
// //       localStorage.setItem(
// //         "contactForm",
// //         JSON.stringify({ name, email, message })
// //       );
// //       alert("Form submitted successfully!");
// //     } else {
// //       alert("Please fill in all fields.");
// //     }
// //   });
// // });

// // document.addEventListener('DOMContentLoaded', () => {
// //   const projectList = document.querySelector('.projects');
// //   const filterButtons = document.querySelectorAll('.filter-btn');

// //   filterButtons.forEach(button => {
// //       button.addEventListener('click', () => {
// //           const category = button.getAttribute('data-category');
// //           const projects = projectList.querySelectorAll('.project');

// //           projects.forEach(project => {
// //               if (category === 'all' || project.classList.contains(category)) {
// //                   project.style.display = 'block';
// //               } else {
// //                   project.style.display = 'none';
// //               }
// //           });
// //       });
// //   });

// //   const form = document.querySelector('form');
// //   form.addEventListener('submit', (e) => {
// //       e.preventDefault();
// //       const name = form.querySelector('#name').value;
// //       const email = form.querySelector('#email').value;
// //       const message = form.querySelector('#message').value;

// //       if (name && email && message) {
// //           localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));
// //           alert('Form submitted successfully!');
// //       } else {
// //           alert('Please fill in all fields.');
// //       }
// //   });
// // });

// // document.addEventListener('DOMContentLoaded', () => {
// //   const form = document.querySelector('form');
// //   form.addEventListener('submit', (e) => {
// //       e.preventDefault();
// //       const name = form.querySelector('#name').value;
// //       const email = form.querySelector('#email').value;
// //       const message = form.querySelector('#message').value;

// //       if (name && email && message) {
// //           // Basic validation checks
// //           if (validateEmail(email)) {
// //               localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));
// //               alert('Form submitted successfully!');
// //               form.reset(); // Clear the form after successful submission
// //           } else {
// //               alert('Please enter a valid email address.');
// //           }
// //       } else {
// //           alert('Please fill in all fields.');
// //       }
// //   });

// //   function validateEmail(email) {
// //       const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
// //       return re.test(String(email).toLowerCase());
// //   }
// // });


document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Toggle
  const hamburger = document.querySelector('#hamburger');
  const navItems = document.querySelector('#navItems');

  if (hamburger && navItems) {
      hamburger.addEventListener('click', () => {
          navItems.classList.toggle('open');
          hamburger.classList.toggle('open');
      });
  }

  // Filter Projects
  const projectList = document.querySelector('.projects');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (projectList && filterButtons) {
      filterButtons.forEach(button => {
          button.addEventListener('click', () => {
              const category = button.getAttribute('data-category');
              const projects = projectList.querySelectorAll('.project');

              projects.forEach(project => {
                  if (category === 'all' || project.classList.contains(category)) {
                      project.style.display = 'block';
                  } else {
                      project.style.display = 'none';
                  }
              });
          });
      });
  }

  // Contact Form Submission
  const form = document.querySelector('form');
  if (form) {
      form.addEventListener('submit', (e) => {
          e.preventDefault();
          const name = form.querySelector('#name').value;
          const email = form.querySelector('#email').value;
          const message = form.querySelector('#message').value;

          if (name && email && message) {
              if (validateEmail(email)) {
                  localStorage.setItem('contactForm', JSON.stringify({ name, email, message }));
                  alert('Form submitted successfully!');
                  form.reset(); // Clear the form after successful submission
              } else {
                  alert('Please enter a valid email address.');
              }
          } else {
              alert('Please fill in all fields.');
          }
      });
  }

  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(String(email).toLowerCase());
  }
});
