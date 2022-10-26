const logout = document.querySelector('#logout').value.trim();

async function logOutButton(event) {
    event.preventDefault();
};

// function preventBack() { window.history.forward(); }
// setTimeout("preventBack()", 0);
// window.onunload = function () { null };

logout.addEventListener('click', () => {
    console.log('clicking')
    document.location.replace('/login/');
});