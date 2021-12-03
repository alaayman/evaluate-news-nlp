const axios = require("axios").default;

function handleSubmit(event) {
  event.preventDefault();
  const emptyData = {
    irony: "",
    agreement: "",
    subjectivity: "",
    confidence: "",
    score_tag: "",
  };
  updateUi(emptyData);
  // check the form field for url
  let formUrl = document.getElementById("urlInput").value;
  Client.checkForUrl(formUrl)
    ? axios
        .post("http://localhost:3000/result", {
          analysisUrl: formUrl,
          lang: "en",
        })
        .then((response) => {
          // console.log("from client :::", response);
          const data = response.data;
          updateUi(data);
          // document.getElementById("results2").innerHTML = response.data.irony;
        })
        .catch((error) => {
          console.log(error);
        })
    : alert("your entry is not a valid url");
  document.getElementById("urlInput").value = "";
}

const updateUi = (data) => {
  document.getElementById("irony").innerHTML = data.irony;
  document.getElementById("agreement").innerHTML = data.agreement;
  document.getElementById("subjectivity").innerHTML = data.subjectivity;
  document.getElementById("confidence").innerHTML = data.confidence;
  document.getElementById("score").innerHTML = data.score_tag;
};

export { handleSubmit };
