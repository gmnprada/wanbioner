/*
***** THIS FILE IS PART OF Piwan Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

*/

'use strict';

var now = new Date();
var pingTimeout;
const Logger = document.querySelector('#logger');
const LogArr = [];

function Render() {
    let str = LogArr.shift();
    const para = document.createElement("div");
    para.innerHTML = `${now.getTime()} : ${str}`;
    if (Logger.childElementCount <= 7) {
        Logger.appendChild(para);
    } else {
        Logger.removeChild(Logger.children[0]);
        Logger.removeChild(Logger.children[1]);
    }

}

function LOG_HTML(str) {
    LogArr.push(str);
    Render();
}

function hexToBytes(hex) {
    let bytes = [];
    for (let c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
    return bytes;
}


function heartbeat() {
    clearTimeout(this.pingTimeout);
    this.pingTimeout = setTimeout(() => {
        this.terminate();
    }, 1000 * 30000);
}

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const digitalclock = document.querySelector('.digital-clock');

function setDate() {
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    digitalclock.innerHTML = now.toISOString();
    LOG_HTML("Sync Clock To Network Time");
}

if (document) {
    document.addEventListener('DOMContentLoaded', () => {
        try {
            const ws = new WebSocket('wss://piwan.net');
            ws.onopen = (e) => {
                LOG_HTML(`Web Socket Initialized to piwan.net`);
                console.log("Web Socket Initialized to piwan.net");
            };

            ws.onmessage = (event) => {
                let buf = hexToBytes(String(event.data));
                let header = new Uint8Array(4);
                for (let i = 0; i < 4; i++) {
                    header[i] = buf[i];
                }
                var str = String.fromCharCode.apply(null, header);

                LOG_HTML(`Receive Packet Header ${str}, lenght : ${event.data.length}`);
                let arr = new Uint8Array(8);
                for (let i = 0; i < 8; i++) {
                    arr[i] = buf[i + 4];
                }
                let view = new DataView(arr.buffer, 0);
                let result = view.getBigUint64(0, true);
                now = new Date(Number(result));
                setDate();
            };

            ws.onclose = (event) => {
                clearTimeout(this.pingTimeout);
                if (event.wasClean) {
                    console.log("Ws closed", event);
                } else {
                    // e.g. server process killed or network down
                    // event.code is usually 1006 in this case
                    console.log("Ws Terminated unclean");
                }
            };

            ws.onerror = (error) => {
                console.log(error);
            };

            ws.onping = () => {
                LOG_HTML("WebSocket HeartBeat pinging");
                heartbeat();
            }
        } catch (e) {
            console.error(e);
        }
    });
}

