function showPage(pageId) {
  var pages = document.querySelectorAll(".page");

  pages.forEach(function (page) {
    page.classList.add("hidden");
  });

  var selectedPage = document.getElementById(pageId);
  selectedPage.classList.remove("hidden");

  if (pageId === "page1") {
    loadDisqus();
  } else {
    var disqusThread = document.getElementById("disqus_thread");
    if (disqusThread) {
      disqusThread.innerHTML = "";
    }
  }
}

function loadDisqus() {
  if (window.DISQUS) {
    DISQUS.reset({
      reload: true,
      config: function () {
        this.page.identifier = "page1";
        this.page.url = window.location.href;
      },
    });
  } else {
    var d = document,
      s = d.createElement("script");
    s.src = "https://YOUR_SHORTNAME.disqus.com/embed.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  }
}
