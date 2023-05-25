/*
***** THIS FILE IS PART OF Wanbioner Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

Focus 
- Determine what a garbage load of shits means (just joking)
- Define the Abbreviation and link into documentation on official source
- Cross Compability int big shoulder we rely on for building the protocol on top of it
*/

// Protocol Identifier Size
export const PROTOCOL_USIZE = 3;

//!experimental should link into the valid definition on the wiki , books , or official project domain and resource if its not linkable means its common words in dictionary
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