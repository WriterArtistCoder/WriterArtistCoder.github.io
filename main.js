// On load
function onLoad() {
    setComic();
}

// Toggle the theme (light, dark)
function switchTheme() {
    var theme = document.getElementById("theme-css"); // Get the stylesheet
    var icons = document.getElementsByClassName("material-icons"); // Get all icon elements
    
    if (theme.href.endsWith("dark.css")) { // If the stylesheet is importing dark.css
        theme.href = "light.css"; // Set it to light.css
    } else if (theme.href.endsWith("light.css")) { // If the stylesheet is importing light.css
        theme.href = "dark.css"; // Set it to dark.css
    }
    
    
    
}

// Set the comic to be displayed
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
    var c_link = document.getElementById("comic-link");
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
    c_link.href = json.src;
    c_image.src = json.src;
    c_image.alt = json.transcript;
    c_caption.innerHTML = json.caption;
}
