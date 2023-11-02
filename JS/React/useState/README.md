<img width="1000" src="https://raw.githubusercontent.com/artexhibit/Fundamentals-of-algorithmization-and-programming/main/JS/React/useState/images/Demo.gif">

[🇷🇺 Russian Version](./README-RUS.md)

## About

College homework where I worked with React hook `useState`. There is a row of 3 cards. When button is pressed - card opens up its content. If another card's button pressed - all already opened cards will be hided. This is possible due to passing the card index to parent `Page` component, where the `useState` hook manages which of the card was open and pass the index down to each card in a form of `isOpen` prop. Next card's content shows depending on `isOpen` state for each `Card`. 

## useState

`useState` is a function in `React` which have acsess to a component state. With the hook we can flexibly manage a component state.