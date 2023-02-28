var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
function bootStrapAll() {

    if (!isBrowser()) throw Error("This is not browser environment");

    function onIncompletePayment(payment) {
        const INFO = document.querySelector('#info');
        INFO.innerHTML = payment;

    }

    async function Auth() {
        try {
            const INFO = document.querySelector('#info');
            INFO.innerHTML = "Trying Do authentication to Pi networks ....";
            const Pi = window.Pi;
            await Pi.init({ version: "2.0"});
            const scopes = ['username', 'payments'];
            let data = await window.Pi.authenticate(scopes, onIncompletePayment);
            //INFO.innerHTML = data;

            let username = data.user.username;
            INFO.innerHTML = `Welcome to πwan network ${username}`;

            let  send = JSON.stringify({access_token:data.accessToken,uid:data.user.uid});

            sessionStorage.setItem('uid',data.user.uid);
            await fetch('https://piwan.net/piusers',{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body:send
            });
            return;
        } catch (e) {
            const INFO = document.querySelector('#info');
            INFO.innerHTML = e.message;
        }
    }

    document.addEventListener('DOMContentLoaded', async (evt) => {
        const INFO = document.querySelector('#info');
        const btn = document.querySelector('#piauth');
        INFO.innerHTML = ``;
        btn.addEventListener('click', Auth);
    });


};

try {
    bootStrapAll();
} catch (e) {

}
