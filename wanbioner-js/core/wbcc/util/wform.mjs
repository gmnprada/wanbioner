/*
***** THIS FILE IS PART OF Wanbioner Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

Focus 
- Forming or generating data into strict implementation and safe format if failed terminate process unless we are in unsafe environment

*/

import { wlog_emergency} from "./wlog.mjs";

/*
***** THIS FILE IS PART OF Wanbioner Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

the focus in this file is formatting data and enforce it on cross compability environment
*/

// print function data input must be in binary encoding, string with binary literals  0b , or hex literals 0x 

// Boolean Checking Util is input valid string binary literals data
// return bool true or false
export function is_bin_string(str) {
    return /^0b[01]+$/.test(str);
}

// Boolean Checking Util is input string valid hex literals data
// return bool true or false
export function is_hex_string(str) {
    return /^0x[0-9A-Fa-f]+$/.test(str);
}
  
// must enforce safe integer i8 Data type
// return i8 value
export function format_as_i8(data){
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < -128 || value > 127) {
        return panic(`Invalid i8 value: ${data}`);
    }
    return value;
}

// must enforce signed integer safe i16 Data Type
// return i16 value
export function format_as_i16(data){
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < -32768 || value > 32767) {
        return panic(`Invalid i16 value: ${data}`);
    }
    return value;
}

// must enforce signed integer safe i32 Data Type
// return i32 value
export function format_as_i32(data){
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < -2147483648 || value > 2147483647) {
        throw new TypeError(`Invalid i32 value: ${data}`);
    }
    return value;
}

// must enforce signed integer safe i64 Data Type
// return i64 value
export function format_as_i64(data){
    // to do implement it
    return;
}

// must enforce signed integer safe i128 Data Type
// return i128 value
export function format_as_i128(data){
    return;
}

// must enforce unsigned integer safe u16 Data Type
// return u8 value
export function format_as_u16(data){
    return;
}

// must enforce unsigned integer safe u16 Data Type
// return u16 value
export function format_as_u16(data){
    return;
}

// must enforce unsigned integer safe u32 Data Type
// return u32 value
export function format_as_u32(data){
    return;
}

// must enforce unsigned integer safe u64 Data Type
// return u64 value
export function format_as_u64(data){
    // todo implement it
    return;
}

// must enforce signed integer safe u128 Data Type
// return u128 value
export function format_as_u128(data){
    // todo implement it
    return;
}

// must enforce size data type to numbe as size length valid range and type
// return size format length
export function format_as_size(data){
    // todo implement it
    return;
}

// must enforce data into integer number as usize length with valid range
// return usize value
export function format_as_usize(data){
    // todo implement it
    return;
}

// must enforce data into floating point f32
// return floating value signed f32
export function format_as_f32(data){
    // todo implement it
    return;
}

// must enforce data into floating point f64
// return floating value signed f64
export function format_as_f64(data){
    // todo implement it
    return;
}


// must enforce its a string data type in javascript from any type of data
// return string type
export function format_as_string(data){
    if(typeof data === 'string'){
        return data;
    }
    return String(data);
}

export function format_as_binary(data){

}

export function format_as_hex(data){

}

export function format_as_octal(data){

}

export function format_as_ascii(data){

}

export function format_as_utf8(data){

}

export function format_as_utf16(data){

}

export function format_as_unicode(data){
    
}

export function panic(...args){
    return wlog_emergency(args);
}