import { BasePacket } from "../core/packet.mjs";
import { UDPRUNNING } from "../core/udp_server.mjs";

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
        udp_running : UDPRUNNING
    });
}