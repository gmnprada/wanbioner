import { Buffer } from 'node:buffer';

class BasePacket{
    constructor(requester="",recipient="",ptimeout = 0.1,data=[]){
        this.header = "PIWAN";
        this.requester = requester;
        this.recipient = recipient;
        this.data = data;
        this.p_timeout = ptimeout; // PROMISE REQUEST , Promise Client its delivered in TIMEOUT
        this.p_flight_time = 0; // TimeStamp by client the flight time
        this.p_received_time = 0;  // TimeStamp by Host The Receive Time
        this.p_delivered = 0; // Timestamp by peers the delivered Time
        this.p_successflight = 0; // Compute the Timestamp if its <= ptimeout it counts as success
        this.p_status = 0; // This Needed for chain of computation opcode state 
        this.hash = "";//packet hash;
    }


    Encode(){
        let Buffer = Buffer.alloc(1024);
        let header = Buffer.from(this.header,'utf-8');
        let requester = Buffer.from(this.requester,'utf-8');
        let recipient = Buffer.from(this.recipient,'utf-8');

    }

    Decode(buffer){

    }

}