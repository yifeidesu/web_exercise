var btn = document.querySelector('button');
var isPink = false;

btn.addEventListener('click', function() {

    if (isPink) {
        document.querySelector('body').style.background = 'blue';
        isPink = false;
    }
    else {
        document.querySelector('body').style.background = 'pink';
        isPink = true;
    }
});
