let canvas;
let ctx;
let fps = 50;

let widthCanvas = 400;
let heightCanvas = 640;

let topMargin = 4;
let widthPanel = 10;
let heightPanel = 20;

let widthF = 40;
let heightF = 40;

let newObject;

//Colors
let red = '#FF0000';
let purple = '#800080';
let orange = '#FF8C00';
let yellow = '#FFD700';
let green = '#008000';
let cyan = '#00CED1';
let blue = '#0000CD';

// 21 X 12
let panel =[
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

let panelCopy =[
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];



let objectGraphic = [
    [
        [                      //CUBE
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0]
        ]
    ],

    [
        [                     // Stick = |
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0]
        ],[
            [0, 0, 0, 0],
            [2, 2, 2, 2],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0],
            [0, 0, 2, 0]
        ]

    ],

    [
        [                            // S
            [0, 0, 0, 0],
            [0, 0, 3, 3],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 3, 0],
            [0, 0, 3, 3],
            [0, 0, 0, 3],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 3, 3],
            [0, 3, 3, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 3, 0],
            [0, 0, 3, 3],
            [0, 0, 0, 3],
            [0, 0, 0, 0]
        ]
        
    ],

    [
        [                         // Z
            [0, 0, 0, 0],
            [0, 4, 4, 0],
            [0, 0, 4, 4],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 4],
            [0, 0, 4, 4],
            [0, 0, 4, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [0, 4, 4, 0],
            [0, 0, 4, 4],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 4],
            [0, 0, 4, 4],
            [0, 0, 4, 0],
            [0, 0, 0, 0]
        ]

    ],
    [
        [                   // L
            [0, 0, 0, 0],
            [0, 5, 5, 5],
            [0, 5, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 5],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 0, 5],
            [0, 5, 5, 5],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 5, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 6, 6, 6],
            [0, 0, 0, 6],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 6, 6],
            [0, 0, 6, 0],
            [0, 0, 6, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 6, 0, 0],
            [0, 6, 6, 6],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 6, 0],
            [0, 0, 6, 0],
            [0, 6, 6, 0],
            [0, 0, 0, 0]
        ]
    ],
    [
        [
            [0, 0, 0, 0],
            [0, 7, 7, 7],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 7, 0],
            [0, 0, 7, 7],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 7, 0],
            [0, 7, 7, 7],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 0, 7, 0],
            [0, 7, 7, 0],
            [0, 0, 7, 0],
            [0, 0, 0, 0]
        ]
    ]

]

function resetPanel(){
    for(py=0;py<21;py++){
        for(px=0;px<12;px++){
            panel[py][px] = panelCopy[py][px];
        }
    }
    console.log("Reset!!");
}

