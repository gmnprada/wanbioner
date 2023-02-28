
// 16Kbps / tick
const udpMaxBufferSize = 65535;

export default class PiwanWSC extends EventEmitter {

    #piwanBuffer = new Array(udpMaxBufferSize);
    constructor(url) {
        this.url = url;
        this.connect(url);
    }

    connect(url) {
        this.wsc = new WebSocket(this.url, 'binary');
        this.wsc.binaryType = 'arrayBuffer';
        this.socket.addEventListener('error', this.onError.bind(this));
        this.socket.addEventListener('open', this.onOpen.bind(this));
        this.socket.addEventListener('close', this.onClose.bind(this));
        this.socket.addEventListener('message', this.onMessage.bind(this));

    }

    async onOpen(event) {
        const uid = sessionStorage.getItem('uid');
        if (!uid) {
            console.log("This Client did not has uid yet");
        }
    }

    async onError(event) {
        console.error(event);
        this.emit('error',event);
    }

    async onMessage(event) {
        const buffer = new Uint8Array(event.data);

        // push every bytes into array
        for(let bytes of buffer){
            this.#piwanBuffer.push(bytes);
        }

        
        this.emit('message', queuedBytes)
    }

    async onClose(event) {
        if (this.wsc.readyState === 1) {
            this.wsc.close();
        }

        this.emit('close', event);
        this.connect();
    }
}