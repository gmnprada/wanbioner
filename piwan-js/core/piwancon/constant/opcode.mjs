/*
***** THIS FILE IS PART OF Piwan Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

*/

/*  
    Introduction 
    OPCODE IS self explanotory its means Operation Code its only numeric number do not cross code it with hex although it written on hex format

    The Golden Rule of Operation is 0 3 6 9
    if its cannot complete the core operation in % 3 opcode or
    under 10 step the procedure and operation has too many step
    1 step usually is optional for the operation to be performed but it must be there for 
    observer , monitor , auditor , encyrption and security purpose
    optional step operation must not affecting other machine on the networks

    as example of opcode PONG in pitm , another example of opcode QUIT on Piwan CTRL

    consider to reduce the step of perfoming core process on pid if its not complete on 9 step and 1 optional step

    the documentation of opcode is important for agreement on same symbol we use to do operation
    do not use same symbol on the opcode to avoid confusion between interacting system on the wire

    this opcode should and must be universal without
    agreeing on specific protocol implementation or programming language implementation

    do not include any authentication as its depends on specific implementation on each platform
    do not include encryption layer as it must be specific for each encryption or decryption method based on implementation on security layer
    do not include any transport protocol layer operation as its already defined in next 3 bytes of protocol used underlying

    opcode should be performed on data signaling , scan,  creation , mutation , deletion , stamp, sign , queue , telemetry , resolve
*/

// determine the size must be u8 1 bytes 8 bit
const OPCODE_USIZE = 1;

// PITM COMMUNICATION OPCODE 0-9 Reserve decimal opcode
export const OPCODE_PITM_PING = 0x00;  // Ping Arounds by saying PING means node alive code 0
export const OPCODE_PITM_FLIGHT = 0x01;  // Flight and broadcast around   Fill T0
export const OPCODE_PITM_FLIGHT_RECEIVED = 0x02;  // Receive packet from around    Fill T1
export const OPCODE_PITM_FLIGHT_BACK = 0x03;  // Send packet back from around  Fill T2
export const OPCODE_PITM_FLIGHT_AUDIT = 0x04;  // Fill T3 count and measure then Fill Data of TTL, DELTA , THETA , RTT , LATENCY , HOST , PEER , SCAN , NET
export const OPCODE_PITM_ADD = 0x05;  // A Add    something [address,ip,mac,serial,hostname,domain]
export const OPCODE_PITM_DEL = 0x06;  // D Delete something [address,ip,mac,serial,hostname,domain]
export const OPCODE_PITM_MUT = 0x07;  // M Mutate something [address,ip,mac,serial,hostname,domain]
export const OPCODE_PITM_STA = 0x08;  // S Stamp  something [address,ip,mac,serial,hostname,domain]
export const OPCODE_PITM_PONG = 0x09;  // Pong Back by saying PONG means there is someone code 9

// OPCODE OF Piwan CONTROL PANEL MESSAGE Reserve 10-19 decimal number 
const OPCODE_PWAN_CTRL_AUTH = 0x10;
const OPCODE_PWAN_CTRL_START = 0x11;
const OPCODE_PWAN_CTRL_STOP = 0x12;
const OPCODE_PWAN_CTRL_SYNC = 0x13;
const OPCODE_PWAN_CTRL_MONITOR = 0x14;
const OPCODE_PWAN_CTRL_AUDITOR = 0x15;
const OPCODE_PWAN_CTRL_EXEC = 0x16;
const OPCODE_PWAN_CTRL_KILL = 0x17;
const OPCODE_PWAN_CTRL_REBOOT = 0x18;
const OPCODE_PWAN_CTRL_QUIT = 0x19;

// OPCODE OF PiWAN Protocol Reserve 20-39 decimal number according to step how its was performed
const OPCODE_PWAN_FORM = 0x20;
const OPCODE_PWAN_ENCODE = 0x21;
const OPCODE_PWAN_COMPRESS = 0x22;

