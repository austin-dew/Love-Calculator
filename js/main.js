calcLove();

function calcLove() {
    let name1 = document.querySelector('#name1');
    let name2 = document.querySelector('#name2');
    let calcPercent = document.querySelector('#titleContainer h2');
    let calcBtn = document.querySelector('#calcBtn');

    calcBtn.addEventListener('click', function() {
        calcPercent.innerHTML = "Love between " + name1.value + " and " + name2.value + " is: " + (Math.floor(Math.random() * 100) + 1) + "%";
    });
}
