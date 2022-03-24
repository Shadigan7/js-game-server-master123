import platform from '../img/platform.png';
import sun from '../img/sun.gif';
import bush from '../img/bush.png';
import bush2 from '../img/bush2.gif';
import background from '../img/background.jpg';


const flag = false
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 800;

const gravity = 0.2;

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 30
        this.height = 30

    }
    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if (this.position.y + this.height +
            this.velocity.y <= canvas.height)
            this.velocity.y += gravity
        else this.velocity.y = 0
    }
}

function createImage(imageSrc) {
    const image = new Image();
    image.src = imageSrc;
    return image
}



class Platform {
    constructor({
        x,
        y,
        image
    }) {
        this.position = {
            x,
            y,
            image: createImage(platform)
        }
        this.width = 300
        this.height = 100

        this.image = image;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

class Floor {
    constructor({
        x,
        y,
        image
    }) {
        this.position = {
            x,
            y,
            image: createImage(platform)
        }
        this.width = 800
        this.height = 200

        this.image = image;
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

class GenericObject {
    constructor({
        x,
        y,
        image
    }) {
        this.position = {
            x,
            y,
            image: createImage(background)
        }
        this.width = 1024
        this.height = 800
        this.image = image;
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}

class Sun {
    constructor({
        x,
        y,
        image
    }) {
        this.position = {
            x,
            y,
            image: createImage(sun)
        }
        this.width = 400
        this.height = 400
        this.image = image;
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}


class Bush {
    constructor({
        x,
        y,
        image
    }) {
        this.position = {
            x,
            y,
            image: createImage(bush)
        }
        this.width = 200
        this.height = 200
        this.image = image;
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }
}



const player = new Player()
const platforms = [new Platform({
        x: 800,
        y: 750,
        image: createImage(platform)
    }), new Platform({
        x: 1200,
        y: 600,
        image: createImage(platform)
    }),
    new Platform({
        x: 1900,
        y: 400,
        image: createImage(platform)
    }), new Platform({
        x: 2400,
        y: 400,
        image: createImage(platform)
    })
]
const floors = [new Floor({
    x: -1,
    y: 700,
    image: createImage(platform)
}), new Floor({
    x: 799,
    y: 700,
    image: createImage(platform)
})]

const genericObjects = [
    new GenericObject({
        x: 0,
        y: 0,
        image: createImage(background)
    })
]

const suns = [
    new Sun({
        x: 600,
        y: 0,
        image: createImage(sun)
    })
]

const bushes = [
    new Bush({
        x: 450,
        y: 510,
        image: createImage(bush)
    }), new Bush({
        x: 550,
        y: 510,
        image: createImage(bush)
    }), new Bush({
        x: 850,
        y: 510,
        image: createImage(bush)
    }), new Bush({
        x: 1930,
        y: 210,
        image: createImage(bush)
    })
]


const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}



let scrollOffset = 0
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)


    genericObjects.forEach(genericObject => {
        genericObject.draw()
    })

    suns.forEach(sun => {
        sun.draw()
    })

    bushes.forEach(bush => {
        bush.draw()
    })

    platforms.forEach(platform => {
        platform.draw()
    })
    floors.forEach(floor => {
        floor.draw()
    })

    player.update()

    if (keys.right.pressed && player.position.x < 600) {
        player.velocity.x = 5
    } else if (keys.left.pressed && player.position.x >= 50) {
        player.velocity.x = -5
    } else {
        player.velocity.x = 0

        if (keys.right.pressed) {
            scrollOffset += 5
            platforms.forEach(platform => {
                platform.position.x -= 5
            })
            floors.forEach(floor => {
                floor.position.x -= 5
            })
            //bushes
            bushes.forEach(bush => {
                bush.position.x -= 5
            })


        } else if (keys.left.pressed) {
            scrollOffset -= 5
            platforms.forEach(platform => {
                platform.position.x += 5
            })
            floors.forEach(floor => {
                floor.position.x += 5
            })
            //bushes
            bushes.forEach(bush => {
                bush.position.x += 5
            })

        }

    }
    // platform collison detection
    platforms.forEach(platform => {
        if (player.position.y + player.height <=
            platform.position.y && player.position.y +
            player.height + player.velocity.y >=
            platform.position.y && player.position.x +
            player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width) {
            player.velocity.y = 0
        }
    })

    //floor collision detection
    floors.forEach(floor => {
        if (player.position.y + player.height <=
            floor.position.y && player.position.y +
            player.height + player.velocity.y >=
            floor.position.y && player.position.x +
            player.width >= floor.position.x &&
            player.position.x <= floor.position.x + floor.width) {
            player.velocity.y = 0
        }
    })

    
        console.log(scrollOffset)
    if (scrollOffset > 1000) {
    //WIN 
        console.log('you win')
        
    }
    
}
animate()
window.addEventListener('keydown', ({
    keyCode
}) => {
    console.log(keyCode)
    switch (keyCode) {
        case 37:
            console.log('left')
            keys.left.pressed = true;
            break
        case 39:
            console.log('right')
            keys.right.pressed = true;
            break
        case 38:
            console.log('up')
            player.velocity.y -= 5;
            break
        case 40:
            console.log('down')
            player.velocity.y += 5;
            break
    }
})

window.addEventListener('keyup', ({
    keyCode
}) => {
    console.log(keyCode)
    switch (keyCode) {
        case 37:
            console.log('left')
            keys.left.pressed = false;
            break
        case 39:
            console.log('right')
            keys.right.pressed = false;
            break
        case 38:
            console.log('up')
            player.velocity.y -= 10;
            break
        case 40:
            console.log('down')
            player.velocity.y += 5;
            break
    }
})


//AUDIO 
list.onclick = function (e) {
    e.preventDefault();

    var elm = e.target;
    var audio = document.getElementById('audio');

    var source = document.getElementById('audioSource');
    source.src = elm.getAttribute('data-value');

    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
};


//COUNTER

const counter = document.querySelector('.counter');
counter.style.color = 'gray'
counter.style.backgroundColor = 'purple'
counter.style.padding = "20px"
counter.style.display = 'none';

let s = 0
let m = 0
let h = 0
const count = () => {

    counter.innerText = `${h}h : ${m}m : ${s}s`;
    s = s + 1;
    if (s == 60) {
        s = 0;
        m = m + 1
    }
    if (h == 60) {
        m = 0;
        h = h + 1;
    }
}


const play = document.querySelector('.play')
play.addEventListener('click',function(){
play.style.display = 'none'
let counterCount = setInterval(count, 1000)
counter.style.display = 'block';
})



const audio = document.querySelector("#audio");
const mute = document.querySelector('#mute');
const unmute = document.querySelector('#unmute')
mute.addEventListener('click',function(){
    audio.pause();
    audio.currentTime = 0;
    mute.style.display = 'none'
    unmute.style.display = 'block'
})

unmute.addEventListener('click', function(){
    audio.play();
    mute.style.display = 'block'
    unmute.style.display = 'none'
})