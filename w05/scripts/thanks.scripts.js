document.addEventListener("DOMContentLoaded", () => {
  let reviewCount = localStorage.getItem("reviewCount");

  if (!reviewCount) {
    reviewCount = 0;
  }

  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);

  // Optional: display it to the user
  const message = document.createElement("p");
  message.textContent = `You have submitted ${reviewCount} review(s).`;
  document.querySelector("main").appendChild(message);
});
