/*
***** THIS FILE IS PART OF Piwan Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

*/

// Header Size
const HEADER_USIZE = 4;

// Protocol Identifier Size
const PROTO_USIZE = 3;

// HEADER Greek Small Leter PI  π , UNICODE DEC 960 , UTF8-DEC [207,128], UTF-8 Hex [0xCF,0x80] , T ASCII HEX [0x54] , M ASCII HEX [0x4D]
export const HEADER_PITM   = Buffer.allocUnsafe(HEADER_USIZE).write("πTM");

// HEADER Greek Small Leter PI  π , UNICODE DEC 960 , UTF8-DEC [207,128], UTF-8 Hex [0xCF,0x80] , W ASCII HEX [0x57] , N ASCII HEX [0x4E]
export const HEADER_PWAN   = Buffer.allocUnsafe(HEADER_USIZE).write("πWN");


// Underlying Transport Protocol Internal and Local machine available transport
export const PROTOCOL_RAW  = Buffer.allocUnsafe(PROTO_USIZE).write("RAW",'ascii');
export const PROTOCOL_NOP  = Buffer.allocUnsafe(PROTO_USIZE).write("NOP",'ascii');
export const PROTOCOL_NUL  = Buffer.allocUnsafe(PROTO_USIZE).write("NUL",'ascii');
export const PROTOCOL_MEM  = Buffer.allocUnsafe(PROTO_USIZE).write("MEM",'ascii');
export const PROTOCOL_IPC  = Buffer.allocUnsafe(PROTO_USIZE).write("IPC",'ascii');
export const PROTOCOL_SYS  = Buffer.allocUnsafe(PROTO_USIZE).write("SYS",'ascii');



//Underlying Transport Over The Wire;