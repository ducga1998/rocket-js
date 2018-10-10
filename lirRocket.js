
// this is bong bong
/*
    input : context  , x, y
    output : canvas circle

*/
class Particle {
    constructor(context, x, y, R) {
        this.context = context
        this.x = x
        this.y = y
        this.R = R
    }
    loop() {
        if (this.y === window.innerHeight) {
            this.y = 0
            console.log("ahhi")
        }
        this.render()
    }
    render() {
        // console.log(this.x, "|", this.y)
        this.context.beginPath()
        this.context.fillStyle = 'black'
        this.context.arc(this.x, this.y, this.R, 0, 360);
        // this.context.clearRect( 0 , 0 , this.canvas.width, this.canvas.height)
        this.context.fill();
    }
}
// factorry Particle : ))
class Tween {
    constructor(canvas) {
        this.canvas = canvas;
        // this.canvas.style.width = '1000px'
        this.context = canvas.getContext('2d')
        this.color = this.getRandomColor()
        this.x = 0
        this.y = 0
    }

    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    setPosition() {

    }
    runParabol() {
        let X = 150;
        setInterval(() => {
            X = X - 1
            if (100 + X > window.innerHeight) {

            }
            let Y = (Math.abs(X)) ** (1.8) / 10 - 300
             if (50 === Math.abs(X)) {
            }
            if (Y == 500) {
                return

            }
            const instanceParticle = new Particle(this.context, 1000 + X, 500 - Y, 2)
            instanceParticle.loop()
        }, 10)





    }
    // run1DivideX() {
    //     let X = 400;
    //     setInterval(() => {
    //         X = X +10
    //         let Y = Math.abs(X) ** (1/2)
    //         const instanceParticle = new Particle(this.context,   X, 1000+  Y, 2)
    //         instanceParticle.loop()
    //     }, 10)





    // }


}

function Sequence(obj) {
    Object.keys(obj).map(item => {
        setTimeout(obj[item], item)
    })
}
const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
const instanceTween = new Tween(canvas)
instanceTween.runParabol()
// instanceTween.run1DivideX()
window.onmousemove = (e) => { instanceTween.x = e.clientX; instanceTween.y = e.clientY }
