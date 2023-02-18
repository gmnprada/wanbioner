import { readFile } from "node:fs";
import { ROOT_DIR } from "../pathHelper.mjs";

export async function RoutePrivacy(req,res){
    let header = `{{> header title="Π Wide Area Network - Terms Of Service"}}`;
    let docs = await readFile(ROOT_DIR + "/views/gen/privacy.html");
    let footer = `{{> footer}}`;
    let notice = `\n You Can Get Original Txt copy of this file at <a href="https://${process.env.PIWAN_DOMAIN}/assets/txt/privacy.txt">`;

    let complete = header + docs + footer + notice;
    return res.render(complete);
}