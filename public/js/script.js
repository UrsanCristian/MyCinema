document.getElementById("showForm").addEventListener("click", function () {
  const form = document.getElementById("hiddenForm");
  const btn = document.getElementById("showForm");
  const displayStyle = window.getComputedStyle(form).display;

  if (displayStyle !== "block") {
    btn.textContent = "Cancel Review"
    form.style.display = "block";
    setTimeout(() => {
      form.style.opacity = "1";
    }, 80);
  } else {
    btn.textContent = "Add New Movie/Series Review"
    form.style.opacity = "0";
    setTimeout(() => {
      form.style.display = "none";
    }, 500);   
 }
});
