
  const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error("Cannot find the element ${selector}");
};
const input = selectElement("input");
const result = selectElement(".result");
const myButton = selectElement(".input-btn");
const copyButton = selectElement(".copy-btn")

myButton.addEventListener("click", (e) => {
  e.preventDefault();
  const url = input.value;
  shortenUrl(url);
});

copyButton.addEventListener("click", (e) =>  {
  e.preventDefault();
  copyLink();
});

async function shortenUrl(url) {
  try {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await res.json();
    input.value = `${data.result.short_link}`;

    myButton.addEventListener("click", (e) => {
      e.preventDefault(); 
      })
    
  } catch (err)  {
    console.log(err);
  }
}

// Function to copy the link to the clipboard
function copyLink() {
  navigator.clipboard.writeText(input.value)
    .then(() => {
      alert("Link copied to clipboard!");
    })
    .catch((err) => {
      console.error("Unable to copy link: ", err);
    });
}
