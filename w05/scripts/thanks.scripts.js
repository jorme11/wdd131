<script>
  // Run after the page loads
    document.addEventListener("DOMContentLoaded", function () {

        let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) : 0;

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

    const counterDisplay = document.getElementById("counter");
    if (counterDisplay) {
        counterDisplay.textContent = `You’ve submitted ${reviewCount} review(s).`;
    }
  });
</script>
