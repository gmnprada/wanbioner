import dgram from 'node:dgram';

export var UDPRUNNING = false;

async function runUdp(){

  if(UDPRUNNING == true) return;

  UDPRUNNING = true;
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
