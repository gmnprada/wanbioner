# WANBIONER 

Development is subject to change according to problem ,issues and solution provided in the future this documentation is provided by network engineer and software developer as it is according to the license.

## Introduction

There is a substansial difference of a ROUTER and Your Mobile Phone , Router is not moving while your phone is mobile its can be anywhere. essentialy it has same chips and wireless receiver and transmitter but it handling a different purpose. in Peer To Peer Application this Wanbioner Network will not charge any balance and Fee just like you use local networks. its difference scenario if its intermediated by DEVICE across internet its need a stationary place to be there. you can read what problem this project address at the ROOT FOLDER so its make sense why we need to PAY for DATA EXCHANGE. If you did not has A HOME TO guard you from WEATHER there is 3 possible solutions.

```
- Go To PUBLIC PLACE that has free STAY or STAYING OUTDOOR.
- Rent A Home
- Build A Home
```

which one is your choice let the worlds see it!

# Wanbioner Documentations

### Authoring The Documentations

If you re editing this docs make sure following this rules of changes as we treat this docs primarily on source of truth in the environment and collective that run wanbioner protocol.

- Language is the first artificial intelligence , its even exist as AI enemy back in old school game so make sure you had high focus to edit the source of truth and agreements!
- Make Sure Its Keep Consistent and Less Breaking Changes if you authoring this one.
- Make Sure the Variable Name and Abbreviation is unique and had no collision in the scope of docs for later use in programming languange implementation.


### Abbreviaton and Definitions

In Data Transfering ofter we make a shorter abbreviations trim some long words to be used shorter to fit in the package buffer on data protocol buffer mechanism, here is the official abbreviations and definitions should be interpreted as in variable naming.

Dictionary Based Abbreviation a common words registed on dictionary should be interpreted as is.

|  Words                    |  4 Characters Ascii   | 3 Characters Ascii |
| ------------------------- | --------------------- | ------------------ |
|  Acknowledgment           |         ACKN          |        ACT         |
|  Flight                   |         FLIG          |        FLT         |
|  Network                  |         NETW          |        NET         |
|  Event                    |         EVEN          |        EVT         |
|  Port                     |         PORT          |        PRT         |
|  Syncronize               |         SYNC          |        SYN         |
|  Device                   |         DEVI          |        DVE         |
|  Develop                  |         DEVE          |        DVP         |

Specific Professional used terms words definition it can be

- Application 
- Dependency
- Project
- Protocol
- Software
- Hardware 
- Kernel Driver or Extension

is interpreted according on this table , in this application Environment and Variable Name.


|  Sentence                 |    4 Characters ASCII | 3 Characters ASCII | 2 Characters ASCII |
| ------------------------- | --------------------- | ------------------ | ------------- |
|  Wanbioner                |         WBON          |        WBR         |       WB      |
|  Wanbioner Time Message   |         WBTM          |        WTE         |       WT      |
|  Wanbioner Core Common    |         WBCC          |        WCN         |       WC      |


### The Reserved Bytes is used to detect protocol of the transport Valid Value

This Value is Still To Be Determined to use in specific already well known implementation of Operating System , Program , Kernel , Hardware , Software , Driver , Architecture .

The information and link about this definition should be refrenced from a book , wikipedia, official project of foundation website, to be later included on git wiki as common information to newbies or professional who want to contribute into this project.

#### Reserved an TBD Definition on Local Machine Communication on Private Network and Data Exchange
```
- RAW , , init and signaling with raw socket 
- DEV , , Reserved and TBD for developer
- NOP , , ignore signal this is costly operation from another machine 
- NUL , , delete signal and data make it null (deletion , Gargabe Collector, Recyle)
- MEM , , cache , storage , ram , shared memory
- IPC , , Inter Process communication
- SYS , , System Kernel Based communication
- EVT , , Event Based , Runtime communication
- WFS , , Windows File System
- UFS , , Unix File System
- LFS , , Linux File System
- AFS , , Arm Architecture Based File System
- XFS , , x86 or x64 Based File System
- MFS , , Mips Architecture Based File System
- BFS , , Bsd Socket File System
- VFS , , Virtual File System or VM based files system
- CFS , , Cloud Based File System
- ZFS , , Reserved and TBD
- XFS , , Reserved and TBD
- EFS , , Encrypted File System
- SFS , , External Storage File System Either SSD , HDD , Flash Drive , And Disk communication
- SQL , , Whatever database that use SQL to pass data
- GQL , , Whatever database that use GQL to pass data
- UNK , , Reserved Which Means new protocol cannot be determined on and given a name or namespace yet
- ANY , , Which Means we got the data from anonym maybe allien trying to communicate over we didn't know yet
```

