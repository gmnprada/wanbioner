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
        this.packet.write("WBON", "utf-8");
    }
}