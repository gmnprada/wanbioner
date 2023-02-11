PIWAN development is subject to change according to problem ,issues and solution provided in the future this documentation is provided by network engineer as software developer at it is according to the license.

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