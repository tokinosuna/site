document.addEventListener('scroll', function() {
    const items = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        // Check if the timeline item is in the viewport
        if (itemTop < windowHeight && itemTop > 0) {
            item.classList.add('visible'); // Add visible class to fade in
        } else {
            item.classList.remove('visible'); // Remove visible class to fade out
        }
    });
});


const cursorDot = document.getElementById('cursor-dot');
const cursorDotOutline = document.getElementById('cursor-dot-outline');

function updateCursorPosition(e) {
  cursorDot.style.left = e.clientX + 'px';
  cursorDot.style.top = e.clientY + 'px';
  cursorDotOutline.style.left = e.clientX + 'px';
  cursorDotOutline.style.top = e.clientY + 'px';
}

document.addEventListener('mousemove', updateCursorPosition);

// Add click event listener
document.addEventListener('click', () => {
  cursorDot.style.transform = 'scale(2)';
  cursorDotOutline.style.transform = 'scale(3.5)'; // Scale the outline as well
  setTimeout(() => {
    cursorDot.style.transform = 'scale(1)';
    cursorDotOutline.style.transform = 'scale(1)';
  }, 200);
});