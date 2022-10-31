const accept = document.querySelector('#accept').value.trim();

async function acceptWarning(event) {
    event.preventDefault();

    

    // if (accept) {
    //     const response = await fetch('', {
    //         method: post
    //     })
    // }
};

accept.addEventListener('click', () => {
    console.log("clicking")
    document.location.replace('/login/');
});