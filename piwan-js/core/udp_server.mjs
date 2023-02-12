/*
***** THIS FILE IS PART OF Piwan Project *****

PiOS License

Copyright (C) <2023> <gdemadenovanpriambhada>

Developer


Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

*/

import dgram from 'node:dgram';

export var UDPRUNNING = false;

function runUdp(){
  const udpserver = dgram.createSocket('udp4');

  udpserver.on('error', (err) => {
    console.error(`server error:\n${err.stack}`);
    server.close();
  });
  
  udpserver.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  });
  
  udpserver.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
  });
}
