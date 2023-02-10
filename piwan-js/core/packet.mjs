import { Buffer } from 'node:buffer';
import {Client} from "ntp-time";
const ntp = new Client("time.google.com",123,{timeout:60});
const lastTime = 0;

async function syncTime(){
    try{
       await ntp.syncTime();
    }catch(err){
        console.log(err);
    }
}
syncTime().then(value=>{lastTime =value}).catch(e=>{
    console.log(err);
});

class BasePacket{
    constructor(appid="",requester="",recipient="",ptimeout = 1,data){
        this.header = Buffer.from("ΠWN"); //ΠWN Wide Network CAST
        this.p_opcode = [0x01]; // This Needed for chain of computation opcode state 
        this.p_reserved = [0x00,0x00,0x00]; // reserved
        this.requester = Buffer.alloc(128).write(requester,21,128); // ipv4 ,ipv6 , hostname of the clients
        this.recipient = Buffer.alloc(128).write(recipient,21,128); // ipv4 ,ipv6 , the recipient they want to transport
        this.intermediate = Buffer.alloc(128).write(0,21,128); //ipv4,ipv6 we didnt know who is the host will transport our packet in time
        this.p_timeout = Buffer.writeFloatLE(ptimeout,0); // PROMISE REQUEST , Promise Client its delivered in TIMEOUT
        this.p_flight_time =  Buffer.writeFloatLE(ptimeout,0); // TimeStamp by client the flight time
        this.p_intermediate_time = 0; // Timestamp by intermediate the delivered Time
        this.p_received_time = 0;  // TimeStamp by Host The received Time
        this.p_auditor = 0 // BOOLEAN of auditor if the packet delivered successfuly in time or not, auditor is multi node that verify transaction
        this.appid = Buffer.from(appid); // did not know what will be the identifier package name or just application hash
        this.hash = "";//all header and details hash to uniquely identify this packet before appended game packet;
        this.dataLength = 0; // u64 for asking how long is the packet data
        this.data = data; // the data
    }


    async Encode(){
        let Buffer = Buffer.from([
            this.header,
            this.p_opcode,
            this.p_reserved,
            this.requester,
            this.recipient,
            this.intermediate]);
    
    }

    async Decode(buffer){

    }

}