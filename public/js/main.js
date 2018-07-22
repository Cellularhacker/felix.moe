// Button for Copying Text to  Clipboard 
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

// Loading Random Felix Image
var imageURLs = [
    "http://felix.moe/images/maxresdefault.jpg",
    "http://felix.moe/images/maxresdefault2.jpg"
];
function getImageTag() {
    var img= '<img src=\"';
    var randomIndex = Math.floor(Math.random() * imageURLs.length);
    img += imageURLs[randomIndex];
    img += '\" alt="Felix Magi Tenshi!\"  width=\"70%\">';
    return img;
}