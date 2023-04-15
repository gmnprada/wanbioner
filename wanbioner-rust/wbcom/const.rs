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
    Make sure to read the main docs of wanbioner to make the abbreviation persistent

    # Variable Naming
    const that use globally and well known must be ALL UPPERCASE
    if its work don't touch apply sometimes its dusty and rusty too so need a maintain

    Wanbioner is equivalent to WBR  and is equivalent to WBON
    Wanbioner Time Message is equivalent to WTE and is equivalent to  

    3 character ascii short abbreviation pattern naming if its a words
    - first  char is first character
    - second char is middle character 
    - last   char is end of character


    # Versioning
    outdatet and versioning is apply each 6 month to make its less burden

    # Stable and Long Term Support (LTS)
    dunno what to do as im still a LONE WOLF Engineer and Developer with many Contributor Mailing list

    !experimental 
    The Bitmask and The Bitflags
    There is a plan to move some of wanbioner protocol message to 3 bits parser or 4 bits based parser

    
    3 bits maximum number unsigned is 7 

    defined WBR_MIN_3BITS   = 7
    defined WBR_MAX_3BITS   = 7

    defined WBON_MIN_3BITS  = 7
    defined WBON_MAX_3BITS  = 7


    4 bits  maximum number  usigned is 255

    defined WBR_MIN_4BITS = 0
    defined WBR_MAX_4BITS = 255

    defined WBON_MIN_3BITS  = 0
    defined WBON_MAX_3BITS  = 255

    ```
    - There is A Phrase ITS FREE TODAY and ITS PAY TOMORROW but TOMORROW never exist
    - In Indonesia just say BON and TOMORROW is gone to Warung Kopi :p
    - BON is my indonesian magic words so threat it as it is :v

    This is not a code snippet!
    ```

*/ 

/* Wanbioner Short Naming Abbreviation Implementation */

// 3 ascii character constant 24 bits or 3 bytes
const WBR_HEADER  : [u8;3]       = "WTM"  as u8;

// The number value of size length
const WBR_HEADER_SIZE   = 4;
const WBR_PROTOCOL_SIZE = 3;

/* Wanbioner 4 character Naming Abbreviation Implementation */


// 4 ascii character constant 32 bits
const WBTM_HEADER : [u8;4]      = "WBTM" as u8;

// WBTM COMMUNICATION OPCODE 0-9 Reserve decimal opcode
const WBTM_PING = 0;  // Ping Arounds by saying PING means node alive code 0
const WBTM_FLIGHT = 1;  // Flight and broadcast around   Fill T0
const WBTM_FLIGHT_RECEIVED = 2;  // Receive packet from around Fill T1
const WBTM_FLIGHT_BACK = 3;  // Send packet back from around  Fill T2
const WBTM_FLIGHT_AUDIT = 4;  // Fill T3 count and measure then Fill Data of TTL, DELTA , THETA , RTT , LATENCY , HOST , PEER , SCAN , NET
const WBTM_ADD = 5;  // A Add    something [address,ip,mac,serial,hostname,domain]
const WBTM_DEL = 6;  // D Delete something [address,ip,mac,serial,hostname,domain]
const WBTM_MUT = 7;  // M Mutate something [address,ip,mac,serial,hostname,domain]
const WBTM_STA = 8;  // S Stamp  something [address,ip,mac,serial,hostname,domain]
const WBTM_PONG = 9;  // Pong Back by saying PONG means there is someone code 9


/// Header
const WBON : [u8;4] = "WBON" as u8;
//!experimental later use to parse 32 bits code into do , stop , or did i do it?
const WBON_DIDIDO = 0xADEADE;

// OPCODE OF Wanbioner CONTROL PANEL MESSAGE Reserve 10-19 decimal number 
const WBON_CTRL_AUTH = 10;
const WBON_CTRL_START = 11;
const WBON_CTRL_STOP = 12;
const WBON_CTRL_SYNC = 13;
const WBON_CTRL_MONITOR = 14;
const WBON_CTRL_AUDITOR = 15;
const WBON_CTRL_EXEC = 16;
const WBON_CTRL_KILL = 17;
const WBON_CTRL_REBOOT = 18;
const WBON_CTRL_QUIT = 19;

// OPCODE OF Wanbioner Protocol Reserve 20-39 decimal number according to step how its was performed
const WBON_FORM = 20;
const WBON_ENCODE = 21;
const WBON_COMPRESS = 22;

const WBON_READ = 23;
const WBON_MUTATE = 24;
const WBON_STAMP = 25;

const WBON_SIGN = 26;
const WBON_FLIGHT = 27;
const WBON_INTERMEDIATE = 28;

const WBON_RECEIVE = 29;
const WBON_UNCOMPRESS = 30;
const WBON_AUDIT = 31;

const WBON_DECODE = 32;
const WBON_DEFORM = 33;
const WBON_ACKNOWLEDGE = 34;

// OPCODE Of Wanbioner Text Transport Protocol its reserve decimal number of 40-59
const WBON_TTP_CONNECT = 40;
const WBON_TTP_SYN = 41;
const WBON_TTP_ACK = 42;

const WBON_TTP_SOT = 43;
const WBON_TTP_STX = 44;
const WBON_TTP_EOT = 45;

const WBON_TTP_SUB = 46;
const WBON_TTP_PUB = 47;
const WBON_TTP_CANCEL = 48;

const WBON_TTP_HOST = 49;