// Add event listener to the nav toggle button
document.querySelector('.nav-toggle').addEventListener('click', () => {
    // Toggle the nav menu
    document.querySelector('.nav-right ul').classList.toggle('active');
  });
  
  // Add event listener to the contact form submit button
  document.querySelector('#contact form').addEventListener('submit', (e) => {
    // Prevent default form submission
    e.preventDefault();
  
    // Get the form data
    const formData = new FormData(e.target);
  
    // Send the form data to the server using AJAX
    fetch('https://formspree.io/f/yourformid', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  
    // Clear the form fields
    e.target.reset();
  });
  
  // Add event listener to the project links
  document.querySelectorAll('#projects li a').forEach((link) => {
    link.addEventListener('click', (e) => {
      // Prevent default link behavior
      e.preventDefault();
  
      // Get the project URL
      const projectUrl = link.href;
  
      // Open the project in a new tab
      window.open(projectUrl, '_blank');
    });
  });
  
  // Add Typing effect to the about section
  const typed = new Typed('#element', {
    strings: ['MERN Stack Developer', 'Freelancer', 'Web Developer'],
    typeSpeed: 50,
  });
  
  // Add Scrollspy to the navigation menu
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-right ul li a');
  
  window.addEventListener('scroll', () => {
    let currentScrollPosition = window.scrollY;
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
  
      if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
        const sectionId = section.id;
        const activeNavLink = document.querySelector(`.nav-right ul li a[href="#${sectionId}"]`);
  
        navLinks.forEach((link) => link.classList.remove('active'));
        activeNavLink.classList.add('active');
      }
    });
  });