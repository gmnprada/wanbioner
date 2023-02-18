import { readFileSync, writeFileSync } from "node:fs";
import { ROOT_DIR } from "../pathHelper.mjs";

export async function RouteTos(req,res){
    let directory = ROOT_DIR + "/views/gen/tos.html";
    let header = `{{> header title="Π Wide Area Network - Terms Of Service"}}`;
    let docs = readFileSync(directory);
    let notice = `<p>Original Txt copy of this file at <a href="https://${process.env.PIWAN_DOMAIN}/assets/txt/tos.txt">Original File</a></p>`;
    let footer = `{{> footer}}`;

    let complete = header + docs + notice + footer;

    writeFileSync(ROOT_DIR + "/views/gen/tos_auto.html",complete);
    return res.render('gen/tos_auto.html');
}