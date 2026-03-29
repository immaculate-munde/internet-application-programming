function toggleForm() {
    const isMentor = document.getElementById('role-mentor').checked;
    document.getElementById('volunteer').style.display = isMentor ? 'none' : 'block';
    document.getElementById('mentor').style.display = isMentor ? 'block' : 'none';
}

function applyFormHash() {
    const hash = location.hash;
    if (hash === '#volunteer') {
        document.getElementById('role-volunteer').checked = true;
        toggleForm();
        document.getElementById('volunteer').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (hash === '#mentor') {
        document.getElementById('role-mentor').checked = true;
        toggleForm();
        document.getElementById('mentor').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function initFormDeepLinks() {
    document.querySelectorAll('a[href="#volunteer"], a[href="#mentor"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = link.getAttribute('href');
            if (location.hash !== target) {
                location.hash = target;
            } else {
                applyFormHash();
            }
        });
    });
    applyFormHash();
}

window.addEventListener('DOMContentLoaded', initFormDeepLinks);
window.addEventListener('hashchange', applyFormHash);
