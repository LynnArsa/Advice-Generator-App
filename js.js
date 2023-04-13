
fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const container = document.querySelector('#advice-id');
    const element = document.createElement('div');
    element.textContent = data.slip.id;
    container.appendChild(element);

    });
    
fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const container = document.querySelector('#advice-word');
    const element = document.createElement('div');
    element.textContent = data.slip.advice;
    container.appendChild(element);

  });

  
