const startGameBtn = document.getElementById("startGameBtn");
const closeBtn = document.getElementById("closeBtn");

startGameBtn.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5500/"; 
});

closeBtn.addEventListener("click", function() {
    // if (confirm("Are you sure you want to close this window?")) {
      window.close();
    // }
  });