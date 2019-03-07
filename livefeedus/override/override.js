function isAdmin() {
    return window.location.search.includes('admin') || window.location.hash.includes('admin');
}

function keyDownCatcher() {
    window.addEventListener('keydown', function(event) {
        event.stopPropagation();
        console.log('Keydown', event);
    }, true);
}

if (!isAdmin()) {
    keyDownCatcher();
} else {
    setTimeout(function() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add("isAdmin");
    }, 1);
}
