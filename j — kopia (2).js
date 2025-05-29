function loadContactForm() {
  const contactDiv = document.querySelector('.contact-container');
  if (!contactDiv) return;

  contactDiv.innerHTML = `
    <h2>Contact Us</h2>
    <form id="contactForm">
      <input type="text" id="name" placeholder="Your Name" required><br>
      <input type="email" id="email" placeholder="Your Email" required><br>
      <textarea id="message" placeholder="Your Message" required></textarea><br>
      <button type="submit">Send</button>
    </form>
    <div id="contactResult"></div>
  `;

  document.getElementById('contactForm').onsubmit = function(e) {
    e.preventDefault();
    document.getElementById('contactResult').textContent = "Thank you for your message!";
    this.reset();
  };
}

loadContactForm();
