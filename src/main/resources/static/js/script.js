function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}
function showLogin() {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}
function togglePassword(inputId, button) {
    const input = document.getElementById(inputId);
    const eyeIcon = button.querySelector('.eye-icon');

    if (input.type === 'password') {
        input.type = 'text';
        eyeIcon.textContent = '🙈';
    } else {
        input.type = 'password';
        eyeIcon.textContent = '👁️';
    }
}

function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notification-message');
    const iconElement = document.getElementById('notification-icon');

    messageElement.textContent = message;

    if (type === 'success') {
        iconElement.textContent = '✓';
        notification.className = 'notification show success';
    } else if (type === 'error') {
        iconElement.textContent = '✕';
        notification.className = 'notification show error';
    } else if (type === 'info') {
        iconElement.textContent = 'ℹ';
        notification.className = 'notification show info';
    }

    setTimeout(() => {
        closeNotification();
    }, 5000);
}

function closeNotification() {
    const notification = document.getElementById('notification');
    notification.classList.remove('show');
}