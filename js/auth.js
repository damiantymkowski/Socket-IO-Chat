const userRegister = () =>{
    const registerURL = 'Whatever/server/adduser.php';
    const registerButton = document.querySelector('#createAccountBtn');
    const boxInfo = document.querySelector('.welcomeBox__loginForm--text');
    
    registerButton.addEventListener("click", ()=>{
        
        const loginInput = document.querySelector('#loginNickname').value;
        const passwordInput = document.querySelector('#loginPassword').value;
    
    const dataUser = {
        name: loginInput,
        password: passwordInput
    }
    
    const fetchAuthOptions = {
        method: 'POST',
        body: JSON.stringify(dataUser),
        headers: {
            'Content-Type': 'application/json'
        }
    } 
    const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).{8,30}/;
    
    if(!passwordRegex.test(passwordInput)){
        boxInfo.textContent = 'Error! Wrong password. Password must have minimum one uppercase letter, one number and one special character.';
        boxInfo.style.color = "red";
    }else{
    fetch(registerURL,fetchAuthOptions)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(res.status);
            }
        })
        .then(res => {
            let resStatus = res.status;
            switch(resStatus){
                case 0:
                    boxInfo.textContent = 'Welcome in Whatever! Your account is ready to use.';
                    boxInfo.style.color = "#42a742";
                    break
            }
        })
    }
    });
    }
    export {userRegister};
