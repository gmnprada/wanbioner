var isBrowser=new Function("try {return this===window;}catch(e){ return false;}");
async function init(){

    if(!isBrowser()) throw Error("This is not browser environment");

    window.addEventListener('DOMContentLoaded',async (evt)=>{
        const INFO = document.querySelector('#info');
        const scopes = ['username','payments','wallet_address'];
        console.log("Document Fully Loaded");
        try{
            const Pi = window.Pi;
            let LoadPi = await Pi.init({ version: "2.0",sandbox:true});
            let User = await Auth();
            const user = await Auth();
            INFO.innerHTML(user);
            console.log(User);
        }catch(e){
            INFO.innerHTML(e);
        }
    });

    function onIncompletePayment(payment){
        console.log("Auth User",payment);
    }

    async function Auth(){
        return await Pi.authenticate(scopes,onIncompletePayment);
    }
};

try{
    init();
}catch(e){
    console.error(e);
}
