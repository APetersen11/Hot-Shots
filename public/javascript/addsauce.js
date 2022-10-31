require("dotenv").config();
const cloudinary = require("cloudinary").v2;
console.log(cloudinary.config().cloud_name);

// add functionality to widget
async function addSauceFormHandler(event) {
    event.preventDefault();

    const name = document.querySelector('sauce_name').value.trim();
    const description = document.querySelector('#new-sauce-description').value.trim();
    const location = document.querySelector('#location').value.trim();
    const sco_score = document.querySelector('#heat-level').value.trim();


    if (name && description && location && sco_score) {
        const response = await fetch('/api/post/addsauce', {
            method: 'post',
            body: JSON.stringify({
                name,
                description,
                location,
                sco_score
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Fill out all required feilds!');
        }
    }
};

document.getElementById("app").innerHTML = (
    <div>
      <button id="upload_widget" class="cloudinary-button">
        Upload Image
      </button>
    </div>
  );
  
  var myWidget = cloudinary.createUploadWidget(
    {
      cloudName: "dwjycofwm",
      uploadPreset: "hs_test",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
      }
    }
  );
  
  document.getElementById("upload_widget").addEventListener(
    "click",
    function () {
      myWidget.open();
    },
    false
  );

// addSauce.addEventListener('click', () => {
//     console.log('clicking')
//     document.location.replace('/dashboard/');
// });

document.querySelector('.added-sauces').addEventListener('submit', submitNewSauce);
