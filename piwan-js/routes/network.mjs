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

import { BasePacket } from "../core/piwancon/packet/base.mjs";
import PITM from "../core/pitm/pitm.mjs";

var PiTM_Running = false;
PITM.NetworkTimeServiceEmitter.on("running",(status)=>{
    PiTM_Running = status;
});

export async function RouteNetwork(req,res){
    
    let ip4 = req.IPv4;
    let ip6 = req.IPv6;
    if(!ip4){
        ip4 = "IPv6 Detected";
    }
    try{
        let packet = new BasePacket();
        await packet.Encode();
        await packet.Compress();
    }catch(e){
        console.log(e);
    }

    return res.render("get/network.html",{
        IPv4_client : ip4,
        IPv6_client : ip6,
        udp_running : false,
        PiTM_Running : PiTM_Running,
        PiTM_Network : PITM.Networks(),
        jsSource :`https://${process.env.PIWAN_DOMAIN}/js/get/network.js` 
    });
}