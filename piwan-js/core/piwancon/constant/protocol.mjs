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
const PROTOCOL_USIZE = 3;

// HEADER Greek Small Leter PI  π , UNICODE DEC 960 , UTF8-DEC [207,128], UTF-8 Hex [0xCF,0x80] , T ASCII HEX [0x54] , M ASCII HEX [0x4D]
export const HEADER_PITM = Buffer.allocUnsafe(HEADER_USIZE).write("πTM");

// HEADER Greek Small Leter PI  π , UNICODE DEC 960 , UTF8-DEC [207,128], UTF-8 Hex [0xCF,0x80] , W ASCII HEX [0x57] , N ASCII HEX [0x4E]
export const HEADER_PWAN = Buffer.allocUnsafe(HEADER_USIZE).write("πWN");

export const HEADER_PTTP = Buffer.allocUnsafe(HEADER_USIZE).write("πTP");


// Underlying Transport Protocol Internal or Local machine available transport and allowed definition
export const PROTOCOL_INT_VALUE = [
    "RAW",
    "DEV",
    "NOP",
    "NUL",
    "MEM",
    "IPC",
    "SYS",
    "EVT",
    "WFS",
    "UFS",
    "LFS",
    "AFS",
    "XFS",
    "MFS",
    "BFS",
    "VFS",
    "CFS",
    "ZFS",
    "XFS",
    "SQL",
    "GQL",
    "UNK",
    "ANY"
]

export const PROTOCOL_RAW  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("RAW",'ascii');
export const PROTOCOL_DEV  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("DEV",'ascii');
export const PROTOCOL_NOP  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("NOP",'ascii');
export const PROTOCOL_NUL  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("NUL",'ascii');
export const PROTOCOL_MEM  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("MEM",'ascii');
export const PROTOCOL_IPC  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("IPC",'ascii');
export const PROTOCOL_SYS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("SYS",'ascii');
export const PROTOCOL_EVT  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("EVT",'ascii');
export const PROTOCOL_WFS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("WFS",'ascii');
export const PROTOCOL_UFS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("UFS",'ascii');
export const PROTOCOL_LFS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("LFS",'ascii');
export const PROTOCOL_AFS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("AFS",'ascii');
export const PROTOCOL_XFS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("XFS",'ascii');
export const PROTOCOL_MFS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("MFS",'ascii');
export const PROTOCOL_BFS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("BFS",'ascii');
export const PROTOCOL_VFS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("VFS",'ascii');
export const PROTOCOL_CFS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("CFS",'ascii');
export const PROTOCOL_ZFS  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("ZFS",'ascii');
export const PROTOCOL_SQL  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("SQL",'ascii');
export const PROTOCOL_GQL  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("GQL",'ascii');
export const PROTOCOL_UNK  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("UNK",'ascii');
export const PROTOCOL_ANY  = Buffer.allocUnsafe(PROTOCOL_USIZE).write("ANY",'ascii');


//Underlying Transport Over The Wire