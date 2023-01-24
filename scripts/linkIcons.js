document.querySelectorAll("a.iconLink").forEach(function (element) {
    var fontSize = getComputedStyle(element).getPropertyValue("font-size").replace("px", "");
    console.log(fontSize);
    var address = element.href.split("/")[2];
    console.log(address);
    var faviconUrl = "https://icons.duckduckgo.com/ip3/" + address + ".ico";
    console.log(faviconUrl);
    var icon = document.createElement("img");
    icon.src = faviconUrl;
    icon.height = fontSize;
    icon.width = fontSize;
    var linkText = document.createRange().createContextualFragment(element.innerHTML);

    element.innerHTML = "";
    element.append(icon, linkText);

});