const containers = document.querySelectorAll(".container-fluid");
window.addEventListener("scroll", function () {
  containers.forEach((container) => {
    const containerTop = container.getBoundingClientRect().top;
    const isInViewPort =
      containerTop < window.innerHeight * 0.8 &&
      containerTop + container.offsetHeight * 0.8 > 0;
    container.classList.toggle("show", isInViewPort);
  });
});

function copiarAlPortapapeles(text) {
  let copiedText = document.createElement("textarea");
  let textContainer = document.getElementById("textContainer");

  copiedText.value = text;

  document.body.appendChild(copiedText);

  copiedText.select();
  document.execCommand("copy");

  document.body.removeChild(copiedText);
  textContainer.style.display = "flex";

  setTimeout(function() {
      textContainer.style.display = "none";
   }, 2000);
}
