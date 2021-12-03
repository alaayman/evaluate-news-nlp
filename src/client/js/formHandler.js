const axios = require("axios").default;

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  Client.checkForUrl(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/test")
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.message;
    });

  axios
    .post("http://localhost:8081/result", {
      analysisUrl: formText,
      lang: "en",
    })
    .then((response) => {
      // console.log("from client :::", response);
      document.getElementById("results2").innerHTML = response.data.irony;
    })
    .catch((error) => {
      console.log(error);
    });
}

export { handleSubmit };
