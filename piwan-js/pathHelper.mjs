import { platform } from "node:os";
import path from "node:path";

function getMetaDir(){
    let meta_dir = import.meta.url;

    if(platform() == 'darwin'){
        meta_dir = path.dirname(import.meta.url.replace("file://",""));
    }

    if(platform() == 'win32'){
        meta_dir = path.dirname(import.meta.url.replace("file:///",""));
    }

    if(platform() == 'linux'){
        meta_dir = path.dirname(import.meta.url.replace("file://",""));
    } 

    return meta_dir;
}

export const FILEMETADIR = path.dirname(import.meta.url);
export const META_DIR = getMetaDir();
export const ROOT_DIR = META_DIR;
export const PROJECT_DIR = ROOT_DIR.replace("/src","");

export default {FILEMETADIR,META_DIR,ROOT_DIR,PROJECT_DIR};