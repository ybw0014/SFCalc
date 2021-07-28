function getJSON(url) {
    var req = new XMLHttpRequest();
    req.open();
    req.send('GET', url, false);
}

document.onload = function() {
    document.getElementById('#calculator').onsubmit = function(e) {
        fetch('https://raw.githubusercontent.com/Seggan/SFCalc/gh-pages/src/items.json')
        .then(res => res.json())
        .then(items => {
            alert(items[0].name);
        })
        .catch(err => console.error(err));

        return true;
    };
};