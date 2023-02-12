PIWAN development is subject to change according to problem ,issues and solution provided in the future this documentation is provided by network engineer as software developer at it is according to the license.

Introduction
There is a substansial difference of a ROUTER and Your Mobile Phone , Router is not moving while your phone is mobile its can be anywhere. essentialy it has same chips and wireless receiver and transmitter but it handling a different purpose. in Peer To Peer Application this PIWAN will not charge any balance and Fee just like you use local networks. its difference scenario if its intermediated by DEVICE across intenet its need a stationary place to be there. you can read what problem this project address at the ROOT FOLDER so its make sense why we need to PAY for DATA EXCHANGE. If you did not has A HOME TO guard you from WEATHER there is 3 possible solutions.

- Go To PUBLIC PLACE that has free STAY or STAYING OUTDOOR.
- Rent A Home
- Build A Home

which one is your choice let the worlds see it!

Documentations

BASE PACKET EXCHANGE DATATYPE

RAW PACKET STRUCTURE 
- CONST HEADER 8 bytes , 4 bytes const header ,1 bytes packet opcode identifier, 3 bytes reserved  
- REQUESTER 120 bytes , string or hash of requester aka host client machine
- RECIPIENT 120 bytes , string or hash of requester aka host recipient machine
- INTERMEDIATE 120 bytes , string or hash of intermediate NET aka host that transport the packet
- PROMISE REQUEST TIMEOUT 8 bytes, u64 promise this packet should arrive in that time to acquire Π Balance
- PROMISE FLIGHT TIMESTAMP 8 bytes , u64 time stamp of this packet flight or sended
- PROMISE INTERMEDIATE TIMESTAMP 8 bytes , u64 timestamp of this packet arrived 
- PROMISE RECEIVED TIMESTAMP 8 bytes , u64 time stamp of this packet arrived at recipient


COMPRESSED PACKET STRUCTURE

- Still on Development

PIWAN base network is not contains any encyrption at the moment so please do the encryption in the data layer if the the apps using this networks need a secure packet transfer.

The Specification also subject to change according to benchmark and test on the test net passed