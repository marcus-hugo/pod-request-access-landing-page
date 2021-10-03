# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://github.com/marcus-hugo/pod-request-access-landing-page](https://your-solution-url.com)
- Live Site URL: [https://marcus-hugo.github.io/pod-request-access-landing-page/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned
Many great takeaways with this project!  How to navigate a Sketh file to find CSS styles. How to plan out HTML and CSS for 3 different layouts, had to rework the the solution a few times and really see the difference between using ```position:abosolute``` and ```position:relative```  It seems elements start moving around when set to ```position:absolute```, I guess being removed the the document flow?

How to validate a form with javaScript.  What stumped me the most was why how to get the boolean value fromt the Regex to compare to the email ```<input>```.  What ended up working was passing in the ```emailValue``` instead of ```email``` into the Regex, which at this time I don't fully understand, I would think they both contain strings?

```js

function checkEmailValue() {
    const emailValue = email.value;
    const small = document.querySelector('small');
    let result = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue);
    
    if (emailValue === '') {
        message('Opps! Please add your email');
        form.classList = 'error';
    } else if (result === false) {
        message('Opps! Please provide a valid email');
        form.classList = 'error';
    } else if (result === true) {
        message('Success!');
        form.classList = 'error';
    }
}
```

### Continued development

learning and practicing JavaScript and adding it to future projects.

### Useful resources



## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@marcus-hugo](https://www.frontendmentor.io/profile/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.