/*
***** THIS FILE IS PART OF Wanbioner Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

Focus
- Implement Universal Header Definition preferable from UNICODE specification and standard as anchor of symbol source of truth and keycode

Usage on Safe or Unsafe

- Safe is used when we prioritize data safety,precision,security on host machine that run with various environment with other program (Shared Host Machine) the environment of running program cannot be trusted
- Unsafe is used when we prioritize over speed and latency where the environment and behavior of running program and node is well guarded an throughly tested (your own machine and private network)
*/

// Header 1 Lenght Size 
// Compression Level in Bit/Qubit/Numbering System Encoding Compression Size (Only Machine Code Readable) and must be encode / decode / transformed through application, machine or , algorithm
// Extreme Compression Level see WBLC for specific usage
// To Be Determined on docs for the implementation
export const HEADER_SIZE   = 1;

// Header 2 Character ASCII Abbreviation Compression
// Human Readable Compressed by Shortening Char into Abbreviation 
// High Compression Level
export const HEADER_SIZE_2 = 2;

// Safe Implementation in memory for 2 character length of Wanbioner | WB
export const HEADER_WB_S = Buffer.alloc(HEADER_SIZE_2).write("WB");
// Safe Implementation in memory for 2 character length of Wanbioner Core Common | WC
export const HEADER_WC_S = Buffer.alloc(HEADER_SIZE_2).write("WC");
// Safe Implementation in memory for 2 character length of Wanbioner Time Message | WT
export const HEADER_WT_S = Buffer.alloc(HEADER_SIZE_2).write("WT");

// Header 3 Character ASCII Abbreviation Compression
// Human Readable Compressed by Shortening Char into Abbreviation 
// Normal Compression Level
export const HEADER_SIZE_3 = 3;
// Safe Implementation in memory for 3 character length of Wanbioner | WBR
export const HEADER_WBR_S = Buffer.alloc(HEADER_SIZE_3).write("WBR");
// Safe Implementation in memory for 3 character length of Wanbioner Core Common  | WCC
export const HEADER_WCC_S = Buffer.alloc(HEADER_SIZE_3).write("WCC");
// Safe Implementation in memory for 3 character length of Wanbioner Time Message | WTE
export const HEADER_WTE_S = Buffer.alloc(HEADER_SIZE_3).write("WTE");
// Unsafe Implementation in memory for 3 character length of Wanbioner | WBR
export const HEADER_WBR   = Buffer.allocUnsafe(HEADER_SIZE_3).write("WBR");
// Unsafe Implementation in memory for 3 character length of Wanbioner Core Common   | WCC
export const HEADER_WCC   = Buffer.allocUnsafe(HEADER_SIZE_3).write("WCC");
// Unsafe Implementation in memory for 3 character length of Wanbioner Time Message | WTE
export const HEADER_WTE   = Buffer.allocUnsafe(HEADER_SIZE_3).write("WTE");

// Header 4 Character ASCII Abbreviation Compression
// Human Readable Compressed by Shortening Char into Abbreviation 
// Low Compression Level also used as Program Name , Dependency Or Library Name
export const HEADER_SIZE_4 = 4;
// Safe Implementation in memory for Wanbioner | WBON
export const HEADER_WBON_S = Buffer.alloc(HEADER_SIZE_4).write("WBON");
// Safe Implementation in memory for Wanbioner Common Core | WBCC
export const HEADER_WBCC_S = Buffer.alloc(HEADER_SIZE_4).write("WBCC");
// Safe Implementation in memory for Wanbioner Time Message | WBTM
export const HEADER_WBTM_S = Buffer.alloc(HEADER_SIZE_4).write("WBTM");
// !experimental Safe Implementation in memory for Wanbioner Text Transport Protocol | WBTP 
export const HEADER_WBTP_S = Buffer.alloc(HEADER_SIZE_4).write("WBTP");

// Unsafe Implementation in memory this is needed if we priotize latency and the environment is well guarded
// Wanbioner | WBON
export const HEADER_WBON = Buffer.allocUnsafe(HEADER_SIZE_4).write("WBON");
// Wanbioner Core Common  | WBCC
export const HEADER_WBCC = Buffer.allocUnsafe(HEADER_SIZE_4).write("WBCC");
// Wanbioner Time Message | WBTM 
export const HEADER_WBTM = Buffer.allocUnsafe(HEADER_SIZE_4).write("WBTM");
//!experimental Wanbioner Text Transport Protocol | WBTP 
export const HEADER_WBTP = Buffer.allocUnsafe(HEADER_SIZE_4).write("WBTP");

// this look up table should implemented according to /docs/README,md
// Arrange the compression level according Definitions > Compressed Form 
// Raw Sentence Definition | 4 Length Char | 3 Length Char | 2 Length Char 
// enforce to return string as human readable format
export const HEADER_KEYWORD_LOOKUP_TABLE = [
    ["Wanbioner","WBON","WBR","WB"],
    ["Wanbioner Core Common" ,"WBCC","WCC","WC"],
    ["Wanbioner Time Message","WBTM","WTE","WT"]
]

// Format | Raw Sentence | 4 Char Bit | 3 Char Bit | 2 Char Bit | Bytes or bit raw data Big Endian and Little Endian in binary
// enforce return data in number or encoding format (binary, octal , hex ) on either big endian or little endian format by wform util
export const HEADER_MACHINE_CODE_UNSAFE = [
    ["Wanbioner",HEADER_WBON, HEADER_WBR,HEADER_WB],
    ["Wanbioner Core Common",HEADER_WBCC,HEADER_WCC,HEADER_WC],
    ["Wanbioner Time Mesage"]
]