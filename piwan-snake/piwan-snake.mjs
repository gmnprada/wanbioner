/*!
***** THIS FILE IS PART OF Piwan Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

*/

import { Application, Sprite, Container, Graphics,Text} from './pixi.mjs';

let WorldWide = 800;
let WorldHeight = 600;
var lastRandomId;

// const eating = PIXI.sound.Sound.from('sound/sfx/eating.mp3');
// const hishing = PIXI.sound.Sound.from('sound/sfx/hishing.mp3');
// const rattle = PIXI.sound.Sound.from('sound/sfx/rattle.mp3');

// Create the application
const app = new Application({
    width: 800,
    height: 600,
    view: document.getElementById("game"),
    backgroundColor: 0xdedede,
    resolution: window.devicePixelRatio || 1,
    
});

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomGridId() {
    if(lastRandomId != undefined){
        let random = `${getRandomInt(12)},${getRandomInt(16)}`;
        if(random == lastRandomId) getRandomGridId();
        else{
            lastRandomId = random;
        }
    }else{
        lastRandomId = `${getRandomInt(12)},${getRandomInt(16)}`;
    }
    return lastRandomId;
}


class PiwanMap {
    constructor() {
        this.fps = 0;
        this.container = new Container();
        this.textContainer = new Container();
        this.grid = 50;
        this.grid_color = 0x964B00;
        this.hover_alpha = 0.2;
        this.map_alpha = 0.6;
        this.selected_alpha = 1;
        this.selected = 0;
        this.snake = Sprite.from('assets/snakehead.png');
        //head position
        this.snake.gid = "0,0";
        this.snake.gix = 0;
        this.snake.giy = 0;
        this.snake.gixa = [0];
        this.snake.giya = [0];
        this.snake.x = 5;
        this.snake.y = 5;
        this.snake.width = 40;
        this.snake.height = 40;
        this.snake.direction = "DOWN";
        this.snake.color = 0x000000;
        this.snake.body = [this.snake.gid];
        this.snake.moveHistory = [this.snake.gid];
        this.snake.bodyCounter = 1;
        this.control = "-1,-1";
        this.control_allowed = [];
        this.food = new Text("🐭", { align: "center" });
        this.food.x = -50;
        this.food.y = -50;
        this.food.width = 40;
        this.food.height = 40;
        this.food.gid = "-1,-1";
        this.defood = new Text("🦔",{align:"center"});
        this.defood.x = -50;
        this.defood.y = -50;
        this.defood.width = 40;
        this.defood.height = 40;

        for (let i = 0; i < (WorldHeight / this.grid); i++) {
            for (let j = 0; j < (WorldWide / this.grid); j++) {
                const graphics = new Graphics();
                graphics.beginFill(this.grid_color);
                graphics.statX = 5 + (this.grid * j);
                graphics.statY = 5 + (this.grid * i);
                graphics.drawRect(graphics.statX, graphics.statY, this.grid - 10, this.grid - 10);
                graphics.endFill();
                graphics.interactive = true;
                graphics.buttonMode = true;
                graphics.alpha = this.map_alpha;
                graphics.id = `${i},${j}`;
                graphics.gix = i;
                graphics.giy = j;
                //graphics.on('click',this.gridBoxClick);
                graphics.on('pointerdown', (evt) => { this.gridBoxClick(evt, graphics.id, graphics) });
                //graphics.on('mousehover', (evt) => { this.gridBoxClick(evt, graphics.id, graphics) })
                this.container.addChild(graphics);


            }
        }
    }

    markTile(graphics, snakeorgrid) {
        graphics.clear();
        if (snakeorgrid) {
            graphics.beginFill(this.snake.color);
        } else {
            graphics.beginFill(this.grid_color);
        }
        graphics.drawRect(graphics.statX, graphics.statY, this.grid - 10, this.grid - 10);
        graphics.endFill();
    }

    gridBoxClick(event, id, graphics) {
        if (this.control_allowed.includes(id)) {
            this.control = id;
        }
    }

    CorrectIllegal() {
        if (this.snake.direction == "DOWN") {
            if(this.snake.gix == 12) this.snake.gix = 0;
        } else if (this.snake.direction == "UP") {
            if (this.snake.gix == -1) this.snake.gix = 11;
        } else if (this.snake.direction == "LEFT") {
            if (this.snake.giy == -1) this.snake.giy = 15;
        } else if (this.snake.direction == "RIGHT") {
            if (this.snake.giy == 16) this.snake.giy = 0;
        }

        this.snake.gid = `${this.snake.gix},${this.snake.giy}`;
        let i = 0;
        while (i < this.snake.body.length) {
            this.snake.body[i] = `${this.snake.gixa[i]},${this.snake.giya[i]}`;
            ++i;
        }
    }

