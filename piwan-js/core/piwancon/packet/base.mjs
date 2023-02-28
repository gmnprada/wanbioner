/*
***** THIS FILE IS PART OF Piwan Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

*/

import os from 'node:os';
import { Buffer } from 'node:buffer';
import { xxHash32 } from 'js-xxhash';
import { compress, uncompress } from 'snappy';
import PITM from '../../pitm/pitm.mjs';

var time_now = BigInt(new Date().getTime());
PITM.NetworkTimeServiceEmitter.on('unixsync', (ut) => {
    time_now = ut;
});

export class BasePacket {
    constructor(appid = "πWN", data = [0x00], r_hostname = "", r_timeout = 1, c_ipv4 = "", c_ipv6 = "", r_ipv4 = "", r_ipv6 = "") {
        //ΠWN Wide Network CAST
        this.header = Buffer.from("πWN");
        // This Needed for chain of computation opcode state 
        this.p_opcode = Buffer.from([OPCODE_CONSTRUCT]);
        // reserved
        this.p_reserved = Buffer.from([0x00, 0x00, 0x00]);
        // ipv4 ,ipv6 , hostname of the clients
        this.requester = Buffer.alloc(120);
        this.requester.write(os.hostname(), 64);
        // ipv4 ,ipv6 , the recipient they want to transport
        this.recipient = Buffer.alloc(120);
        this.recipient.write(r_hostname, 64);
        // ipv4 ,ipv6 we didnt know who is the host will transport our packet in time
        this.intermediate = Buffer.alloc(120);
        // PROMISE REQUEST , Promise Client its delivered in this TIMEOUT
        this.p_timeout = Buffer.alloc(8);
        this.p_timeout.writeBigUInt64LE(BigInt(r_timeout), 0);
        // TimeStamp by client the flight time
        this.p_flight_time = Buffer.alloc(8);
        // Timestamp by intermediate the delivered Time
        this.p_intermediate_time = Buffer.alloc(8);
        // Timestamp by recipient The received Time
        this.p_received_time = Buffer.alloc(8);
        // Boolean Timestamp audit the results
        this.p_auditor = Buffer.alloc(1);
        this.p_auditor.writeInt8(0);
        // did not know what will be the identifier package name of APPS or we will just put application hash
        this.appid = Buffer.alloc(64);
        this.appid.copy(Buffer.from(appid));
        // variable length of data packet
        this.dataLength = Buffer.alloc(8);
        this.dataLength.writeBigUInt64LE(BigInt(data.length));
        // data packet
        this.data = Buffer.from(data);

        // only completed packet belong here
        this.packet = null;
    }

    /*
        Once Encoded a Packet cause we already timestamp it here
    */
    async Encode() {
        this.p_opcode.writeUInt8(OPCODE_ENCODE, 0);
        this.p_flight_time.writeBigUInt64LE(BigInt(time_now));
        let t_calc = BigInt(this.p_timeout.readBigUInt64LE(0)) + BigInt(time_now);
        this.p_timeout.writeBigUint64LE(t_calc, 0);
        let buf = Buffer.concat([
            this.header, // 4 Bytes
            this.p_opcode, //1 Bytes
            this.p_reserved, //3 Bytes
            this.requester, //120 Bytes Max 56 first is ip identifier , 64 rest hostname client
            this.recipient, //120 Bytes Max 56 first is ip identifier , 64 rest hostname recipient
            this.intermediate, //120 Bytes Max 56 first is ip identifier , 64 rest hostname intermediate
            this.p_timeout, // 8 bytes
            this.p_flight_time, // 8 bytes
            this.p_intermediate_time, // 8 bytes
            this.p_received_time, // 8 bytes
            this.p_auditor, // 1 bytes
            this.appid, // 64 bytes
            this.dataLength,
            this.data,
        ]);
        let hash = xxHash32(Buffer.from(buf, 'utf-8'), 0);
        let bufhash = Buffer.alloc(4);
        bufhash.writeUInt32LE(hash);
        this.packet = Buffer.concat([buf, bufhash]);
        return this.packet;
    }

    /*
        Once Encoded Compress The Packet
    */
    async Compress() {
        if (this.packet == null) throw Error("Packet did not arrange yet do you already run Encode?");
        let c = await compress(this.packet);
        return c;
    }

    /*
        Once Arrived Uncompress The Packet
    */
    async Uncompress(packet_buffer) {
        if (this.packet != null) {
            this.packet = null;
        }
        let u = await uncompress(packet_buffer);
        this.packet = u;
        return u;
    }

    /*
        Once Uncompress Decode The Packet and Stamp
    */
    async Decode(base_packet) {
        
    }
}