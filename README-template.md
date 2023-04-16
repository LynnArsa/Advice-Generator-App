# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](https://raw.githubusercontent.com/LynnArsa/Advice-Generator-App/main/Advice%20Generator%20App_Result.png)

## My process
At first, we used basic CSS Styling because it's more convenient for small projects. But we decided to change to Tailwind CSS hoping that we can learn more by doing it.

### Built with

- Semantic HTML5 markup
- CSS Inline Styling
- [Tailwind CSS] (https://tailwindcss.com) - CSS Library
- JavaScript

### What I learned

This is the first time we've learn about APIs, it's really fun to play with. Here's some snippet of our code when implementing API.

```js
function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.getElementById("advice-id").innerHTML = "A D V I C E  # " + data.slip.id;
      document.getElementById("advice-word").innerHTML = data.slip.advice;
    })
}
```

### Useful resources

- [Tailwind CSS Hover Button](https://tailwindcss.com/docs/hover-focus-and-other-states) - Helps us build the Hover state of the Dice Button. Reading Documentation is a must!
