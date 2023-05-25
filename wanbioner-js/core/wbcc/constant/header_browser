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
- make a browser compatible data view header
*/

// Header 1 Length Size
export const HEADER_SIZE = 1;

// Header 2 Character ASCII Abbreviation Compression
export const HEADER_SIZE_2 = 2;

export const HEADER_WB_S = new Uint8Array([0x57, 0x42]); // WB
export const HEADER_WC_S = new Uint8Array([0x57, 0x43]); // WC
export const HEADER_WT_S = new Uint8Array([0x57, 0x54]); // WT

// Header 3 Character ASCII Abbreviation Compression
export const HEADER_SIZE_3 = 3;
export const HEADER_WBR = new Uint8Array([0x57, 0x42, 0x52]); // WBR
export const HEADER_WCC = new Uint8Array([0x57, 0x43, 0x43]); // WCC
export const HEADER_WTE = new Uint8Array([0x57, 0x54, 0x45]); // WTE

// Header 4 Character ASCII Abbreviation Compression
export const HEADER_SIZE_4 = 4;
export const HEADER_WBON = new Uint8Array([0x57, 0x42, 0x4F, 0x4E]); // WBON
export const HEADER_WBCC = new Uint8Array([0x57, 0x42, 0x43, 0x43]); // WBCC
export const HEADER_WBTM = new Uint8Array([0x57, 0x42, 0x54, 0x4D]); // WBTM
export const HEADER_WBTP = new Uint8Array([0x57, 0x42, 0x54, 0x50]); // WBTP

export const HEADER_KEYWORD_LOOKUP_TABLE = [
    ["Wanbioner", "WBON", "WBR", "WB"],
    ["Wanbioner Core Common", "WBCC", "WCC", "WC"],
    ["Wanbioner Time Message", "WBTM", "WTE", "WT"]
];

export const HEADER_MACHINE_CODE_UNSAFE = [
    ["Wanbioner", HEADER_WBON, HEADER_WBR, HEADER_WB],
    ["Wanbioner Core Common", HEADER_WBCC, HEADER_WCC, HEADER_WC],
    ["Wanbioner Time Message"]
];
