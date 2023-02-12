/*
***** THIS FILE IS PART OF Piwan Project *****

PiOS License

Copyright (C) <2023> <gdemadenovanpriambhada>

Developer


Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

*/

import TIME_SERVICE from '../core/timeservice/timeservice.mjs';
const { randomBytes} = await import('node:crypto');

TIME_SERVICE.Start();
TIME_SERVICE.NetworkTimeServiceEmitter.on('unixsync', () => {
    console.log("ΠWN Packet : ",randomBytes(32).toString('hex'));
});
// run for 5 minutes
setTimeout(TIME_SERVICE.Stop, 60 * 1000 * 5);