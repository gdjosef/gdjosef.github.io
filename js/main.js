window.onload = setSubtitle;

const clipboard = new ClipboardJS("#discord");

clipboard.on("success", function(e) {
  let name = e.trigger.innerHTML;
  e.trigger.innerHTML = "copied";
  setTimeout(() => e.trigger.innerHTML = name, 1000);
  e.clearSelection();
});

const subtitles = [
  "I'll move this to a proper framework eventually.",
  "No mom, I'm too busy making a new blog post!",
  "Being mobile-friendly, one tag at a time.",
  "You will never see this appear on the webpage",
  "I'll add more later, boutta eat dinner."
]

const subtitle = document.getElementById("subtitle");

function setSubtitle() {
  subtitle.textContent = subtitles[Math.floor(Math.random() * subtitles.length)];
}