// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('span');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
}

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    icon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Modal Logic
const modal = document.getElementById('viewer-modal');
const modelViewer = document.getElementById('car-model');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const bookingSelect = document.getElementById('model');

function openViewer(imageSrc, title, desc, modelSrc) {
    modal.classList.add('active');
    modalTitle.textContent = title;
    // modalDesc.textContent = desc; // Optional: hide description in modal if not needed
    
    // Set model source
    modelViewer.src = modelSrc;
    
    // Update booking form selection just in case they click book from here
    bookingSelect.value = title;
}

function closeViewer() {
    modal.classList.remove('active');
    // Stop model from playing/rendering if needed to save resources
    modelViewer.src = "";
}

function openBooking() {
    closeViewer();
    scrollToSection('contact');
}

// Form Handling
function handleBooking(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const car = document.getElementById('model').value;
    const btn = event.target.querySelector('.submit-btn');
    const originalText = btn.textContent;
    
    btn.textContent = "Sending Request...";
    btn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        alert(`Thank you, ${name}! Your request for the ${car} has been received. Our concierge will contact you shortly.`);
        event.target.reset();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1500);
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        closeViewer();
    }
}
