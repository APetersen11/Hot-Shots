const addSauce = document.querySelector('#submit').value.trim();

async function submitNewSauce(event) {
    event.preventDefault();

    const sauceName = document.querySelector('input[name="add-new-sauce"]').value;
    const sauceDescription = document.querySelector('input[name="new-sauce-description"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            sauceName,
            sauceDescription
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

// addSauce.addEventListener('click', () => {
//     console.log('clicking')
//     document.location.replace('/dashboard/');
// });

document.querySelector('.added-sauces').addEventListener('submit', submitNewSauce);