    getSnake() {
        return this.snake;
    }

    getContainer() {
        return this.container;
    }

    getTextContainer() {
        return this.textContainer;
    }

    getGraphicsById(id) {
        try {
            let childIndex = 0;
            this.container.children.forEach((graph, index) => {
                if (graph.id === id) {
                    childIndex = index;
                }
            });
            let child = this.container.getChildAt(childIndex);
            return child;
        } catch (e) {
            return undefined;
        }
    }

    foodSetPositionByGridId(id) {
        let tile = this.getGraphicsById(id);
        this.food.gid = id;
        this.food.x = tile.statX;
        this.food.y = tile.statY;
    }

    defoodSetPositionByGridId(id){
        let tile = this.getGraphicsById(id);
        this.defood.gid = id;
        this.defood.x = tile.statX;
        this.defood.y = tile.statY;
    }

    renderMap() {
        let i = 0;
        while (i < this.container.children.length) {
            let graph = this.container.getChildAt(i);

            if (this.snake.body.includes(graph.id)) {
                if(this.snake.body[0] != graph.id){
                    this.markTile(graph, true);
                    graph.alpha = this.selected_alpha;
                }
            } else {
                this.markTile(graph, false);
                graph.alpha = this.map_alpha;
            }

            if (this.control_allowed.includes(graph.id)) {
                graph.alpha = this.hover_alpha;
            }
            i++;
        }
    }
}

const map = new PiwanMap();

app.stage.addChild(map.getContainer());
app.stage.addChild(map.getTextContainer());
app.stage.addChild(map.food);
app.stage.addChild(map.defood);
app.stage.addChild(map.snake);

map.foodSetPositionByGridId(getRandomGridId());
map.defoodSetPositionByGridId(getRandomGridId());

// every tick we check the position of the snake
app.ticker.add((delta) => {
    map.CorrectIllegal();
    map.renderMap();

    let snake = map.getSnake();
    snake.body = snake.moveHistory.slice(-snake.bodyCounter).reverse();
    map.renderMap();

    let grid = map.getGraphicsById(`${snake.gix},${snake.giy}`);
    snake.gid = grid.id;

    if (snake.direction == "DOWN") {
        snake.rotation = 0;
        snake.position.x = grid.statX;
        snake.position.y = grid.statY;

        let leftVal = snake.giy - 1;
        if (leftVal == -1) leftVal = 15;

        let rightVal = snake.giy + 1;
        if (rightVal == 16) rightVal = 0;

        let downVal = snake.gix + 1;
        if (downVal == 12) downVal = 0;

        let nextLeft = map.getGraphicsById(`${snake.gix},${leftVal}`);

        let nextRight = map.getGraphicsById(`${snake.gix},${rightVal}`);

        let nextDown = map.getGraphicsById(`${downVal},${snake.giy}`);

        map.control_allowed = [nextLeft.id, nextRight.id, nextDown.id];

    } else if (snake.direction == "UP") {
        snake.rotation = 3.15;
        snake.position.x = grid.statX + 40;
        snake.position.y = grid.statY + 40;

        //Adjustment
        let leftVal = snake.giy - 1;
        if (leftVal == -1) leftVal = 15;

        let rightVal = snake.giy + 1;
        if (rightVal == 16) rightVal = 0;

        let upVal = snake.gix - 1;
        if (upVal == -1) upVal = 11;


        let nextLeft = map.getGraphicsById(`${snake.gix},${leftVal}`);

        let nextRight = map.getGraphicsById(`${snake.gix},${rightVal}`);

        let nextUp = map.getGraphicsById(`${upVal},${snake.giy}`);

        map.control_allowed = [nextLeft.id, nextRight.id, nextUp.id];

    } else if (snake.direction == "LEFT") {
        snake.rotation = 1.6;
        snake.position.x = grid.statX + 40;
        snake.position.y = grid.statY;

        let upVal = snake.gix - 1;
        if (upVal == -1) upVal = 11;

        let downVal = snake.gix + 1;
        if (downVal == 12) downVal = 0;

        let leftVal = snake.giy - 1;
        if (leftVal == -1) leftVal = 15;

        let nextUp = map.getGraphicsById(`${upVal},${snake.giy}`);

        let nextDown = map.getGraphicsById(`${downVal},${snake.giy}`);

        let nextLeft = map.getGraphicsById(`${snake.gix},${leftVal}`);

        map.control_allowed = [nextUp.id, nextDown.id, nextLeft.id];

    } else if (snake.direction == "RIGHT") {
        snake.rotation = -1.6;
        snake.position.x = grid.statX;
        snake.position.y = grid.statY + 40;

        let upVal = snake.gix - 1;
        if (upVal == -1) upVal = 11;

        let downVal = snake.gix + 1;
        if (downVal == 12) downVal = 0;

        let rightVal = snake.giy + 1;
        if (rightVal == 16) rightVal = 0;

        let nextUp = map.getGraphicsById(`${upVal},${snake.giy}`);

        let nextDown = map.getGraphicsById(`${downVal},${snake.giy}`);

        let nextRight = map.getGraphicsById(`${snake.gix},${rightVal}`);

        map.control_allowed = [nextUp.id, nextDown.id, nextRight.id];
    }

})

