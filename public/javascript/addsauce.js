const addSauce = document.querySelector('#submit').value.trim();

async function submitSauceButton(event) {
    event.preventDefault();
};

addSauce.addEventListener('click', () => {
    console.log('clicking')
    document.location.replace('/dashboard/');
});