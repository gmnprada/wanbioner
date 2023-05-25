/*
***** THIS FILE IS PART OF Wanbioner Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

Focus
- Say Bye Bye to impostor , scammer , violator , spammer, botnet, criminal that violate policy , terms , and privacy try to acquire access not through legitimate protocol agreements!

Data Gathering Used to blacklist specific Domain , Internet Protocol Version 4 and 6 , Hosts Machine and such the attack come from
- Http Access Logs that degrade performance
- SSH Brute Force attempt by log

Inspired Alot By Fail2ban,FirewallD,Nobots express middleware , and experience on Security and Securing related Task and Jobs! 

why this is created ?

If you host your machine in internet either by rent or your own machine your access log is brute forced by the botnet on the internet by inresponsible individual or maybe organization that act in criminal activities
its undeniable cause you're seeing the access log through web server or ssh access log
even new spinning instance of server or cloud on old used ip address is a target for a botnet in the wild jungle we call internet

so as maintainer we tried to log the machine or address used by spammer or attacker in this file and put them in jail
encryption , password , pin , fingerprint, private keys is private security measurement of individual and its cannot be relied on forever cause computing power is also not stagnant and growing there must be a hole a flawn in a system 
Human Error is also a factor of incident happens.
described from my experience below.

mitigate the attack by proxying , content delivery network , vpn also not a silver bullet as it is high cost implementation.
blockchain ? Rely on 51% honest algorithm in collective not a silver bullet but revolutionary from 2009 white paper

There is no silver bullet means there is no perfect solution
There will be always a cost for running that either individual , security officer or organization running the jobs and do the task!

if you dissasemble a machine you can see what its build for and how hack implemented from time to time who knows the flaws of running system.

data breach and intrusion is a hidden crime on the net that happens alot in the past it can create outage on running system even blackout on entire building or organization
in the past i create evilcutebugs nft that turn an event of breach happens on history in the net as NFT that no one even care of its not wall of fame
but wall of shame on that fail task securing running system or platform updated it security , place a bug bounty reward, or whatever its cybersec duty or specific organization that run the platform responsibility
if vulnerability already reported and no one take care on action patching it, its given back to maintainer fault so we end up in circular who is responsible in the event it back to the "Actor" who trigger that event and collective in the system of incident its happening.

Your GSM number and Smartphone 2 Way Verification or Authenticator Based?
No it cannot be rely on but its there to acquire more time to be used in mitigation of incident. 
if you had something valuable your physical device also can be stolen so your password , key ,pin pattern, is the last resort before someone broke in to the device and misuse the device and your data also your access to specific system if the hardware support it.
Happen Twice in My life the phone as daily driver is missing and the box is still owned , cannot locate where is the lost device or stolen phone.

You need to do many additional works to recover it emailing vendor , GSM provider for acquiring your phone number, and police organization to report of your stolen goods or missing goods and its slow and tedious task im too lazy doing that.
foreach organization and will do that later after find new candidate of phone to be used or maybe i will be just resurrect old android phone.
as reporting did not means your lose things returned (From My Experience in My Own Journey)

do secure the device if you're aware it missing , stolen and lost, erase data in android possible things to do if you're concerning about privacy and disable it on GPS tracking its your fault also cannot be detected!.
count my mistake as human error , or fail to guard my own goods , twice its happening means you're already targeted and at risk.

if its flashed then rip your Daily Driver then get a new phone and revoke all the key access, secure or erase device data and unlink it with your personal account and access rights
if its not connected to internet all of remote web functionality is not working like from find my device.
mitigate it before it fully compromised there is a time range when it categorized lost 1-3 days in some specific organization.

its sucks losing device and data either its stolen or become a junk in the realms cause cannot be located there is also a drawback from untracked and privacy feature an options, 
it is not my first time losing a android device, IOS Device , as daily driver so bear with it as i am already accustomed on such event 
there is no guarantee the device will be coming back so only sincerity of knowing your wealth is already on the realms matter.
also device and hardware is not immortal it can be replaced ,become legacy, unsupported , getting old and rusty , or maybe just unappreciated.

each computer and device is unique to an engineer we place a message on stolen or lost phone if its not returned means
its classical human problem , about moral and ethics either as professional or collective that need to be fixed.
its a bad day ~

Is im Guilty sharing a story and open sourcing a thing?
No isn't learn from story in my life later on author folder.
its will be moved to GMNP-3 20-may-2023 changed into 19-may-2023 later on find my device and security notes in /docs/maintainer/author
its will be daily story about "Fine I'll Doit My Self".

Notes!
Be Honest and polite is more appreciated than Cyber War like an iceberg layer under the hoods!
if you want access be a maintainer , author or contributor its more appreciated just read what is available on the repo as it is /docs/maintainer
Share your Burden!

*/



// all from WBTM node or known maintainer is that run WBTM protocol should be included to this list
const whitelist = [];

// blacklist info of activity that not obeying the protocol implementation , do violation , not reading whats in the /docs/maintainer
const blacklist = [];

// jail persistent attacker forever or specific geolocation ban , Autonomous System Ban (ASN) , IP4 or IPV6 Public IP Range Ban , Hostname ban or Hardware Serial Number Ban (DEVICE)
const jail = [];

// Firewall Rules should be trust no domain first except the running program, internal private networks and include trusted source one by one
const rules = "";