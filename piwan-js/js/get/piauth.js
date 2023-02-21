'use strict';

(async()=>{
    const scopes = ['payments'];

    function onIncompletePayment(payment){
        console.log("Auth User",payment);
    }

    async function Auth(){
        return Pi.authenticate(scopes,onIncompletePayment);
    }

    if(Pi){
        console.log("Pi Sdk Available Yay");
        Pi.init({ version: "2.0",sandbox:true});

        const user = await Auth();
    }
})();