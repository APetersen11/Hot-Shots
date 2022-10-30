require("dotenv").config();
const cloudinary = require("cloudinary").v2;
console.log(cloudinary.config().cloud_name);

// add functionality to widget
async function addSauceFormHandler(event) {
  event.preventDefault();

  //const newSauce = document.querySelector('#new-sauce').value.trim();
  const sauceDescription = document
    .querySelector("#new-sauce-description")
    .value.trim();
  const location = document.querySelector("#location").value.trim();
  const heatLevel = document.querySelector("#heat-level").value.trim();

  if (sauceDescription && location && heatLevel) {
    const response = await fetch("/api/post/addsauce", {
      method: "post",
      body: JSON.stringify({
        //name,
        description,
        location,
        sco_score,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Fill out all required fields!");
    }
  }
}

// add sauce button
addSauce.addEventListener("submit", () => {
  console.log("clicking");
  document.location.replace("/dashboard/");
});

document
  .querySelector(".added-sauces")
  .addEventListener("submit", addSauceFormHandler);
