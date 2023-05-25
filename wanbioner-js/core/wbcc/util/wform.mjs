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
export function format_as_i64(data) {
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < -9223372036854775808n || value > 9223372036854775807n) {
        panic(`Invalid i64 value: ${data}`);
    }
    return value;
}

// must enforce signed integer safe i128 Data Type
// return i128 value
export function format_as_i128(data) {
    const value = BigInt(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < -170141183460469231731687303715884105728n || value > 170141183460469231731687303715884105727n) {
        panic(`Invalid i128 value: ${data}`);
    }
    return value;
}

// must enforce unsigned integer safe u8 Data Type
// return u8 value
export function format_as_u8(data) {
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < 0 || value > 255) {
        panic(`Invalid u8 value: ${data}`);
    }
    return value;
}

// must enforce unsigned integer safe u16 Data Type
// return u16 value
export function format_as_u16(data) {
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < 0 || value > 65535) {
        panic(`Invalid u16 value: ${data}`);
    }
    return value;
}

// must enforce unsigned integer safe u32 Data Type
// return u32 value
export function format_as_u32(data) {
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < 0 || value > 4294967295) {
        panic(`Invalid u32 value: ${data}`);
    }
    return value;
}

// must enforce unsigned integer safe u64 Data Type
// return u64 value
export function format_as_u64(data) {
    const value = BigInt(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < 0n || value > 18446744073709551615n) {
        panic(`Invalid u64 value: ${data}`);
    }
    return value;
}

// must enforce signed integer safe u128 Data Type
// return u128 value
export function format_as_u128(data) {
    const value = BigInt(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < 0n || value > 340282366920938463463374607431768211455n) {
        panic(`Invalid u128 value: ${data}`);
    }
    return value;
}

// must enforce size data type to numbe as size length valid range and type
// return size format length
export function format_as_size(data) {
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) {
        panic(`Invalid size value: ${data}`);
    }
    return value;
}

// must enforce data into integer number as usize length with valid range
// return usize value
export function format_as_usize(data) {
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isInteger(value) || value < 0 || value > Number.MAX_SAFE_INTEGER) {
        panic(`Invalid usize value: ${data}`);
    }
    return value;
}

// must enforce data into floating point f32
// return floating value signed f32
export function format_as_f32(data) {
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isFinite(value)) {
        panic(`Invalid f32 value: ${data}`);
    }
    return value;
}

// must enforce data into floating point f64
// return floating value signed f64
export function format_as_f64(data) {
    const value = Number(data);
    if (Number.isNaN(value) || !Number.isFinite(value)) {
        panic(`Invalid f64 value: ${data}`);
    }
    return value;
}

// must enforce its a string data type in javascript from any type of data
// return string type
export function format_as_string(data){
    if(typeof data === 'string'){
        return data;
    }
    return String(data);
}

// must enforce return data into buffer encoding binary
export function format_as_binary(data){

}

// must enforce return data into buffer encoding hex
export function format_as_hex(data){

}

// must enforce return data into buffer encoding octal
export function format_as_octal(data){

}

// must enforce return data into buffer encoding ascii
export function format_as_ascii(data){

}

// must enforce return data into buffer encoding utf8
export function format_as_utf8(data){

}

// must enforce return data into buffer encoding utf16
export function format_as_utf16(data){

}

// must enforce return data into buffer or string showing unicode code point
export function format_as_unicode(data){
    
}

export function panic(...args) {
    wlog_emergency(args);
    return process.exit(1);
}
