import { error_log,info_log,debug_log } from '../../log.mjs';

export default function PiWSC(){
    debug_log(navigator);
    debug_log(window);

    if(!navigator && !window){
        info_log("This is not a browser environment");
        return;
    }
}