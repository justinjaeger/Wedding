// Tab switching logic
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => {
            t.classList.remove('active')
        });
        document.querySelectorAll('.tab-panel').forEach(p => {
            p.classList.remove('active')
        });
        tab.classList.add('active');
        const panelId = tab.getAttribute('data-tab');
        const panel = document.getElementById(panelId);
        // Only add class if panel exists
        if (panel) {
            panel.classList.add('active');
        } else {
            console.warn(`Panel with id "${panelId}" not found`);
        }
    });
});

// Create sparkles
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    document.querySelector('.content').appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1500);
}

// Add sparkles periodically
setInterval(createSparkle, 300);
