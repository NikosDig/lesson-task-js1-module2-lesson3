// Convert the following following code to use the `addEventListener` method:

// ```js
// const btn = document.querySelector(".btn");

// btn.onclick = function () {
//     console.log("I'm a button");
// };
// ```

// ### Question 2

// Add a click event using `addEventListener` to the second button.

// In the event's function, display the character count from the input in the `b.count` element.

// Make sure to remove all trailing and leading spaces (spaces at the beginning and end of the input's value).
const trim = document.querySelector("input");
const count = document.querySelector(".count");
const button2 = document.querySelector("button[type=button]");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("i am a button");
});

button2.addEventListener("click", function () {
  let amount = trim.value.trim().length;
  count.innerHTML = amount;
});
