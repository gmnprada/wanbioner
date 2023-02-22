var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
async function init() {

    if (!isBrowser()) throw Error("This is not browser environment");

    async function Auth() {
        try {
            const scopes = ['username', 'payments'];
            let data = await window.Pi.authenticate(scopes, onIncompletePayment);
            return data;
        } catch (e) {
            console.log(e);
        }
    }

    function onIncompletePayment(payment) {
        console.log("Auth User", payment);
    }

    window.addEventListener('DOMContentLoaded', async (evt) => {
        const INFO = document.querySelector('#info');
        const btn = document.querySelector('#piauth');
        btn.addEventListener('click', Auth);
        console.log("Document Fully Loaded");
        try {
            const Pi = window.Pi;
            await Pi.init({ version: "2.0", sandbox: false });
            console.log(User);
        } catch (e) {
            INFO.innerHTML(e);
        }


    });


};

try {
    init();
} catch (e) {
    console.error(e);
}