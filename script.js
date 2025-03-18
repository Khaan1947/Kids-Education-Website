document.addEventListener("DOMContentLoaded", function () {
    function goToPage(url) {
        window.location.href = url;
    }

    document.getElementById("pdfBtn").addEventListener("click", function () {
        goToPage("pdf-books.html");
    });

    document.getElementById("photosBtn").addEventListener("click", function () {
        goToPage("gallery.html");
    });

    document.getElementById("videosBtn").addEventListener("click", function () {
        goToPage("videos.html");
    });

    document.getElementById("gamesBtn").addEventListener("click", function () {
        goToPage("games.html");
    });

    // Add support for touchscreens
    document.getElementById("pdfBtn").addEventListener("touchend", function () {
        goToPage("pdf-books.html");
    });

    document.getElementById("photosBtn").addEventListener("touchend", function () {
        goToPage("gallery.html");
    });

    document.getElementById("videosBtn").addEventListener("touchend", function () {
        goToPage("videos.html");
    });

    document.getElementById("gamesBtn").addEventListener("touchend", function () {
        goToPage("games.html");
    });
});