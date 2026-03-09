const icons = {
    success: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    error: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
    info: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
    warning: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
};

window.addEventListener('message', function(event) {
    if (event.data.action === 'notify') {
        createNotification(event.data.text, event.data.type, event.data.duration);
    } else if (event.data.action === 'showTextUI') {
        showTextUI(event.data.text, event.data.type);
    } else if (event.data.action === 'hideTextUI') {
        hideTextUI();
    } else if (event.data.action === 'showProgress') {
        showProgress(event.data.text, event.data.duration);
    }
});

function showTextUI(text, type) {
    const container = document.getElementById('textui-container');
    const contentBox = document.getElementById('textui-content');
    const iconElem = document.getElementById('textui-icon');
    const textElem = document.getElementById('textui-text');

    if (!icons[type]) type = 'info';

    contentBox.className = 'textui-box ' + type;
    iconElem.innerHTML = icons[type];

    const formattedText = text.replace(/\[(.*?)\]/g, '<span class="key-bind">$1</span>');
    textElem.innerHTML = formattedText;

    container.classList.add('show');
}

function hideTextUI() {
    const container = document.getElementById('textui-container');
    if (container) {
        container.classList.remove('show');
    }
}

let progressTimeout;

function showProgress(text, duration) {
    const container = document.getElementById('progress-container');
    const textElem = document.getElementById('progress-text');
    const fillElem = document.getElementById('progress-fill');

    clearTimeout(progressTimeout);

    fillElem.style.transition = 'none';
    fillElem.style.width = '0%';
    
    textElem.innerText = text;
    container.classList.add('show');

    void fillElem.offsetWidth; 

    fillElem.style.transition = `width ${duration}ms linear`;
    fillElem.style.width = '100%';

    progressTimeout = setTimeout(() => {
        container.classList.remove('show');
    }, duration + 300);
}

function createNotification(text, type, duration) {
    const container = document.getElementById('notifications-container');

    if (!icons[type]) type = 'info';

    const audio = new Audio('sound/notification.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {});

    const notify = document.createElement('div');
    notify.classList.add('notification', type);

    notify.innerHTML = `
        <div class="icon">${icons[type]}</div>
        <div class="text">${text}</div>
    `;

    notify.style.setProperty('--duration', `${duration}ms`);
    container.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, duration + 400);
}