const OPCODE_PWAN_READ = 0x23;
const OPCODE_PWAN_MUTATE = 0x24;
const OPCODE_PWAN_STAMP = 0x25;

const OPCODE_PWAN_SIGN = 0x26;
const OPCODE_PWAN_FLIGHT = 0x27;
const OPCODE_PWAN_INTERMEDIATE = 0x28;

const OPCODE_PWAN_RECEIVE = 0x29;
const OPCODE_PWAN_UNCOMPRESS = 0x30;
const OPCODE_PWAN_AUDIT = 0x31;

const OPCODE_PWAN_DECODE = 0x32;
const OPCODE_PWAN_DEFORM = 0x33;
const OPCODE_PWAN_ACKNOWLEDGE = 0x34;

// OPCODE Of Piwan Text Transport Protocol its reserve decimal number of 40-59
const OPCODE_PWAN_TTP_CONNECT = 0x40;
const OPCODE_PWAN_TTP_SYN = 0x41;
const OPCODE_PWAN_TTP_ACK = 0x42;

const OPCODE_PWAN_TTP_SOT = 0x43;
const OPCODE_PWAN_TTP_STX = 0x44;
const OPCODE_PWAN_TTP_EOT = 0x45;

const OPCODE_PWAN_TTP_SUB = 0x46;
const OPCODE_PWAN_TTP_PUB = 0x47;
const OPCODE_PWAN_TTP_CANCEL = 0x48;

const OPCODE_PWAN_TTP_HOST = 0x49;

// For PITM underlying of Wide Area Network forming
const OPCODE_PITM = {
    OPCODE_PITM_PING,
    OPCODE_PITM_FLIGHT,
    OPCODE_PITM_FLIGHT_RECEIVED,
    OPCODE_PITM_FLIGHT_BACK,
    OPCODE_PITM_FLIGHT_AUDIT,
    OPCODE_PITM_ADD,
    OPCODE_PITM_DEL,
    OPCODE_PITM_MUT,
    OPCODE_PITM_STA,
    OPCODE_PITM_PONG
}

// For Piwan Control underlying of Web Control Panel To manage pid of piwan node
const OPCODE_PWAN_CTRL = {
    OPCODE_PWAN_CTRL_AUTH,
    OPCODE_PWAN_CTRL_START,
    OPCODE_PWAN_CTRL_STOP,
    OPCODE_PWAN_CTRL_SYNC,
    OPCODE_PWAN_CTRL_MONITOR,
    OPCODE_PWAN_CTRL_AUDITOR,
    OPCODE_PWAN_CTRL_EXEC,
    OPCODE_PWAN_CTRL_KILL,
    OPCODE_PWAN_CTRL_REBOOT,
    OPCODE_PWAN_CTRL_QUIT
}

const OPCODE_PWAN = {
    OPCODE_PWAN_FORM,
    OPCODE_PWAN_ENCODE,
    OPCODE_PWAN_COMPRESS,
    OPCODE_PWAN_READ,
    OPCODE_PWAN_MUTATE,
    OPCODE_PWAN_STAMP,
    OPCODE_PWAN_SIGN,
    OPCODE_PWAN_FLIGHT,
    OPCODE_PWAN_INTERMEDIATE,
    OPCODE_PWAN_RECEIVE,
    OPCODE_PWAN_UNCOMPRESS,
    OPCODE_PWAN_AUDIT,
    OPCODE_PWAN_DECODE,
    OPCODE_PWAN_DEFORM,
    OPCODE_PWAN_ACKNOWLEDGE
}

export default { 
    OPCODE_USIZE,
    OPCODE_PITM_PING,
    OPCODE_PITM_FLIGHT,
    OPCODE_PITM_FLIGHT_RECEIVED,
    OPCODE_PITM_FLIGHT_BACK,
    OPCODE_PITM_FLIGHT_AUDIT,
    OPCODE_PITM_ADD,
    OPCODE_PITM_DEL,
    OPCODE_PITM_MUT,
    OPCODE_PITM_STA,
    OPCODE_PITM_PONG
}