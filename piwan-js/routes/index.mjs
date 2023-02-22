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

import PITM from "../core/pitm/pitm.mjs";

export async function RouteIndex(req,res){
    let data = PITM.Networks();
    return res.render("get/index.html",{
        network :data,
        gameSource :`https://${process.env.PIWAN_DOMAIN}/game/snake-kite/snakekite.min.js`
    });
}