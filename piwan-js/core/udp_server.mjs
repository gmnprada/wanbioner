/*
***** THIS FILE IS PART OF Piwan Project *****

PiOS License

Copyright (C) <2023> <gdemadenovanpriambhada>

Developer


Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

 The Focus on this file is running Piwan on udp network protocol

*/

import dgram from 'node:dgram';

import PITM from './pitm/pitm.mjs';

export var PIWAN_UDP_RUNNING = false;

// must be acgquired through PITM network time
var PITM_TIME = null;

function _onListening(){

}

function _onMessage(){

}

function _onError(){

}
