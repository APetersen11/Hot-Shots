const addNewSauce = document.getElementById('new-sauce')
const addSauceDescription = document.getElementById('new-sauce-description')
const addSauceLocation = document.getElementById('location')
// const chooseHeat = document.getElementById('heat')

async function submitNewSauce(event) {
    event.preventDefault();

    //     const sauceName = document.querySelector('input[name="add-new-sauce"]').value;
    //     const sauceDescription = document.querySelector('input[name="new-sauce-description"]').value;

    //     const response = await fetch(`/api/posts`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             sauceName,
    //             sauceDescription
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });

    //     if (response.ok) {
    //         document.location.replace('/dashboard');
    //     } else {
    //         alert(response.statusText);
    //     }
};

addSauce.addEventListener('submit', () => {
    let message = []
    if (addNewSauce.value === '' || addSauceDescription.value === '' || addSauceLocation === '' || chooseHeat === '') {
        message.push('name is required!')
    }
    else {
        document.location.replace('/dashboard/');
    }

    //document.location.replace('/dashboard/');
});

//document.querySelector('.added-sauces').addEventListener('submit', submitNewSauce);