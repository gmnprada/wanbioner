import PiwanBuffer from "./piwan_buffer.mjs";


let data = 'We need a very large string to test here';


let buf = new PiwanBuffer(data);
let ret = buf.from(data);
ret.toString();

let buf2 = new PiwanBuffer(data);
let ret2 = buf2.from(data);

buf2.charset = 'binary';

let bin = buf2.toArrayString();

let bus = buf2.toString();
console.log(bin);
console.log(bus);