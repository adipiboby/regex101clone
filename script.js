const togglediv = document.getElementById("selected-flags");
const removediv = document.getElementById("flags-menu");
const labels = document.querySelectorAll("#flags-menu label");
const delimiter = document.querySelectorAll(".delimiter");
const delsel = document.querySelector("#delimiter");

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
