/*
***** THIS FILE IS PART OF Wanbioner Project *****

PiOS License

Copyright (C) 2023 by Gde Made Novan Priambhada and Contributor

Developer
GMNP

Contributor


See The LICENSE DETAILS of the PROJECT Under PiOS license on the root directory

Focus
universal logging format across different environment or protocol for easily debug machine code into human readable format

*/

// Only use single digit as decimal only 10 based number and symbol
export const wlog_level = {
    all       : 0, // Logging All information of the system in log (decrease perfomance) and represent null
    emergency : 1, // System is Unusable or Process Died (System Is Not Running)
    alert     : 2, // System need Immediate action as something trigger alert (hardware failure ,misconfigured , intrusion)
    critical  : 3, // System running on critical conditions that need manual maintainer intervention (missing dependency and such)
    error     : 4, // System is running but had several error condition
    warn      : 5, // System is running on warning condition might trigger critical or emergency status if ignored often
    notice    : 6, // System log something that might be noticed by maintainer
    info      : 7, // Normal log Condition information
    debug     : 8, // Debugging log
    disable   : 9  // Remove Logging Ultra fast and performant if resource is low and program run through production environment
};

// All is not a level default function to log into terminal or console using std implementation
// the default log level is 7
export function wlog(...args);




