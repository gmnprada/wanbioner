import { WebSocketServer } from 'ws';
import PITM from '../../core/timeservice/timeservice.mjs';
import { error_log,info_log,debug_log } from '../../log.mjs';

export default class PiwanWS {

    https;
    wss;
    isAlive = false;
    PiTM;

    constructor(){
        this.wss = new WebSocketServer({noServer:true})
        this.PiTM = PITM;
    }

    _wssHandleUpgrade(req,socket,header){
        debug_log(req);
        debug_log(socket);
        debug_log(header);
    }

    _httpsUpgrade(req,socket,header){
        this.wss.handleUpgrade(this._wssHandleUpgrade);
    }

    _heartbeat(){
        this.isAlive = true;
        return;
    }

    _onConnection(ws){
        ws.isAlive = true;
        return;
    }

    _onMessage(message){
        ws.isAlive = true;
        return;
    }

    _onError(error){
        error_log(error);
        return;
    }

    _onPong(){
        this._heartbeat();
        return;
    }

    // Pass the https servers to use
    Start(https){
        debug_log(https);
        this.https = https;
        this.wss.on('connection',this._onConnection);
        this.wss.on('message',this._onMessage);
        this.wss.on('error',this._onError);
        this.wss.on('message',this._onMessage);
        https.on('upgrade',this._httpsUpgrade);

        if(!this.PiTM.PiTM_Running){
            this.PiTM.Start();
        }

        this.PiTM.NetworkTimeServiceEmitter.on('PITM',(PITM)=>{
            debug_log("WSS got PITM",PITM);
        });
    }

    Stop(){
    }
}