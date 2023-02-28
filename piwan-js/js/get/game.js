var isBrowser = new Function("try {return this===window;}catch(e){ return false;}");

function BootStrap(){
    if (!isBrowser()) throw Error("This is not browser environment");

    try{

    }catch(e){

    }

    document.addEventListener('DOMContentLoaded', async (evt) => {
        const INFO = document.querySelector('#info');
        let data = sessionStorage.getItem('uid');
        if(!data){
            isAuth = false;
            btn.disabled = isAuth ? false : true;
        }else{
            isAuth = true;
            btn.disabled = isAuth ? false : true;
        }
    });
}

