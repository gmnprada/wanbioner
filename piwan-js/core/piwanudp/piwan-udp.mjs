/*
***** THIS FILE IS PART OF Piwan Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

*/

// The Focus Of This File Should Implement Piwan on User Datagram Protocol [UDP]


import dgram from 'node:dgram';

import PITM from '../pitm/pitm.mjs';

export var PIWAN_UDP_RUNNING = false;

// must be acgquired through PITM network time
var PITM_TIME = null;

// subscribe to network node time
PITM.NetworkTimeServiceEmitter.on('unixsync',(time)=>{
    PITM_TIME = time;
})

function _onListening(){

}

function _onMessage(){

}

function _onError(){

}
