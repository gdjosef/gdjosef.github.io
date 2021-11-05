const clipboard = new ClipboardJS("#discord");

clipboard.on("success", function(e) {
  let name = e.trigger.innerHTML;
  e.trigger.innerHTML = "copied";
  setTimeout(() => e.trigger.innerHTML = name, 1000);
  e.clearSelection();
});