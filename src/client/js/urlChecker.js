function checkForUrl(inputText) {
  console.log("::: Running checkForUrl :::", inputText);

  const regexp = inputText.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );

  console.log("the input is : ", regexp);
  regexp != null ? true : false;
}

export { checkForUrl };
