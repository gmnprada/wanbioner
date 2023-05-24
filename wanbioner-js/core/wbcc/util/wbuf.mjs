/*
***** THIS FILE IS PART OF Wanbioner Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

Focus
transform on encoding or decoding the data into different format across protocol
*/

// need to handle binary file for cross environment of javascript runtime so we need this
// make sure to include only supported native function here !
// cause of the sucks relations of availbility between what available on v8 , node , browser , ecmascript support
// we need to make sure compability between binary data here if its primitive types
// instead of performance we aim for precisison and easy to read data with standard human prefix
// 0b for binary , 0x for hex for cross compability to ther programming lang
// if youre working on string make sure to use unicode standard
// if youre working on number make sure to use asm standard on data types and floating point

// This Buffer is purely experimental with latest available browser support and nodejs api support!
// DWYOR ok if its not battle tested on large network yet!
// !experimental this util name will be included in docs as WBUF 

export class WBUF {
    #maxSafeInteger;
    #minSafeInteger;
    #buffer = new Uint8Array();
    length = 0;
    charset = 'utf8';
    original;
    constructor(data, charset) {
        if (typeof process === "object") {
            this.env = 'node';
        } else if (typeof importScripts === "function") {
            this.env = 'webworker';
        } else if (typeof window === "object") {
            this.env = 'browser';
        }
        charset ? this.charset = 'utf8' : charset;

        this.#maxSafeInteger = Number.MAX_SAFE_INTEGER;
        this.#minSafeInteger = Number.MIN_SAFE_INTEGER;
        this.original = data;
    }

    // for easily view the buffer as binary data , fixed into 8 bits with leading zeroes
    // the original data must be uncompressed its not this buffer jobs handling compression job
    // should be focuse on preserving the data originality the same as its being send across wire!

    #u8BinString(decimal) {
        if (decimal < 0 || decimal > 255 || decimal % 1 !== 0) {
            throw new Error('Not a Valid u8 decimal bytes');
        }

        // array start from 0 if programmer did not know this youre fired, just joking this is open source
        let bin = ['0', 'b',];

        for (let i = 7; i >= 0; i--) {
            let k = decimal >> i;
            if (k & 1)
                bin.push("1");
            else
                bin.push("0");
        }
        return bin.join('');
    }

    #u16BinString(decimal) {
        if (decimal < 0 || decimal > 65535 || decimal % 1 !== 0) {
            throw new Error('Not a Valid u16 decimal bytes');
        }

        let bin = ['0', 'b',];

        for (let i = 15; i >= 0; i--) {
            let k = decimal >> i;
            if (k & 1)
                bin.push("1");
            else
                bin.push("0");
        }
        return bin.join('');
    }

    #u32BinString(decimal) {

    }

    // this need to be handled correctly 
    // javascript is bad at this (o,o) so web game developer till when its fixed html 5 game dev ?
    // should we do numerical operation base on string only or add c++ code under the hood of its only working on node ,
    // not cross browser through , hmm this is is called crazy patching till it get standarized which is too long!
    // its ugly let be better if js dev still has future if no one ever care with floating point or u64 on js .
    // too bored with js after 9 years with it , dont push me to use TS , im more lazy to writing a type definition !
    // better to stay on Ecma standart more cleaner less compiler noise!
    #u64BinString(decimal) {
        // the old tricks is read the binary as [u32,u32] then precise according to the big number exceeding max safe integer

        if (decimal < this.#maxSafeInteger) {
            // safe operation
        } else {

        }
    }


    // todo implement private function that convert decimal to hex and vice versa


    // todo implement the floating point of math im to lazy to do math and log also convert base on radix
    // but its need to be done in modern js , although its modern is still not better than code in rust :p
    #f32BinString(floating) {

    }

    #f64BinString(floating) {

    }

    set charset(data) {
        let allowed = ['binary', 'ascii', 'utf8', 'ucs2', 'base64', 'base64url', 'hex'];
        if (!allowed.includes(data)) {
            throw Error('Unsupported Encoding Types!');
        }
        this.charset = data;
    }

    copy() {
        const buf = new Uint8Array(this.#buffer);
        return buf;
    }

    from(data) {
        if (typeof data == 'string') {
            this.length = data.length;
            if (this.env == 'node') {
                const buf = Buffer.from(data, this.charset);
                this.#buffer = new Uint8Array(buf.length);
                this.#buffer.set(buf);
                return this;
            }

            if (this.env == 'browser') {
                this.#buffer = new TextEncoder().encode(data);
                return this;
            }
        }

        if (typeof data == 'number') {

        }

        if (typeof data == 'boolean');

        if (typeof data == 'object') {


        };
    }

    toString() {
        let letters = [];
        for (let i of this.#buffer) {
            letters.push(String.fromCodePoint(i));
        }
        return letters.join('');
    }

    toViewAsArray(dataType) {

        if (this.charset == 'binary') {
            let binary = [];

            for (let i = 0; i < this.#buffer.length; i++) {
                binary.push(this.#u8BinString(this.#buffer[i]));
            }

            return binary;
        }

        if (this.charset == 'hex') {

        }
    }
}

export default WBUF;