// add mouseover and mouseout event listener to github link
document.getElementById('link').addEventListener('mouseover', function() {
    var img = document.getElementById('img');
    img.style.backgroundImage = "url('static/50-transparent-github.png')";
});
document.getElementById('link').addEventListener('mouseout', function() {
    var img = document.getElementById('img');
    img.style.backgroundImage = "url('static/github.png')";
});