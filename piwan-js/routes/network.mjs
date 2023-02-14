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

import { BasePacket } from "../core/packet.mjs";
import { UDPRUNNING } from "../core/udp_server.mjs";
import TIME_SERVICE  from "../core/timeservice/timeservice.mjs";

var tms_running = false;
TIME_SERVICE.NetworkTimeServiceEmitter.on("running",(status)=>{
    tms_running = status;
})
export async function RouteNetwork(req,res){
    let ips = (
        req.headers['cf-connecting-ip'] ||
        req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress || ''
    ).split(',');

    
    try{
        let packet = new BasePacket();
        await packet.Encode();
        await packet.Compress();
    }catch(e){
        console.log(e);
    }

    return res.render("get/network.html",{
        client_ip : ips[0],
        udp_running : UDPRUNNING,
        tms_running : tms_running
    });
}