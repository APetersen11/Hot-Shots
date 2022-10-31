const accept = document.querySelector('#accept').value.trim();

async function acceptWarning(event) {
    event.preventDefault();
};

accept.addEventListener('click', () => {
    console.log("clicking")
    document.location.replace('/login/');
});