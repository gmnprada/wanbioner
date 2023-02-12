import { readFile } from 'fs/promises';
import http from 'node:http';
import https from 'node:https';
import { PROJECT_DIR } from './pathHelper.mjs';
import express from 'express';
import {WebSocketServer} from 'ws';
import hbs from 'hbs';
import { RouteIndex } from './routes/index.mjs';
import { RouteAbout} from './routes/about.mjs';
import { RouteNetwork} from './routes/network.mjs';
import TIME_SERVICE from './core/timeservice/timeservice.mjs';
import { RouteDocs } from './routes/docs.mjs';
import { RouteAuth } from './routes/auth.mjs';
import helmet from 'helmet';
import {debug_log} from './log.mjs';


const json = JSON.parse(
  await readFile(
    new URL('./config.json', import.meta.url)
  )
);

json.PWAN_ENVIRONMENT == "DEV"  ? process.env.NODE_ENV = 'development' : process.env.NODE_ENV = 'production';


TIME_SERVICE.Start();
const app = express();
const port = Number(json.PWAN_HTTP_PORT);
const httpsPort = Number(json.PWAN_HTTPS_PORT);

app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'","localhost","piwan.net","minepi.com","sandbox.minepi.com","sdk.minepi.com"],
        scriptSrc: [
            "'self'",
            "'unsafe-inline'",
            "piwan.net",
            "sdk.minepi.com",
            "sandbox.minepi.com",
            "localhost"
        ],
        styleSrc: [
            "'self'",
            "'unsafe-inline'",
            "localhost",
            "piwan.net",
            "fonts.googleapis.com",
            "fonts.gstatic.com",
        ],
        fontSrc: ["'self'", "localhost","piwan.net","fonts.googleapis.com", "fonts.gstatic.com"],
        frameSrc: ["'self'"],
        manifestSrc: ["'self'"],
        connectSrc:["'self'"]
    }
}));
app.use(helmet.xssFilter());
app.disable('x-powered-by');

hbs.registerPartial('header', `
<!DOCTYPE html>
<html lang="en">

<head>
    <title>{{title}}</title>
    <link rel="stylesheet" href="./assets/piwan.css">
    <link rel="stylesheet" href="./assets/mdl/material.min.css">
    <script src="./assets/mdl/material.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="apple-touch-icon" sizes="57x57" href="/assets/ico/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/assets/ico/apple-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/assets/ico/apple-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/assets/ico/apple-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/assets/ico/apple-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/assets/ico/apple-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/assets/ico/apple-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/assets/ico/apple-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/asstes/ico/apple-icon-180x180.png">
    <link rel="icon" type="image/png" sizes="192x192"  href="/assets/ico/android-icon-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/ico/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="96x96" href="/assets/ico/favicon-96x96.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/ico/favicon-16x16.png">
    <link rel="manifest" href="/assets/ico/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="/assets/ico/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
</head>
<body>

<div class="mdl-layout mdl-js-layout">
<header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
        <!-- Title -->
        <div class="mdl-layout-title">
        <img class="logo" src="/assets/ico/android-icon-36x36.png" alt="Logo">
        <span>πwan</span>
        </div>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
            <a class="mdl-navigation__link" href="/about">About</a>
            <a class="mdl-navigation__link" href="/network">Network</a>
            <a class="mdl-navigation__link" href="/network">Docs</a>
            <a class="mdl-navigation__link" href="https://github.com/madepriambhada/piwan" target="blank">Github</a>
            <a class="mdl-navigation__link" href="/auth">Login</a>
        </nav>
    </div>
</header>
<div class="mdl-layout__drawer">
    <img class="logo" src="/assets/piwan.png" alt="Logo">
    <span class="mdl-layout-title">
        <a href="/" class="a-nostyle">πwan</a>
    </span>
    <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="/about">About</a>
        <a class="mdl-navigation__link" href="/network">Network</a>
    </nav>
</div>
<main class="mdl-layout__content">
`
);

hbs.registerPartial('footer', `
<div class="mdl-grid center-items">
    <div class="mdl-cell mdl-cell--12-col text-white center-items">&#169;2023 πwan Developer And Contributor | All Rights Reserved</div>
</div>
</main>
</div>
</body>
</html>
`
);


let dir = "/" + PROJECT_DIR + "/assets";
app.use("/assets", express.static(dir));
app.set('view engine', 'html');

app.engine('html', hbs.__express);

app.get('/', RouteIndex);
app.get('/about',RouteAbout);
app.get('/network',RouteNetwork);
app.get('/docs',RouteDocs);
app.get('/auth',RouteAuth);
app.get('*', function(req, res){
    res.status(404).render('get/404.html');
  });



const wss = new WebSocketServer({noServer:true});

function heartbeat(){
    this.isAlive = true;
}

wss.on('connection',ws=>{
    ws.on("connection",(c)=>{
        debug_log("WS got new client",ws);
    });
    ws.on("message",msg=>{
        debug_log("WS message",msg);
    });

    ws.on("error",err=>{
        debug_log("ws error",err);
    });

   ws.on('pong', heartbeat);
});

TIME_SERVICE.NetworkTimeServiceEmitter.on('unixsync',(time)=>{
    let buffer = Buffer.from([0xcf, 0x80, 0x54, 0x4d]);
    let t = Buffer.alloc(8);
    t.writeBigUint64LE(time,0);
    let conc = Buffer.concat([buffer,t]);
    for(let ws of wss.clients){
        if (ws.isAlive === false) return ws.terminate();
        ws.isAlive = false;
        ws.ping();
        ws.send(conc.toString('hex'));
    }
});


var httpServer = http.createServer(app);
httpServer.listen(json.PWAN_HTTP_PORT);
httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, socket => {
      wss.emit('connection', socket, request);
    });
});