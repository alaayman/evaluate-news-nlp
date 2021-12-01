function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test")
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.message;
    });

  fetch("https://catfact.ninja/fact", {
    method: "GET",
    mode: "cors",
    headers: {},
  })
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results2").innerHTML = res.fact;
    });
}

export { handleSubmit };
