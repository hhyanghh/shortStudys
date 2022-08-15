const menu = document.querySelector('.menu');

function clickHandler(event) {
    let elem = event.target;
    while (!elem.classList.contains('menu-btn')) {
        elem = elem.parentNode;

        // 종료값을 걸어줘야한다.
        if (elem.nodeName === 'BODY') {
            elem = null;
            return;
        }
    }
    console.log(elem.dataset.value);
}

menu.addEventListener('click', clickHandler);