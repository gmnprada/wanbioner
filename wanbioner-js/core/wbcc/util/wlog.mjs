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

Log Format Single Line
(PID)[Severity] Information

Log Format Multi Line
(PID)[Severity] Information
Process Name :
Line Number  :
Function     :

Refrence is Modified alot from amultios log implementation in nodejs
*/

// Only use single digit as decimal only 10 based number and symbol
// this log format is mapped based on severity impact to the system
export const wlog_level = {
    all       : 0, // Logging All information of the system in log (decrease perfomance) and represent null
    emergency : 1, // System is Unusable or Process Died (System Is Not Running and Exit Code)
    alert     : 2, // System need Immediate action as something trigger alert (hardware failure ,misconfigured , intrusion)
    critical  : 3, // System running on critical conditions that need manual maintainer intervention (missing dependency and such)
    error     : 4, // System is running but had several error condition
    warn      : 5, // System is running on warning condition might trigger critical or emergency status if ignored often
    notice    : 6, // System log something that might be noticed by maintainer
    info      : 7, // Normal log Condition information
    debug     : 8, // Debugging log
    disable   : 9  // Remove Logging Ultra fast and performant if resource is low and program run through production environment on well known behavior
};

// highest level is no logging and lowest level is log all based on severity
export const opt_log_level = 7;
// true for multi line and false for single line
export const opt_log_multi = false;

// All is not a severity level but optional options to enable all other log
// Disable also not a severity level but an optional options to disable all other log to aim for highest perfomance
// the default log level is 7 info
export function wlog(...args){
    return wlog_info(args);
};

// Log Severity Impact level 1
// exit process if this called
export function wlog_emergency(...args){
    if(opt_log_level === 9){
        return;
    }

}

// Log Severity Impact level 2 
export function wlog_alert(...args){
    if(opt_log_level === 9){
        return;
    }
}

// Log Severity Impact level 3 
export function wlog_critical(...args){
    if(opt_log_level === 9){
        return;
    }
}

// Log Severity Impact Level 4
export function wlog_error(...args){
    if(opt_log_level === 9){
        return;
    }
}

// Severity Impact Level 5
export function wlog_warn(...args){
    if(opt_log_level === 9){
        return;
    }
}
// Severity Impact Level 6
export function wlog_notice(...args){
    if(opt_log_level === 9){
        return;
    }
}

// Severity Impact Level 7
export function wlog_info(...args){
    if(opt_log_level === 9){
        return;
    }
}

// Severity Impact Level 8 
export function wlog_debug(...args){
    if(opt_log_level === 9){
        return;
    }
}



