/*
 * Copying From Amultios Project
 *
 * This File is part of Amultios Project 
 * Adhoc Multiplayer Online System Ecosystem
 * -----------------------------------------------------------------------
 * Licensed under the 3 Clause BSD license, see LICENSE 
 *
 * Copyright (c) 2017 Amultios Project
 * Copyright (c) 2019 PT. Pasupati Tunas Indonesia
 * Copyright (c) 2021 Niskala Creative Studio
 * 
 * Author 
 * Shri Brahmana (adhenovan@gmail.com, shribrahmana@gmail.com)
 * 
 * Contributor
 * Radis3D
 * Ezard
 * Daipah
 * 
 * 
 * 
 * 
 * 
 * 
*/

import {stdout} from "node:process";
import utils from 'node:util';
import chalk from "chalk";
chalk.level = 1;

import { readFile } from 'fs/promises';
const json = JSON.parse(
  await readFile(
    new URL('./.config.json', import.meta.url)
  )
);


const C_LOGGING_ENABLE = json.ENABLE_LOGGING == "TRUE" ? true : false;
class AMULTIOS_LOG {

    db_log(...args){
        if(!C_LOGGING_ENABLE) return;
        try{
            throw new Error();
        }catch(e){
            let stack = e.stack.split("\n");
            let frame = stack.length > 2 ? stack[2] : stack[stack.length-1];
            let frame_no_at = frame.replace("    at ","");
            let stack_split = frame_no_at.split(" ");
            let fn_name = "Main File";
            let fn_path = stack_split[stack_split.length-1];
            if(stack_split.length > 1){
                fn_name = stack_split.slice(0,-1).join(" ");
                fn_path = stack_split[stack_split.length-1];
                fn_path = fn_path.replace("(","");
                fn_path = fn_path.replace(")","");
            }

            let log = utils.format(args[0]);
            log = log.replace("Executing (default): ","[EXE] ");
            let msg=`[DATABASE](${process.pid})[D]:${log}\nFunc : ${chalk.green(fn_name)}\nLine : ${chalk.blue(fn_path)}\n`;
            stdout.write(msg);
        }        
    }

    debug_log(...args){
        if(!C_LOGGING_ENABLE) return;
        try{
            throw new Error();
        }catch(e){
            let stack = e.stack.split("\n");
            let frame = stack.length > 2 ? stack[2] : stack[stack.length-1];
            let frame_no_at = frame.replace("    at ","");
            let stack_split = frame_no_at.split(" ");
            let fn_name = "Main File";
            let fn_path = stack_split[stack_split.length-1];
            if(stack_split.length > 1){
                fn_name = stack_split.slice(0,-1).join(" ");
                fn_path = stack_split[stack_split.length-1];
                fn_path = fn_path.replace("(","");
                fn_path = fn_path.replace(")","");
            }

            let log = utils.format(...args);
            let msg=`[${process.title}](${process.pid})[D]: ${log}\nFunc : ${chalk.green(fn_name)}\nLine : ${chalk.blue(fn_path)}\n`;
            stdout.write(msg);
        }        
    }

    error_log(...args){
        if(!C_LOGGING_ENABLE) return;
        try{
            throw new Error();
        }catch(e){
            let stack = e.stack.split("\n");
            let frame = stack.length > 2 ? stack[2] : stack[stack.length-1];
            let frame_no_at = frame.replace("    at ","");
            let stack_split = frame_no_at.split(" ");
            let fn_name = "Main File";
            let fn_path = stack_split[stack_split.length-1];
            if(stack_split.length > 1){
                fn_name = stack_split.slice(0,-1).join(" ");
                fn_path = stack_split[stack_split.length-1];
                fn_path = fn_path.replace("(","");
                fn_path = fn_path.replace(")","");
            }
            let log = utils.format(...args);
            let msg=`[${process.title}](${process.pid})${chalk.red("[E]")}: ${log}\nFunc : ${chalk.green(fn_name)}\nLine : ${chalk.blue(fn_path)}\n`;
            stdout.write(msg);
        }    
    }

    warn_log(...args){
        if(!C_LOGGING_ENABLE) return;
        try{
            throw new Error();
        }catch(e){
            let stack = e.stack.split("\n");
            let frame = stack.length > 2 ? stack[2] : stack[stack.length-1];
            let frame_no_at = frame.replace("    at ","");
            let stack_split = frame_no_at.split(" ");
            let fn_name = "Main File";
            let fn_path = stack_split[stack_split.length-1];
            if(stack_split.length > 1){
                fn_name = stack_split.slice(0,-1).join(" ");
                fn_path = stack_split[stack_split.length-1];
                fn_path = fn_path.replace("(","");
                fn_path = fn_path.replace(")","");
            }

            let log = utils.format(...args);
            let msg=`[${process.title}](${process.pid})${chalk.yellow("[W]")}: ${log}\nFunc : ${chalk.green(fn_name)}\nLine : ${chalk.blue(fn_path)}\n`;
            stdout.write(msg);
        }    
    }

    //use this log to bypass environment logs
    info_log(...args){
        try{
            throw new Error();
        }catch(e){
            let stack = e.stack.split("\n");
            let frame = stack.length > 2 ? stack[2] : stack[stack.length-1];
            let frame_no_at = frame.replace("    at ","");
            let stack_split = frame_no_at.split(" ");
            let fn_name = "Main File";
            let fn_path = stack_split[stack_split.length-1];
            if(stack_split.length > 1){
                fn_name = stack_split.slice(0,-1).join(" ");
                fn_path = stack_split[stack_split.length-1];
                fn_path = fn_path.replace("(","");
                fn_path = fn_path.replace(")","");
            }

            let log = utils.format(...args);
            let msg=`[${process.title}](${process.pid})[I]: ${log}\nFunc : ${chalk.green(fn_name)}\nLine : ${chalk.blue(fn_path)}\n`;
            stdout.write(msg);
        }    
    }

    info_error_log(...args){
        try{
            throw new Error();
        }catch(e){
            let stack = e.stack.split("\n");
            let frame = stack.length > 2 ? stack[2] : stack[stack.length-1];
            let frame_no_at = frame.replace("    at ","");
            let stack_split = frame_no_at.split(" ");
            let fn_name = "Main File";
            let fn_path = stack_split[stack_split.length-1];
            if(stack_split.length > 1){
                fn_name = stack_split.slice(0,-1).join(" ");
                fn_path = stack_split[stack_split.length-1];
                fn_path = fn_path.replace("(","");
                fn_path = fn_path.replace(")","");
            }

            let log = utils.format(...args);
            let msg=`[${process.title}](${process.pid})[IE]: ${log}\nFunc : ${chalk.green(fn_name)}\nLine : ${chalk.blue(fn_path)}\n`;
            stdout.write(msg);
        }    
    }

    // this is a broadcast of logs to available networks!
    audit_log(){

    }
}

const LOG_INTERNAL = new AMULTIOS_LOG();

// This is for development purpose
export const db_log = LOG_INTERNAL.db_log;
export const debug_log = LOG_INTERNAL.debug_log;
export const error_log = LOG_INTERNAL.error_log;
export const info_log = LOG_INTERNAL.info_log;
export const info_error_log = LOG_INTERNAL.info_error_log;
export const warn_log = LOG_INTERNAL.warn_log;

const LOG = {debug_log,error_log,info_log,info_error_log,warn_log};
export default LOG;