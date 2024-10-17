function showPage(pageId) {
  var pages = document.querySelectorAll(".page");
  pages.forEach(function (page) {
    page.classList.add("hidden");
  });

  var selectedPage = document.getElementById(pageId);
  selectedPage.classList.remove("hidden");
}

function showDetails(siteId) {
  let details = {
    baekjoon:
      "Codeforces offers regular contests and allows you to compare your problem-solving abilities with others globally.",
    leetcode:
      "LeetCode is a go-to platform for coding interviews, offering categorized problems and company-specific challenges.",
    hackerrank:
      "HackerRank features practice problems, coding challenges, and contests, all aimed at enhancing your skills.",
  };

  alert(details[siteId]);
}
