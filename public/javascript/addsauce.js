async function addSauceFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#sauce_name").value;
  const description = document
    .querySelector("#new-sauce-description")
    .value;
  const location = document.querySelector("#location").value;
  const sco_score = document.querySelector("#heat-level").value;

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
