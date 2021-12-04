import { handleSubmit } from "./js/formHandler";
import { checkForUrl } from "./js/urlChecker";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

// console.log(checkForUrl);

console.log(process.env.NODE_ENV);
//register serviceWorker only in production found solution in workBox github page
if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function (register) {
      //   console.log("worked", register);
    })
    .catch(function (err) {
      console.log("error!");
    });
}
export { handleSubmit, checkForUrl };
