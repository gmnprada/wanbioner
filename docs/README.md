# PIWAN 

development is subject to change according to problem ,issues and solution provided in the future this documentation is provided by network engineer as software developer at it is according to the license.

## Introduction

There is a substansial difference of a ROUTER and Your Mobile Phone , Router is not moving while your phone is mobile its can be anywhere. essentialy it has same chips and wireless receiver and transmitter but it handling a different purpose. in Peer To Peer Application this PIWAN will not charge any balance and Fee just like you use local networks. its difference scenario if its intermediated by DEVICE across internet its need a stationary place to be there. you can read what problem this project address at the ROOT FOLDER so its make sense why we need to PAY for DATA EXCHANGE. If you did not has A HOME TO guard you from WEATHER there is 3 possible solutions.

```
- Go To PUBLIC PLACE that has free STAY or STAYING OUTDOOR.
- Rent A Home
- Build A Home
```

which one is your choice let the worlds see it!

## Piwan Documentations

## The Reserved Bytes is used to detect protocol of the transport Valid Value

### Local Machine Communication
```
- RAW , , signaling 
- NOP , , ignore signal
- NUL , , delete signal
- MEM , , filesystem , memory cache , storage , ram , shared memory
- IPC , , Inter Process Communication
- SYS , , System based communication
- EVT , , Event Base and Runtime communcation
- DEV , , Reserved and TBD
- NET , , Reserved and TBD
- TEL , , Reserved and TBD
- FTP , , Reserved and TBD
- IOT , , Reserved and TBD
```

### Passing Wire Communication
```
- ETH , , Ethernet Cable , Hub protocol
- UDP , , Datagram protocol
- TCP , , Transmission control protocol
- WRL , , Wireless Transmitter and Receiver base transport
- GSM , , Use GSM Based Transport
- LTE , , Use LTE Based Transport
- SAT , , Reserved for sattelite based system
- WSS , , Web Socket Server
- WSC , , Web Socket Client
- WEB , , HTML To HTML scraping do we really need it?
- SMB , , Reserved and TBD
- IRC , , Reserved and TBD
```


### π-tm Time Sync Structure, shortest packet to relay and analyze time on same machine

Purpose
-  time for the client with no need of latency measurement
-  build a graph of latency around networks

Packet Structure
```
- 4 bytes header values
- 1 bytes opcode
- 3 bytes protocol identifier
```

8 Bytes Table Breakdown

| Header | Binary Value          |
| ------ | --------------------- |
|  πtm   | [0xcf,0x80,0x54,0x4d] |

| Opcode              | Binary Value          |
| ------------------- | --------------------- |
|  PING               |         0x00          |
|  FLIGHT             |         0x01          |
|  FLIGHT_RECEIVED    |         0x02          |
|  FLIGHT_BACK        |         0x03          |
|  FLIGHT_AUDIT       |         0x04          |
|  PITM_ADD           |         0x05          |
|  PITM_DEL           |         0x06          |

8 Bytes BIGUINT64LE Timestamp of the date now is assigned by the loop

### π-tm Time Message Structure,

Purpose
- clock sync between computer node (custom ntp)
- measure latency and detecting internet connection on broker / backend / server
- time value for time stamping client - broker - client connection
- time value for stamping p2p connection
- mapping hostname and the network around

Packet Structure
```
const PITM_HEADER 4 bytes 
const MESSAGE_OPCODE 4 bytes
var t0 8 bytes , u64 
var t1 8 bytes , u64
var t2 8 bytes , u64
var t3 8 bytes , u64 
var hostname , 64 bytes // Hostname of the Computer
```


### πwan Base Packet for data exchange
```

Base Packet 
- CONST HEADER 8 bytes , 4 bytes const header ,1 bytes packet opcode identifier, 3 bytes reserved  
- REQUESTER 120 bytes , string or hash of requester aka host client machine
- RECIPIENT 120 bytes , string or hash of requester aka host recipient machine
- INTERMEDIATE 120 bytes , string or hash of intermediate NET aka host that transport the packet
- PROMISE REQUEST TIMEOUT 8 bytes, u64 promise this packet should arrive in that time to acquire Π Balance
- PROMISE FLIGHT TIMESTAMP 8 bytes , u64 time stamp of this packet flight or sended
- PROMISE INTERMEDIATE TIMESTAMP 8 bytes , u64 timestamp of this packet arrived 
- PROMISE RECEIVED TIMESTAMP 8 bytes , u64 time stamp of this packet arrived at recipient
```



### COMPRESSED PACKET STRUCTURE

- Still on Development

PIWAN base network is not contains any encryption at the moment so please do the encryption in the data layer if the the apps using this networks need a secure packet transfer.

The Specification also subject to change according to benchmark and test on the test net passed