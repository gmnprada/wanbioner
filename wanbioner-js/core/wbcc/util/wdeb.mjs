/*
***** THIS FILE IS PART OF Wanbioner Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

Focus
- Make a powerful debug message in data format 
- Make a dumper to help in low level format of encoding 
- Analyze and optimize the generated machine code on different architecture
- Display it as Powerfull debugger in GUI interface

-- have a manner and study ethical hacking if you hacking and use this tools as it can be used to reverse engineer binary , compiled program , or propertiary things
-- abuse and exploit of usage on this program should be reported to MAINTAINER File if it violate trademark , policy , or propertiary things of individual or company
*/

import { format_as_u128, format_as_u16, format_as_u64 } from "./wform.mjs";
import { wlog_debug, wlog_emergency } from "./wlog.mjs";

// any input data
export function wdeb(data){

    let javascriptType = [
        "undefined",
        "object",
        "boolean",
        "number",
        "bigint",
        "string",
        "symbol",
        "function",
        "null" // also treated as object from mozilla refrences or 0 on 2016 archive
    ]

    let dataType = typeof data;

    // Data type is on standard
    if(javascriptType.includes(dataType)){
        wlog_debug("On Standard Common Data Type");
    } else{
        wlog_emergency("Uknown Data Type");
    }

    if(dataType === "number"){
        // will be exit process to determined its strict type if fail
        let u8 = format_as_u8(data);
        let u16 = format_as_u16(data);
        let u32 = format_as_u32(data);
        let u64 = format_as_u64(data);
        let u128 = format_as_u128(data);
        let i8  = format_as_i8(data);
        let i32 = format_as_i32(data);
        let i64 = format_as_i64(data);
        let i128 = format_as_i128(data);
    }

    if(dataType === "string"){
        // will be print output in various encoding format


    }

    if(dataType === 'boolean'){
        
    }
}