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
    OPCODE IS self explanotory its means Operation Code its only numeric number base 10!

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
    we use base 10 number here cause every opcode need to be documented later in the docs
    what is the opcode efficient method to do it , what kinds of operation its perform
    variable naming of the opcode must clear exactly to the focus of the job or micro task also!
*/

// determine the size must be u8 1 bytes 8 bit
export const OPCODE_USIZE = 1;

// PITM COMMUNICATION OPCODE 0-9 Reserve decimal opcode
export const OPCODE_PITM_PING = 0;  // Ping Arounds by saying PING means node alive code 0
export const OPCODE_PITM_FLIGHT = 1;  // Flight and broadcast around   Fill T0
export const OPCODE_PITM_FLIGHT_RECEIVED = 2;  // Receive packet from around    Fill T1
export const OPCODE_PITM_FLIGHT_BACK = 3;  // Send packet back from around  Fill T2
export const OPCODE_PITM_FLIGHT_AUDIT = 4;  // Fill T3 count and measure then Fill Data of TTL, DELTA , THETA , RTT , LATENCY , HOST , PEER , SCAN , NET
export const OPCODE_PITM_ADD = 5;  // A Add    something [address,ip,mac,serial,hostname,domain]
export const OPCODE_PITM_DEL = 6;  // D Delete something [address,ip,mac,serial,hostname,domain]
export const OPCODE_PITM_MUT = 7;  // M Mutate something [address,ip,mac,serial,hostname,domain]
export const OPCODE_PITM_STA = 8;  // S Stamp  something [address,ip,mac,serial,hostname,domain]
export const OPCODE_PITM_PONG = 9;  // Pong Back by saying PONG means there is someone code 9

// OPCODE OF Piwan CONTROL PANEL MESSAGE Reserve 10-19 decimal number 
export const OPCODE_PWAN_CTRL_AUTH = 10;
export const OPCODE_PWAN_CTRL_START = 11;
export const OPCODE_PWAN_CTRL_STOP = 12;
export const OPCODE_PWAN_CTRL_SYNC = 13;
export const OPCODE_PWAN_CTRL_MONITOR = 14;
export const OPCODE_PWAN_CTRL_AUDITOR = 15;
export const OPCODE_PWAN_CTRL_EXEC = 16;
export const OPCODE_PWAN_CTRL_KILL = 17;
export const OPCODE_PWAN_CTRL_REBOOT = 18;
export const OPCODE_PWAN_CTRL_QUIT = 19;

// OPCODE OF PiWAN Protocol Reserve 20-39 decimal number according to step how its was performed
export const OPCODE_PWAN_FORM = 20;
export const OPCODE_PWAN_ENCODE = 21;
export const OPCODE_PWAN_COMPRESS = 22;

export const OPCODE_PWAN_READ = 23;
export const OPCODE_PWAN_MUTATE = 24;
export const OPCODE_PWAN_STAMP = 25;

export const OPCODE_PWAN_SIGN = 26;
export const OPCODE_PWAN_FLIGHT = 27;
export const OPCODE_PWAN_INTERMEDIATE = 28;

export const OPCODE_PWAN_RECEIVE = 29;
export const OPCODE_PWAN_UNCOMPRESS = 30;
export const OPCODE_PWAN_AUDIT = 31;

export const OPCODE_PWAN_DECODE = 32;
export const OPCODE_PWAN_DEFORM = 33;
export const OPCODE_PWAN_ACKNOWLEDGE = 34;

// OPCODE Of Piwan Text Transport Protocol its reserve decimal number of 40-59
export const OPCODE_PWAN_TTP_CONNECT = 40;
export const OPCODE_PWAN_TTP_SYN = 41;
export const OPCODE_PWAN_TTP_ACK = 42;

export const OPCODE_PWAN_TTP_SOT = 43;
export const OPCODE_PWAN_TTP_STX = 44;
export const OPCODE_PWAN_TTP_EOT = 45;

export const OPCODE_PWAN_TTP_SUB = 46;
export const OPCODE_PWAN_TTP_PUB = 47;
export const OPCODE_PWAN_TTP_CANCEL = 48;

export const OPCODE_PWAN_TTP_HOST = 49;


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
    OPCODE_PITM_PONG,
    OPCODE_PWAN_CTRL_AUTH,
    OPCODE_PWAN_CTRL_START,
    OPCODE_PWAN_CTRL_STOP,
    OPCODE_PWAN_CTRL_SYNC,
    OPCODE_PWAN_CTRL_MONITOR,
    OPCODE_PWAN_CTRL_AUDITOR,
    OPCODE_PWAN_CTRL_EXEC,
    OPCODE_PWAN_CTRL_KILL,
    OPCODE_PWAN_CTRL_REBOOT,
    OPCODE_PWAN_CTRL_QUIT,
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
    OPCODE_PWAN_ACKNOWLEDGE,
    OPCODE_PWAN_TTP_CONNECT,
    OPCODE_PWAN_TTP_SYN,
    OPCODE_PWAN_TTP_ACK,
    OPCODE_PWAN_TTP_SOT,
    OPCODE_PWAN_TTP_STX,
    OPCODE_PWAN_TTP_EOT,
    OPCODE_PWAN_TTP_SUB,
    OPCODE_PWAN_TTP_PUB,
    OPCODE_PWAN_TTP_CANCEL,
    OPCODE_PWAN_TTP_HOST
}