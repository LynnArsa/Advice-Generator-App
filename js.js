fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const container = document.querySelector('#container');
    const element = document.createElement('div');
    element.textContent = data.slip.advice;
    container.appendChild(element);
  });