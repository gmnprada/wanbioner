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
    1 step usually is optional for the operation to be performed but it must be there for observer , monitor , auditor , encyrption and security purpose

    consider to reduce the step of perfoming process on pid if its not complete on 9 step and 1 optional step

    the documentation of opcode is important for agreement on same symbol we use to do operation
    do not use same symbol on the opcode to avoid confusion between interacting system on the wire

    this opcode should must be universal without
    agreeing on specific protocol implementation or programming language implementation

    do not include any authentication as its depends on specific implementation on each platform
    do not include encryption layer as it must be specific for each encryption or decryption method based on implementation on security layer
    do not include any transport protocol layer operation as its already defined in next 3 bytes of protocol used underlying
*/

// determine the size must be u8 1 bytes 8 bit
export const OPCODE_USIZE = 1;

// PITM COMMUNICATION OPCODE 0-9 Reserve decimal opcode
export const OPCODE_PITM_PING               = 0x00;
export const OPCODE_PITM_FLIGHT             = 0x01;
export const OPCODE_PITM_FLIGHT_RECEIVED    = 0x02;
export const OPCODE_PITM_FLIGHT_BACK        = 0x03;
export const OPCODE_PITM_FLIGHT_AUDIT       = 0x04;
export const OPCODE_PITM_ADD                = 0x05;
export const OPCODE_PITM_DEL                = 0x06;
export const OPCODE_PITM_MUT                = 0x07;
export const OPCODE_PITM_STA                = 0x08;
export const OPCODE_PITM_PONG               = 0x09;

// OPCODE OF Piwan CONTROL PANEL MESSAGE Reserve 10-19 decimal opcode 
export const OPCODE_PWAN_CTRL_AUTH          = 0x10;
export const OPCODE_PWAN_CTRL_START         = 0x11;
export const OPCODE_PWAN_CTRL_STOP          = 0x12;
export const OPCODE_PWAN_CTRL_SYNC          = 0x13;
export const OPCODE_PWAN_CTRL_MONITOR       = 0x14;
export const OPCODE_PWAN_CTRL_AUDITOR       = 0x15;
export const OPCODE_PWAN_CTRL_EXEC          = 0x16;
export const OPCODE_PWAN_CTRL_KILL          = 0x17;
export const OPCODE_PWAN_CTRL_REBOOT        = 0x18;
export const OPCODE_PWAN_CTRL_QUIT          = 0x19;

// OPCODE OF PiWAN Protocol Message Reserve 20-39 decimal opcode according to step how its was performed
export const OPCODE_PWAN_FORM               = 0x20;
export const OPCODE_PWAN_ENCODE             = 0x21;
export const OPCODE_PWAN_COMPRESS           = 0x22;

export const OPCODE_PWAN_READ               = 0x23;
export const OPCODE_PWAN_MUTATE             = 0x24;
export const OPCODE_PWAN_SIGN               = 0x25;

export const OPCODE_PWAN_STAMP              = 0x26;
export const OPCODE_PWAN_FLIGHT             = 0x27;
export const OPCODE_PWAN_INTERMEDIATE       = 0x28;

export const OPCODE_PWAN_RECEIVE            = 0x29;
export const OPCODE_PWAN_UNCOMPRESS         = 0x30;
export const OPCODE_PWAN_AUDIT              = 0x31;

export const OPCODE_PWAN_DECODE             = 0x32;
export const OPCODE_PWAN_DEFORM             = 0x33;
export const OPCODE_PWAN_ACKNOWLEDGE        = 0x34;

// Opcode Of Piwan Text Transport Protocol its reserve bytes of 40-49
export const OPCODE_PWAN_TTP_CONNECT  = 0x40;
export const OPCODE_PWAN_TTP_SYN      = 0x41;
export const OPCODE_PWAN_TTP_ACK      = 0x42;

export const OPCODE_PWAN_TTP_SOT      = 0x43;
export const OPCODE_PWAN_TTP_STX      = 0x44;
export const OPCODE_PWAN_TTP_EOT      = 0x45;

export const OPCODE_PWAN_TTP_SUB      = 0x46;
export const OPCODE_PWAN_TTP_PUB      = 0x47;
export const OPCODE_PWAN_TTP_CANCEL   = 0x48;

export const OPCODE_PWAN_TTP_HOST     = 0x49;

export const OPCODE_PITM = {
    OPCODE_PITM_PING,
    OPCODE_PITM_FLIGHT,
    OPCODE_PITM_FLIGHT_RECEIVED,
    OPCODE_PITM_FLIGHT_BACK,
    OPCODE_PITM_FLIGHT_AUDIT,
    OPCODE_PITM_ADD,
    OPCODE_PITM_DEL,
    OPCODE_PITM_UPD,
    OPCODE_PITM_STA,
    OPCODE_PITM_PONG
}

export const OPCODE_PWAN_CTRL = {
    OPCODE_PWAN_CTRL_AUTH,
    OPCODE_PWAN_CTRL_START,
    OPCODE_PWAN_CTRL_STOP,
    OPCODE_PWAN_CTRL_SYNC,
    OPCODE_PWAN_CTRL_MONITOR,
    OPCODE_PWAN_CTRL_AUDITOR,
    OPCODE_PWAN_CTRL_EXEC,
    OPCODE_PWAN_CTRL_KILL,


}


export default OPCODE_PITM