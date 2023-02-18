import { readFileSync, writeFileSync } from "node:fs";
import { ROOT_DIR } from "../pathHelper.mjs";

export async function RouteTos(req,res){
    let directory = ROOT_DIR + "/views/gen/tos.html";
    let header = `{{> header title="Π Wide Area Network - Terms Of Service"}}`;
    let docs = readFileSync(directory);
    let footer = `{{> footer}}`;
    let notice = `\n You Can Get Original Txt copy of this file at <a href="https://${process.env.PIWAN_DOMAIN}/assets/txt/tos.txt">`;

    let complete = header + docs + footer + notice;

    writeFileSync(ROOT_DIR + "/views/gen/tos_auto.html",complete);
    return res.render('gen/tos_auto.html');
}