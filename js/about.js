const leaderImgs = document.querySelectorAll(".leader-img");

leaderImgs.forEach((leaderImg) => {
  const links =
    leaderImg.nextElementSibling.nextElementSibling.nextElementSibling;
  leaderImg.addEventListener("mouseover", () => {
    links.classList.add("visible");
    leaderImg.style.filter = "brightness(50%)";
    leaderImg.style.transition = "filter 350ms ease";
    leaderImg.addEventListener("mouseleave", () => {
      links.classList.remove("visible");
      links.addEventListener("mouseover", () => {
        leaderImg.style.filter = "brightness(50%)";
      });
      leaderImg.style.filter = "brightness(100%)";
    });
  });
});
