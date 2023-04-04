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

// Hex Format 
const WBTM_PING            = 0x00;
const WBTM_FLIGHT          = 0x01;
const WBTM_FLIGHT_RECEIVED = 0x02;
const WBTM_FLIGHT_BACK     = 0x03;
const WBTM_FLIGHT_AUDIT    = 0x04;
const WBTM_ADD             = 0x05;
const WBTM_F


const WBON : [u8;4] = "WBON" as u8;

