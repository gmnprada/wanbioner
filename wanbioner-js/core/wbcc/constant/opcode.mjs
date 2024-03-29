/*
***** THIS FILE IS PART OF Wanbioner Project *****

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

    as example of opcode PONG in pitm , another example of opcode QUIT on Wanbioner CTRL

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

// Opcode Of Wanbioner Time Message 0-9 Reserve decimal opcode
export const OPCODE_WBTM_PING = 0;    // Ping Arounds by saying PING means node alive code 0
export const OPCODE_WBTM_FLIGHT = 1;  // Flight and broadcast around   Fill T0
export const OPCODE_WBTM_FLIGHT_RECEIVED = 2;  // Receive packet from around Fill T1
export const OPCODE_WBTM_FLIGHT_BACK = 3;  // Send packet back from around  Fill T2
export const OPCODE_WBTM_FLIGHT_AUDIT = 4;  // Fill T3 count and measure then Fill Data of TTL, DELTA , THETA , RTT , LATENCY , HOST , PEER , SCAN , NET
export const OPCODE_WBTM_ADD = 5;  // A Add    something [address,ip,mac,serial,hostname,domain]
export const OPCODE_WBTM_DEL = 6;  // D Delete something [address,ip,mac,serial,hostname,domain]
export const OPCODE_WBTM_MUT = 7;  // M Mutate something [address,ip,mac,serial,hostname,domain]
export const OPCODE_WBTM_STA = 8;  // S Stamp  something [address,ip,mac,serial,hostname,domain]
export const OPCODE_WBTM_PONG = 9;  // Pong Back by saying PONG means there is someone code 9

// OPCODE OF Wanbioner Control Panel MESSAGE Reserve 10-19 decimal number 
export const OPCODE_WBON_CTRL_AUTH = 10;
export const OPCODE_WBON_CTRL_START = 11;
export const OPCODE_WBON_CTRL_STOP = 12;
export const OPCODE_WBON_CTRL_SYNC = 13;
export const OPCODE_WBON_CTRL_MONITOR = 14;
export const OPCODE_WBON_CTRL_AUDITOR = 15;
export const OPCODE_WBON_CTRL_EXEC = 16;
export const OPCODE_WBON_CTRL_KILL = 17;
export const OPCODE_WBON_CTRL_REBOOT = 18;
export const OPCODE_WBON_CTRL_QUIT = 19;

// OPCODE OF Wanbioner Protocol Reserve 20-39 decimal number according to step how its was performed
export const OPCODE_WBON_FORM = 20;
export const OPCODE_WBON_ENCODE = 21;
export const OPCODE_WBON_COMPRESS = 22;

export const OPCODE_WBON_READ = 23;
export const OPCODE_WBON_MUTATE = 24;
export const OPCODE_WBON_STAMP = 25;

export const OPCODE_WBON_SIGN = 26;
export const OPCODE_WBON_FLIGHT = 27;
export const OPCODE_WBON_INTERMEDIATE = 28;

export const OPCODE_WBON_RECEIVE = 29;
export const OPCODE_WBON_UNCOMPRESS = 30;
export const OPCODE_WBON_AUDIT = 31;

export const OPCODE_WBON_DECODE = 32;
export const OPCODE_WBON_DEFORM = 33;
export const OPCODE_WBON_ACKNOWLEDGE = 34;

// OPCODE Of Wanbioner Text Transport Protocol its reserve decimal number of 40-59
export const OPCODE_WBTP_CONNECT = 40;
export const OPCODE_WBTP_SYN = 41;
export const OPCODE_WBTP_ACK = 42;
export const OPCODE_WBTP_SOT = 43;
export const OPCODE_WBTP_STX = 44;
export const OPCODE_WBTP_EOT = 45;
export const OPCODE_WBTP_SUB = 46;
export const OPCODE_WBTP_PUB = 47;
export const OPCODE_WBTP_CANCEL = 48;
export const OPCODE_WBTP_HOST = 49;


export default {
    OPCODE_USIZE,
    OPCODE_WBTM_PING,
    OPCODE_WBTM_FLIGHT,
    OPCODE_WBTM_FLIGHT_RECEIVED,
    OPCODE_WBTM_FLIGHT_BACK,
    OPCODE_WBTM_FLIGHT_AUDIT,
    OPCODE_WBTM_ADD,
    OPCODE_WBTM_DEL,
    OPCODE_WBTM_MUT,
    OPCODE_WBTM_STA,
    OPCODE_WBTM_PONG,
    OPCODE_WBON_CTRL_AUTH,
    OPCODE_WBON_CTRL_START,
    OPCODE_WBON_CTRL_STOP,
    OPCODE_WBON_CTRL_SYNC,
    OPCODE_WBON_CTRL_MONITOR,
    OPCODE_WBON_CTRL_AUDITOR,
    OPCODE_WBON_CTRL_EXEC,
    OPCODE_WBON_CTRL_KILL,
    OPCODE_WBON_CTRL_REBOOT,
    OPCODE_WBON_CTRL_QUIT,
    OPCODE_WBON_FORM,
    OPCODE_WBON_ENCODE,
    OPCODE_WBON_COMPRESS,
    OPCODE_WBON_READ,
    OPCODE_WBON_MUTATE,
    OPCODE_WBON_STAMP,
    OPCODE_WBON_SIGN,
    OPCODE_WBON_FLIGHT,
    OPCODE_WBON_INTERMEDIATE,
    OPCODE_WBON_RECEIVE,
    OPCODE_WBON_UNCOMPRESS,
    OPCODE_WBON_AUDIT,
    OPCODE_WBON_DECODE,
    OPCODE_WBON_DEFORM,
    OPCODE_WBON_ACKNOWLEDGE,
    OPCODE_WBTP_CONNECT,
    OPCODE_WBTP_SYN,
    OPCODE_WBTP_ACK,
    OPCODE_WBTP_SOT,
    OPCODE_WBTP_STX,
    OPCODE_WBTP_EOT,
    OPCODE_WBTP_SUB,
    OPCODE_WBTP_PUB,
    OPCODE_WBTP_CANCEL,
    OPCODE_WBTP_HOST
}