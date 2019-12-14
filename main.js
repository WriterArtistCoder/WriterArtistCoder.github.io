function onLoad() {
    setComic();
}

function switchTheme() {
    var theme = document.getElementById("theme-css");
    if (theme.href.endsWith("dark.css")) {
        theme.href = "light.css";
    } else if (theme.href.endsWith("light.css")) {
        theme.href = "dark.css";
    }
}

function setComic() {
    // Get the comic number from the URL
    var url = location.href;
    var latestNum = 0;
    var comicNum = latestNum;
    
    if (url.indexOf("?n=") != -1) {
        comicNum = url.substring(url.indexOf("?n=")+3, url.length);
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
    json = json[comicNum]; // Set the JSON object to the correct comic
    
    // Modify 
    c_number.textContent = json.number;
    c_title.textContent = json.title;
    c_image.src = json.src;
    c_image.alt = json.transcript;
    c_caption.innerHTML = json.caption;
}
