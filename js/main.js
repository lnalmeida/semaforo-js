let btnSwitch = document.querySelector('#btn-switch');
let imgTrafficLights = document.querySelector('#traffic-lights');

// global
let isOn = false;
let interval = null;
let currentLight = 0;

function SwitchLights() {
    if (isOn) {
        TurnOff();
    } else {
        TurnOn();
    }
}

function TrafficLights() {
    interval = setInterval(changeColor, 3000)
}

function TurnOn() {
    if (!isOn) {
        btnSwitch.classList.remove('on');
        btnSwitch.classList.add('off');
        btnSwitch.innerHTML = 'Desligar';
        TrafficLights();
        isOn = true;
    } else {
        TurnOff();
    }
}

function TurnOff() {
    if (isOn) {
        btnSwitch.classList.remove('off');
        btnSwitch.classList.add('on');
        btnSwitch.innerHTML = 'Ligar';
        clearInterval(interval);
        isOn = false;
        imgTrafficLights.src = 'assets/desligado.png';
    }
}

function changeColor() {
    const colors = ['vermelho', 'amarelo', 'verde'];
    imgTrafficLights.src = `assets/${colors[currentLight]}.png`;
    currentLight = (currentLight + 1) % 3;
}


btnSwitch.addEventListener('click', SwitchLights);