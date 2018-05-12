var btn1 = document.getElementsByName('btn1')[0];
var btn2 = document.getElementsByName('btn2')[0];


// change color with boolean isPink
var isPink = false;
btn1.addEventListener('click', function() {

    if (isPink) {
        document.querySelector('body')
            .style.background = 'white';
    }
    else {
        document.querySelector('body')
            .style.background = 'pink';
    }

    isPink = !isPink;
    
    
});

// change color with css class in html
// DOM - use domuemnt to get element model in js
btn2.addEventListener('click', () => {
    document.body.style.background = null;
    document.body.classList.toggle('green');
});