let object = function(){
    this.x = 0;
    this.y = 0;

    this.angle = 1;
    this.type = 1;

    this.delay = 50;
    this.frame = 0;

    this.new = function(){
        this.type = Math.floor(Math.random()*7);
        this.x = 0;
        this.y = 4;
    }

    this.gameOver = function(){
        let gameOver = false;

        for(px = 1; px < widthPanel+1; px++){
            if(panel[2][px] > 0)
                gameOver = true;
        }
        return gameOver;
    }

    this.clearRow = function(){
        let rowCompleted;

        for(py= topMargin; py < heightPanel;py++){
            rowCompleted = true;

            for(px= 1; px < widthPanel+1; px++){
                if(panel[py][px]==0)
                    rowCompleted = false;
            }
        }

        if(rowCompleted){
            for(px= 1; px < widthPanel+1; px++){
                panel[py][px]=0;
            }
        }

    }

    this.fall = function(){
        if(this.frame < this.delay){
            this.frame++;
        }else{
            if(this.collision(this.angle, this.y+1, this.x) == false){
                this.y++;
                
            }else{
                this.fix();
                this.clearRow();
                this.new();

                if(this.gameOver())
                    resetPanel();
            }
            this.frame = 0;
        }

    }

    this.fix = function(){
        for(py =0;py<4;py++){
            for(px=0;px<4;px++){
                if(objectGraphic[this.type][this.angle][py][px] > 0)
                    panel[this.y+py][this.x+px] = objectGraphic[this.type][this.angle][py][px];
            }
        }
    }

    this.collision = function(angleNew, yNew, xNew){
        let band = false;
        for(py=0;py<4;py++){
            for(px=0;px<=4;px++){
                if(objectGraphic[this.type][angleNew][py][px] > 0){
                    if(panel[yNew+py][xNew+px] > 0){
                        band = true;
                    }
                }
            }
        }
        return band;
    }

    this.paint = function(){
        for(py=0;py<4;py++){
            for(px=0;px<4;px++){
                if(objectGraphic[this.type][this.angle][py][px] != 0){

                    if(objectGraphic[this.type][this.angle][py][px] == 1)
                        ctx.fillStyle = red;
                    if(objectGraphic[this.type][this.angle][py][px] == 2)
                        ctx.fillStyle = orange;
                    if(objectGraphic[this.type][this.angle][py][px] == 3)
                        ctx.fillStyle = yellow;
                    if(objectGraphic[this.type][this.angle][py][px] == 4)
                        ctx.fillStyle = green;
                    if(objectGraphic[this.type][this.angle][py][px] == 5)
                        ctx.fillStyle = cyan;
                    if(objectGraphic[this.type][this.angle][py][px] == 6)
                        ctx.fillStyle = blue;
                    if(objectGraphic[this.type][this.angle][py][px] == 7)
                        ctx.fillStyle = purple;

                    ctx.fillRect((this.x + px -1)*widthF, (this.y + py - topMargin)*heightF, widthF, heightF);
                }
            }
        }
    }

    this.rotate = function(){
        let newAngle = this.angle;

        if(newAngle < 3){
            newAngle++;
        }else{
            newAngle = 0;
        }

        if(this.collision(newAngle, this.y, this.x) == false)
            this.angle = newAngle;
    }

    this.down = function(){
        if(this.collision(this.angle, this.y+1, this.x) == false)
        console.log("Down");
        this.y++;
    }

    this.left = function(){
        if(this.collision(this.angle, this.y, this.x-1) == false){
            this.x--;
            console.log("Left");
        }
        
    }

    this.right = function(){
        if(this.collision(this.angle, this.y, this.x+1) == false){
            this.x++;
            console.log("Right");
        }
      
    }

    this.new();
    this.rotate();
}

function paintPanel(){
    for(py = topMargin;py < heightPanel;py++){
        for(px = 1;px < widthPanel+1;px++){
            if(panel[py][px] != 0){

                if(panel[py][px] == 1)
                    ctx.fillStyle = red;
                if(panel[py][px] == 2)
                    ctx.fillStyle = orange;
                if(panel[py][px] == 3)
                    ctx.fillStyle = yellow;
                if(panel[py][px] == 4)
                    ctx.fillStyle = green;
                if(panel[py][px] == 5)
                    ctx.fillStyle = cyan;
                if(panel[py][px] == 6)
                    ctx.fillStyle = blue;
                if(panel[py][px] == 7)
                    ctx.fillStyle = purple;

                ctx.fillRect((px-1)*widthF, (py - topMargin)*heightF, widthF, heightF);
            }
        }
    }
}

function configKeyboard(){
    document.addEventListener('keydown', function(key){
        if(key.keyCode == 38){
            console.log("Up");
            newObject.rotate();
        }

        if(key.keyCode == 40){
            console.log("Down");
            newObject.down();
        }

        if(key.keyCode == 37){
            console.log("Left");
            newObject.left();
        }

        if(key.keyCode == 39){
            console.log("Right");
            newObject.right();
        }
    });
}

function initialize(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    configKeyboard();
    newObject = new object();

    canvas.style.width = widthCanvas;
    canvas.style.height = heightCanvas;

    setInterval(function(){
        main();
    }, 1000/fps);
}

function eraseCanvas(){
    canvas.width = widthCanvas;
    canvas.height = heightCanvas;
}

function main(){
    eraseCanvas();
    paintPanel();
    newObject.fall();
    newObject.paint();
}