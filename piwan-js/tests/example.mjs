/*
***** THIS FILE IS PART OF Piwan Project *****

PiOS License Copyright (C) <2023> <gdemadenovanpriambhada>

Developer


Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory
if you cannot find the copy of full license on the root project see it at
https://github.com/pi-apps/PiOS
or
https://github.com/madepriambhada/piwan/blob/main/LICENSE

©2023 πwan Developer And Contributor | All Rights Reserved

*/

import TIME_SERVICE from '../core/timeservice/timeservice.mjs';
const { randomBytes} = await import('node:crypto');

TIME_SERVICE.Start();
TIME_SERVICE.NetworkTimeServiceEmitter.on('unixsync', () => {
    console.log("ΠWN Packet : ",randomBytes(32).toString('hex'));
});
// run for 5 minutes
setTimeout(TIME_SERVICE.Stop, 60 * 1000 * 5);