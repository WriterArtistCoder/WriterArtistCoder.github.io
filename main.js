function onLoad() {
    materialSetup();
    setComic();
}

function switchTheme() {
    var theme = document.getElementById("theme-css");
    var button = document.getElementById("theme-button");
    if (theme.href.endsWith("dark.css")) {
        theme.href = "light.css";
        button.textContent = "Dark theme";
    } else if (theme.href.endsWith("light.css")) {
        theme.href = "dark.css";
        button.textContent = "Light theme";
    }
}

function setComic() {
    // Get the comic number from the URL
    var url = location.href;
    var latestNum = 212;
    var num;
    if (url.indexOf("?n=") != -1) {
        num = url.substring(url.indexOf("?n=")+3, url.length);
    }
    
    // Get the elements that need modification
    var c_number = document.getElementById("comic-number");
    var c_title = document.getElementById("comic-title");
    var c_image = document.getElementById("comic-image");
    var c_caption = document.getElementById("comic-caption");
    
    // Parse the JSON file
    var request = new XMLHttpRequest();
    request.open("GET", "resources/comics/comics.json", false);
    request.send(null);
    var json = JSON.parse(request.responseText);
    
    // Modify elements
    c_number.textContent = json.get("number");
    c_title.textContent = json.get("title");
    c_image.src = json.get("src");
    c_image.alt = json.get("transcript");
    c_caption.innerHTML = json.get("caption");
}