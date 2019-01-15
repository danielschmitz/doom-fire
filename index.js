const fireColorsPalette = [{
    "r": 7,
    "g": 7,
    "b": 7
}, {
    "r": 31,
    "g": 7,
    "b": 7
}, {
    "r": 47,
    "g": 15,
    "b": 7
}, {
    "r": 71,
    "g": 15,
    "b": 7
}, {
    "r": 87,
    "g": 23,
    "b": 7
}, {
    "r": 103,
    "g": 31,
    "b": 7
}, {
    "r": 119,
    "g": 31,
    "b": 7
}, {
    "r": 143,
    "g": 39,
    "b": 7
}, {
    "r": 159,
    "g": 47,
    "b": 7
}, {
    "r": 175,
    "g": 63,
    "b": 7
}, {
    "r": 191,
    "g": 71,
    "b": 7
}, {
    "r": 199,
    "g": 71,
    "b": 7
}, {
    "r": 223,
    "g": 79,
    "b": 7
}, {
    "r": 223,
    "g": 87,
    "b": 7
}, {
    "r": 223,
    "g": 87,
    "b": 7
}, {
    "r": 215,
    "g": 95,
    "b": 7
}, {
    "r": 215,
    "g": 95,
    "b": 7
}, {
    "r": 215,
    "g": 103,
    "b": 15
}, {
    "r": 207,
    "g": 111,
    "b": 15
}, {
    "r": 207,
    "g": 119,
    "b": 15
}, {
    "r": 207,
    "g": 127,
    "b": 15
}, {
    "r": 207,
    "g": 135,
    "b": 23
}, {
    "r": 199,
    "g": 135,
    "b": 23
}, {
    "r": 199,
    "g": 143,
    "b": 23
}, {
    "r": 199,
    "g": 151,
    "b": 31
}, {
    "r": 191,
    "g": 159,
    "b": 31
}, {
    "r": 191,
    "g": 159,
    "b": 31
}, {
    "r": 191,
    "g": 167,
    "b": 39
}, {
    "r": 191,
    "g": 167,
    "b": 39
}, {
    "r": 191,
    "g": 175,
    "b": 47
}, {
    "r": 183,
    "g": 175,
    "b": 47
}, {
    "r": 183,
    "g": 183,
    "b": 47
}, {
    "r": 183,
    "g": 183,
    "b": 55
}, {
    "r": 207,
    "g": 207,
    "b": 111
}, {
    "r": 223,
    "g": 223,
    "b": 159
}, {
    "r": 239,
    "g": 239,
    "b": 199
}, {
    "r": 239,
    "g": 239,
    "b": 199
}]

const fireFragment = {
    x: 0,
    y: 0,
    width: 5,
    height: 5,
    life: 36
}

const canvas = document.getElementById("myCanvas");
const context = canvas.getContext('2d');
const fire = [];
const loop = null;
const particles = 100;

function start () {
    syncFire();
    loop = setInterval(updateFire, 50);
}

function syncFire () {
    for (var i = 0; i < fire.length - 1; i++) {
        if (fire[i].life <= 0) {
            fire.splice(i, 1);
        }
    }
    for (var i = 0; i < particles; i++) {
        const clone = Object.assign({}, fireFragment);
        clone.x = i * clone.width;
        clone.y = canvas.height - clone.height;
        fire.push(clone);
    }
}

function updateFire () {
    context.clearRect(0, 0, canvas.width, canvas.height);
    fire.forEach(updateFireFragment)
    syncFire();
}

function updateFireFragment (fragment) {
    if (fragment.life > 0) {
        context.fillStyle = "rgb(" + fireColorsPalette[fragment.life].r + ", " + fireColorsPalette[fragment.life].g + ", " + fireColorsPalette[fragment.life].b + ")";
        context.fillRect(fragment.x, fragment.y, fragment.width, fragment.height);
        context.stroke();
        fragment.life--;
        fragment.y = fragment.y - Math.random() * 10;
        fragment.x = fragment.x - Math.random() * 10;
    }
}

start();