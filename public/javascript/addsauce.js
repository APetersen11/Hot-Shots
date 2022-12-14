console.log("yo, I am working");

async function addSauceFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#sauce_name").value.trim();
  const description = document
    .querySelector("#new-sauce-description")
    .value.trim();
  const location = document.querySelector("#location").value.trim();
  const sco_score = document.querySelector("#heat-level").value.trim();

  if (name && description && location && sco_score) {
    const response = await fetch("/api/addsauce", {
      method: "post",
      body: JSON.stringify({
        name,
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

document
  .querySelector(".addsauce-form")
  .addEventListener("submit", addSauceFormHandler);
