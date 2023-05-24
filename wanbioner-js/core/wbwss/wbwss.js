import { WebSocketServer } from 'ws';
import PITM from '../pitm/pitm.mjs';
import { error_log, info_log } from '../../log.mjs';


export default class WBWSS extends WebSocketServer {
    #now;
    constructor() {
        super({ noServer: true, clientTracking: true, backlog: 65535 });
        this.on('connection', this._wssOnConnection);
        this.on('message', this._wssOnMessage);
        this.on('error', this._wssOnError);
        this.on('close', this._wssOnClose);
        this.on('headers', this._wssOnHeaders)

        // Burst The WSC Client With TimeStamp Packet
        PITM.Service.on('pitmsync', (buf) => {
            if (buf instanceof Buffer) {
                this.#now = buf.readBigUint64LE(8);

                this.clients.forEach((wsc) => {
                    if (wsc.readyState == ws.OPEN) {
                        wsc.send(buf, (err) => {
                            if (err) {
                                error_log(`Wss send to ${ws.url} Failed`, err);
                            }
                        });
                    }

                });
            }

        });
    }


    _wscHeartbeat() {
        this.isAlive = true;
        return;
    }

    _wscOnPong() {
        this._heartbeat();
        return;
    }


    _wssOnHeaders(){
        return;
    }

    _wssOnConnection(wsc) {
        return;
    }

    _wssOnClose() {
        info_log(`wss server closing`);
        return;
    }


    _wssOnMessage(message) {
        info_log(`Got Message from ws client`, message);
        return;
    }

    _wssOnError(error) {
        error_log(error);
        return;
    }
}