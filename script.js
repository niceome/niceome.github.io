function showPage(pageId) {
    
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.add('hidden');
    });
    
    var selectedPage = document.getElementById(pageId);
    selectedPage.classList.remove('hidden');
}