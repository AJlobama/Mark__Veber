const linkContent = Array.from(
  document.querySelectorAll(".content__links-item")
);
const card = document.querySelector(".content__card");
const img = card.querySelector("img");

linkContent.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    let { number } = link.dataset;
    card.classList.remove("hide");
    img.src = `img/card-${number}.png`;
  });
});

linkContent.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    card.classList.add("hide");
    console.log(img.src);
  });
});