#### Reserverd and TBD Passing Wire , Radio Frequency , Over The Air Communication on Public Network and Data Exchange
```
- ETH , , Ethernet Cable , Hub protocol
- UDP , , User Datagram protocol
- TCP , , Transmission control protocol
- WLA , , Wireless Transmitter and Receiver base transport
- WTA , , Wireless Transmitter 
- WRA , , Wireless Receiver
- GSM , , Use GSM Based Transport
- LTE , , Use LTE Based Transport
- SAT , , Reserved for satellite based system
- API , , Application Programming Interface specific if you're restrict transport under specific platform
- WSS , , Web Socket Server
- WSC , , Web Socket Client
- WEB , , If It Transfer packet through Web Polling or anything
- RTC , , Real Time Communication (Web RTC) as example
- RTM , , Real Time Messaging Protocol (RTMP) just make it shorter here
- BTH , , Bluetooth Based Protocol
- AIR , , Reserved and TBD
- SMB , , Reserved and TBD
- IRC , , Reserved and TBD
- TEL , , Reserved and TBD
- FTP , , Reserved and TBD
- IOT , , Reserved and TBD
- NET , , Reserved and TBD
- GPS , , Reserved ant TBD
- IP4 , , Internet Protocol 4
- IP6 , , Internet Protocol 6
- WB3 , , Web 3 based protocol
- TLS , , Reserved and TBD
- ARF , , Analog  Signal based Radio Frequency
- DRF , , Digital Signal based Radio Frequency
- FOC , , Fiber Optic Net Base
- SOC , , Reserved for socket base communication
- IFR , , Infra Red based Communication
- SRL , , Serial based Communication
- TTY , , Reserved and TBD
- UPN , , Universal Plug and Play whatever it is make it shorter here
- USB , , Universal Serial Bus whatever it is through usb 
- PCI , , Use PCI based connector
- WDN , , Use of USB Dongle Multicast
- ADP , , Use of USB Adapter Multicast
- HUB , , Use of Ethernet Hub Multicast
- MOB , , Use of Custom motherboard driver
```

### Wanbioner | WBON | WBR | WB

The Main Application system , it build through many core system under the hood like WBCC, and WBTM , there is too many giant shoulder we rely on so read the docs as its is.


Purpose
- Address the problem in the root project.
- Make Automation on Data Transferring Reward.
- Make SDK to be used in game protocol.
- Make Sure the SDK is Secure and Safe to use.

#### Wanbioner Message Structure
```
Base Packet 
- CONST HEADER 8 bytes , 4 bytes const header ,1 bytes packet opcode identifier, 3 bytes reserved  
- REQUESTER 120 bytes , string or hash of requester aka host client machine
- RECIPIENT 120 bytes , string or hash of requester aka host recipient machine
- INTERMEDIATE 120 bytes , string or hash of intermediate NET aka host that transport the packet
- PROMISE REQUEST TIMEOUT 8 bytes, u64 promise this packet should arrive in that time to acquire Pi Balance
- PROMISE FLIGHT TIMESTAMP 8 bytes , u64 time stamp of this packet flight or sended
- PROMISE INTERMEDIATE TIMESTAMP 8 bytes , u64 timestamp of this packet arrived 
- PROMISE RECEIVED TIMESTAMP 8 bytes , u64 time stamp of this packet arrived at recipient
- TIME TO LIVE 1 bytes , u8 this need to be decremented on each of broker and router
```

### Wanbioner Core Common | WBCC | WBN | WC
Wanbioner Core Common Structure , shortest "Common Core" abbreviation, header , variable and lookup table, packet and message structure to be used across OSI Layer , either secure network or unsecure network to be used as protocol agreements, consensus, and monitoring.

Purpose
- Make data persistent across wanbioner node
- Make cross compability to be used as data agremeent, consensus , monitoring ,evaluation,  between different operating system, machine and programming language
- Make Compressed format, encoding, decoding of data persistent on lookup table how its should be interpreted from human readable message into machine language , numbering system (binary, hex , octal, bit , qubit) , or other domain specific language system on encoding and decoding the message data.

### Wanbioner Time Message | WBTM | WTE | WT

Wanbioner Time Message Structure, shortest packet to relay and analyze time on same machine

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

| Header | Hex Format            |
| ------ | --------------------- |
|  WBTM  |                       |

| Opcode                |    Hex Value          |
| -------------------   | --------------------- |
|  WBTM_PING            |         0x00          |
|  WBTM_FLIGHT          |         0x01          |
|  WBTM_FLIGHT_RECEIVED |         0x02          |
|  WBTM_FLIGHT_BACK     |         0x03          |
|  WBTM_FLIGHT_AUDIT    |         0x04          |
|  WBTM_ADD             |         0x05          |
|  WBTM_DEL             |         0x06          |

8 Bytes BIGUINT64LE Timestamp of the date now is assigned by the loop of opcode every audit step

#### Wanbioner Time Message Structure

Purpose
- clock sync between computer node (custom ntp)
- measure latency and detecting internet connection on broker / backend / server
- time value for time stamping client - broker - client connection
- time value for stamping p2p connection
- mapping hostname and the network around

Packet Structure
```
const WBTM_HEADER 4 bytes 
const MESSAGE_OPCODE 4 bytes
var t0 8 bytes , u64 
var t1 8 bytes , u64
var t2 8 bytes , u64
var t3 8 bytes , u64 
var hostname , 64 bytes // Hostname of the Computer
```



### COMPRESSED PACKET STRUCTURE

- Still on Development TBD this speicific compression should be arranged on Wanbioner Core Common if we need a better compression algorithm later that not available publicly.



### NOTES!

Wanbioner base network is not contains any encryption at the moment so please do the encryption in the data layer if the the apps using this networks need a secure packet transfer.

The Specification also subject to change according to benchmark and test on the test net passed also until separation of specific dependency completed as a running system

Use it with your own risk!