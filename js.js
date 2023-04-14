function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.getElementById("advice-id").innerHTML = "A D V I C E  # " + data.slip.id;
      document.getElementById("advice-word").innerHTML = data.slip.advice;
    })
    .catch
}

  
