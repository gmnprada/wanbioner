/*
***** THIS FILE IS PART OF Piwan Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

*/

export class ControlPacket {
    constructor() {
        this.packet = Buffer.alloc(8).fill(0);
        this.packet.write("ΠWN", "utf-8");
    }

    DoOpcodeUdpStart() {
        //opc
        this.packet[5] = OPCODE_CONTROL_UDP_START;
        this.packet[6] = 0x85;
        this.packet[7] = 0x68;
        this.packet[8] = 0x80;
        console.log(this.packet);
        console.log(this.packet.toString('utf-8'));
    }
}