setInterval(() => {
    let snake = map.getSnake();
    //let prevGrid = map.getGraphicsById(`${snake.gix},${snake.giy}`);

    if (map.control_allowed.includes(map.control)) {
        if (snake.direction == "DOWN") {
            let index = map.control_allowed.findIndex((allowed) => { return allowed == map.control });
            if (index == 0) snake.direction = "LEFT";
            if (index == 1) snake.direction = "RIGHT";
            if (index == 2) snake.direction = "DOWN";
            //rattle.load((sound)=>{sound.play()});
        } else if (snake.direction == "UP") {
            let index = map.control_allowed.findIndex((allowed) => { return allowed == map.control });
            if (index == 0) snake.direction = "LEFT";
            if (index == 1) snake.direction = "RIGHT";
            if (index == 2) snake.direction = "UP";
            //rattle.load((sound)=>{sound.play()});
        } else if (snake.direction == "LEFT") {
            let index = map.control_allowed.findIndex((allowed) => { return allowed == map.control });
            if (index == 0) snake.direction = "UP";
            if (index == 1) snake.direction = "DOWN";
            if (index == 2) snake.direction = "LEFT";
            //rattle.load((sound)=>{sound.play()});
        } else if (snake.direction == "RIGHT") {
            let index = map.control_allowed.findIndex((allowed) => { return allowed == map.control });
            if (index == 0) snake.direction = "UP";
            if (index == 1) snake.direction = "DOWN";
            if (index == 2) snake.direction = "RIGHT";
            //rattle.load((sound)=>{sound.play()});
        } else {
            map.control = '-1,-1';
        }
    }

    if (snake.direction == "DOWN") {
        if (snake.gix >= 0 && snake.gix <= 11) {
            snake.gix = snake.gix + 1;
            if(snake.gix == 12 ) snake.gix = 0;
        }
    } else if (snake.direction == "UP") {
        if (snake.gix >= 0 && snake.gix <= 11) {
            snake.gix = snake.gix - 1;
            if(snake.gix == -1) snake.gix =11;
        }
    } else if (snake.direction == "LEFT") {
        if (snake.giy >= 0 && snake.giy <= 15) {
            snake.giy = snake.giy - 1;
            if (snake.giy == -1) snake.giy = 15;
        }
    } else if (snake.direction == "RIGHT") {
        if (snake.giy >= 0 && snake.giy <= 15) {
            snake.giy = snake.giy + 1;
            if (snake.giy == 16) snake.giy = 0;
        }
    }

    let currentGrid = map.getGraphicsById(`${snake.gix},${snake.giy}`);
    snake.moveHistory.push(currentGrid.id);

    if(snake.moveHistory > 192){
        snake.moveHistory.shift();
    }
    if (currentGrid.id == map.food.gid) {
        map.foodSetPositionByGridId(getRandomGridId());
        map.defoodSetPositionByGridId(getRandomGridId());
        if(snake.bodyCounter <= 192){
            snake.bodyCounter = snake.bodyCounter +1;
        }
        //eating.load().then((sound)=>{sound.play()});
    }

    if(currentGrid.id == map.defood.gid){
        map.foodSetPositionByGridId(getRandomGridId());
        map.defoodSetPositionByGridId(getRandomGridId());
        if(snake.bodyCounter >1){
            snake.bodyCounter = snake.bodyCounter -1;
        }
        //hishing.load().then((sound)=>{sound.play()});
    }
}, 400);