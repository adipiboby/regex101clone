const togglediv = document.getElementById("selected-flags");
const removediv = document.getElementById("flags-menu");
const labels = document.querySelectorAll("#flags-menu label");

const delimiter = document.querySelectorAll(".delimiter");
const delsel = document.querySelector("#delimiter");
const flagsmenuoption = removediv.querySelectorAll("input");

const contenteditable = document.querySelector(".contenteditable");
const testStringInput = document.querySelector("#testStringInput");
const delimiter1 = document.querySelector("#delimiter1");

console.log(testStringInput);
togglediv.addEventListener("click", (e) => {
  e.stopPropagation();
  removediv.classList.toggle("open");
});
delsel.addEventListener("click", (e) => {
  e.stopPropagation();
  removediv.classList.toggle("open");
});
document.addEventListener("click", (e) => {
  e.stopPropagation();
  removediv.classList.remove("open");
});

labels.forEach((label) => {
  const div = label.querySelector("div");

  div.addEventListener("click", (event) => {
    const span = div.querySelector("span");
    if (!delimiter[1].innerText.includes(span.innerText)) {
      delimiter[1].innerText += span.innerText;
    } else {
      delimiter[1].innerText = delimiter[1].innerText.replace(
        span.innerText,
        "",
      );
    }
  });
});
testStringInput.addEventListener("input", (e) => {
  const text = testStringInput.innerText;
});

testStringInput.addEventListener("input", (e) => {
  console.log(contenteditable.innerText);
  const testusertext = testStringInput.innerText;
  if (testusertext) {
    const regex = new RegExp(
      contenteditable.innerText,
      delsel.innerText.replace("/", ""),
    );

    testStringInput.innerHTML = testStringInput.innerText.replace(
      regex,
      "<span class='highlight'>$&</span>",
    );
    // const regex=delsel
    // console.log(regex);
    // const test = regex.test(testusertext);
    // console.log(test);
  }
  // console.log(testusertext)
});

contenteditable.addEventListener("input", (e) => {
  console.log(contenteditable.innerText);
  const testusertext = testStringInput.innerText;
  if (testusertext) {
    const regex = new RegExp(
      contenteditable.innerText,
      delsel.innerText.replace("/", ""),
    );

    testStringInput.innerHTML = testStringInput.innerText.replace(
      regex,
      "<span class='highlight'>$&</span>",
    );
    // const regex=delsel
    // console.log(regex);
    // const test = regex.test(testusertext);
    // console.log(test);
  } 
  // console.log(testusertext) 
}); 
