import { readFileSync, writeFileSync } from "node:fs";
import { ROOT_DIR } from "../pathHelper.mjs";

export async function RoutePrivacy(req,res){
    let directory = ROOT_DIR + "/views/gen/privacy.html";
    let header = `{{> header title="Π Wide Area Network - Privacy Policy"}}`;
    let wrapperStart = `<div class="mdl-grid"><div class="mdl-cell mdl-cell--12-col text-white">`
    let docs = readFileSync(directory);
    let notice = `<p>Original Txt copy of this file at <a href="https://${process.env.PIWAN_DOMAIN}/assets/txt/privacy.txt">Original File</a></p>`;
    let footer = `{{> footer}}`;
    let wrapperEnd = `</div></div>`
    let complete = header +  wrapperStart + docs + notice + wrapperEnd + footer;
    writeFileSync(ROOT_DIR + "/views/gen/privacy_auto.html",complete);
    return res.render('gen/privacy_auto.html');
}