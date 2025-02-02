function showPage(pageId) {
  var pages = document.querySelectorAll(".page");

  pages.forEach(function (page) {
    page.classList.add("hidden");
  });

  var selectedPage = document.getElementById(pageId);
  selectedPage.classList.remove("hidden");

  var spans = document.querySelectorAll("#page1 .text span");

  if (pageId !== "page1") {
    spans.forEach(function (span) {
      span.style.animation = "none";
      span.style.opacity = "0";
    });
  } else {
    spans.forEach(function (span, index) {
      span.style.animation = `fadeIn 0.5s forwards`;
      span.style.animationDelay = `${index * 0.2}s`;
    });
  }
}
