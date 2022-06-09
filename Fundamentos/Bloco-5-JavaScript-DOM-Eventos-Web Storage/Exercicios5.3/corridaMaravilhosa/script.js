window.onload = function () {
    let button = document.getElementById('start-race-btn');

    let car1 = document.querySelector('.car1');
    let car2 = document.querySelector('.car2');

    resetCars(car1, car2);

    button.addEventListener('click', function () {
        // event.target.innerText = "acelera!!!"
        // console.log(car1, car2);
        car1.style.marginLeft = (parseInt(car1.style.marginLeft) + (Math.random() * 100)) + 'px';
        car2.style.marginLeft = (parseInt(car2.style.marginLeft) + (Math.random() * 100)) + 'px';

        if (parseInt(car1.style.marginLeft) > window.innerWidth) {
            alert('Vitoria do carro 1');
            resetCars(car1, car2);
        };

        if (parseInt(car2.style.marginLeft) > window.innerWidth) {
            alert('Vitoria do carro 2');
            resetCars(car1, car2);
        };

    });
};


function resetCars(carroA, carroB) {
    carroA.style.marginLeft = 0;
    carroB.style.marginLeft = 0;
};