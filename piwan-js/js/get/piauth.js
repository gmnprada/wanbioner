'use strict';

(async()=>{

    const INFO = document.querySelector('#info');
    const scopes = ['username','payments','wallet_address'];

    function onIncompletePayment(payment){
        console.log("Auth User",payment);
    }

    async function Auth(){
        return await Pi.authenticate(scopes,onIncompletePayment);
    }

    if(Pi){
        //console.log("Pi Sdk Available Yay");
        try{
            Pi.init({ version: "2.0",sandbox:true});
            const user = await Auth();
            INFO.innerHTML(user);
        }catch(e){
            INFO.innerHTML(e);
        }
    }
})();