# WBTM Network Time 
This Time is copied from https://piwan.net/network
Written On     : 2023-03-08
Written By     : GMNP
Last Update On : 2023-05-24T06:53:39.540Z
Last Update By : GMNP


# Maintainer Note For Security Best Practice 
This Document can be either opened with ascii base character or Markdown format

# Create A Strong Password
strong password is required make sure to include number, upper case combination ,
and some of random symbol in your keyboard preferable 8-16 length and its must 
remembered only with your muscle memory on keyboard never write it on paper or text based material 
even its is hashed on some cloud service, 
cryptographer never know when is the encyrption obsolete decade after decade


# Create private ssh keys with your working and active email, 
this email should not be listed on public to keep it more secure , 
also this email must be active email that you keep using it and read info from cyber sec officer.
give a password to your ssh keys so incase it stolen on wires or by sniffing it cannot be used.
the password is there to guard authenticy, authorization and changes made to the project.

use ecdsa based on encyrption or latest RSA encyrption with a long bytes 4096
the example commands

```


```

# Create A GPG keys 
after you create strong ssh keys pair, create ultimate GPG keys to mark your commit verified 
so others see its as legit change from you if there is a change without verified commit 
the team must be under strict requirement, hiding environment keys, near a deadline , or change of policy in some country 
also securing an integration keys to other platform that means to be confidential and not to be seen in public.
the command for it

```

```


# Create Your Username and Wanbioner Maitainer User on Node Production Environment

Linux or Unix is designed for multi users , no one should running account with root permissions except is on the root groups such as 
the running system program, developer or trusted person in the ownership board, security or author that given writen consent, access right 
has the root access permission to change the running system .

wanbioner node often need root permission so its keep runing under
root directory if youre not the machine owner you should have this access.

dispositon of machine to be able working remotely is acquired through giving maintainer public ssh keys
to machine owner's machine .
create a username/nickname with working email prefix on MAINTAINER note at this root project directory
what they write on MAINTAINER file to keep the single source of truth its is a same person.
donot give the newly create users a password give them legit user in the machine and just paste their public key in the authorized file 
to let them access the machine and tell them youre giving access or need help on configuring something in your machine.

this access right can be disposed or keep by the machine owner 
if they want to password something in the machine let the maintainer 
or security officer do it as each person have different password in their muscle memory. 
only public key need to be passed for every maintainer - maintainer works or security - security works.

a legit node should must and be maintained to latest version of wanbioner software as update is crucial if we found something 
related to Vulnerability in the project like CVE Report and suchs from official trusted party.
if its can be automated we will automate configuring somethings. but sometimes 
manual maintenance is needed for better security for solving technical difficulties.

essentialy cloning and running the program on latest version is considered secure and no technical needs needed. 
as we can automate a node run the legit version or not if the development roadmap already complete.

Thats all about securing server , if your ssh keys is listed on the server you can do something remotely the documentations is on OS folder

# Accessing Remote server

Have A Manner if you're accessing machine that not belongs to you , you should have a legal access right
as illegal access to remote machine is regulated on some law in specific country. 
always make sure you inform you want to access a machine remotely to the machine owner by email or message before accessing it, and have permission accessing the machine.

ssh access logs also need to be hooked to inform maintainer some maintainer or security officer accessing the machine remotely in the scope if they re obligated to do so.
its considered good security Practice as no one want their home magically had a bomb in the area of their living space.