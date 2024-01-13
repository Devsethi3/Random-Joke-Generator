const jokeText = document.querySelector(".joke");
const copyBtn = document.getElementById("copy-btn");
const nextBtn = document.getElementById("next-btn");

const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single";

function getJoke() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let jokeData = data.joke;
      jokeText.textContent = jokeData;

      copyBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(jokeData);
      });
    })
    .catch((error) => {
      alert("There is an error while fetching the data", error);
    });
}

nextBtn.addEventListener("click", getJoke);

getJoke();