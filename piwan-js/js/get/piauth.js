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
            await Pi.init({ version: "2.0", sandbox: false });
            const scopes = ['username', 'payments'];
            let data = await window.Pi.authenticate(scopes, onIncompletePayment);
            INFO.innerHTML = data;

            return data;
        } catch (e) {
            const INFO = document.querySelector('#info');
            INFO.innerHTML = e;
        }
    }

    document.addEventListener('DOMContentLoaded', async (evt) => {
        const INFO = document.querySelector('#info');
        const btn = document.querySelector('#piauth');
        btn.addEventListener('click', Auth);
        console.log("dom fully loaded");
    });


};

try {
    bootStrapAll();
} catch (e) {

}

if (window) {
    window.onload((ev) => {
        try {
            bootStrapAll();
        } catch (e) {

        }
    });
}
