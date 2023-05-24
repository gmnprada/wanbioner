/*
***** THIS FILE IS PART OF Wanbioner Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

*/

// Header Byte Compression or Bit Encoding Compression Size (Only Machine Code Readable) and must be encode / decode / transformed within application
export const HEADER_SIZE   = 1;

// Header High Char Compression 2 Character ASCII (Human Readable Compressed by Shorter Char)
export const HEADER_SIZE_2 = 2;

// Header Normal Char Compression 3 Character ASCII (Human Readable Compressed by Shorter Char)
export const HEADER_SIZE_3 = 3;


// Safe Implementation in memory for 3 character length of Wanbioner 
export const HEADER_WBR = Buffer.alloc(HEADER_SIZE_3).write("WBR");
// Safe Implementation in memory for 3 character length of Wanbioner Time Message 
export const HEADER_WTE = Buffer.alloc(HEADER_SIZE_3).write("WTE");
// 


// Header Size 4 Character ASCII
export const HEADER_SIZE_4 = 4;

// Safe Implementation in memory this is needed if we re on strict environment and prioritize data safety
export const HEADER_WBON_S = Buffer.alloc(HEADER_SIZE_4).write("WBON");
export const HEADER_WBCC_S = Buffer.alloc(HEADER_SIZE_4).write("WBCC");
export const HEADER_WBTM_S = Buffer.alloc(HEADER_SIZE_4).write("WBTM");
export const HEADER_WBTP_S = Buffer.alloc(HEADER_SIZE_4).write("WBTP");

// Unsafe Implementation in memory this is needed if we priotize latency and the environment is well guarded
// Wanbioner | WBON
export const HEADER_WBON = Buffer.allocUnsafe(HEADER_SIZE_4).write("WBON");
// Wanbioner Core Common  | WBCC
export const HEADER_WBCC = Buffer.allocUnsafe(HEADER_SIZE_4).write("WBCC");
// Wanbioner Time Message | WBTM 
export const HEADER_WBTM = Buffer.allocUnsafe(HEADER_SIZE_4).write("WBTM");
//!experimental Wanbioner Text Transport Protocol | WBTP | (Not Officialy in Docs Yet);
export const HEADER_WBTP = Buffer.allocUnsafe(HEADER_SIZE_4).write("WBTP");

export const HEADER_LOOKUP_TABLES = [
    ["Wanbioner","WBON","WBR","WB"],
    ["Wanbioner Core Common","WBCC","WCC",]
    ["Wanbioner Time Message","WBTM","WTE",""],
    [""]
]