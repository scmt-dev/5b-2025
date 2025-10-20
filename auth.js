const API_URL = 'https://wpitfaredsxfeudbwuzd.auth.ap-southeast-1.nhost.run/v1'

function showMessage(message, type = 'success') {
    const messageElement = document.getElementById('message');
    switch(type) {
        case 'success':
            messageElement.style.color = 'green';
            break;
        case 'error':
            messageElement.style.color = 'red';
            break;
        case 'warning':
            messageElement.style.color = 'orange';
            break;
        default:
            messageElement.style.color = 'black';
            break;
    }
    messageElement.innerText = message;
}

const signIn = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if(!email) {
        showMessage('Please enter email', 'warning');
        return
    }
    if(!password) {
        showMessage('Please enter password', 'warning');
        return
    }

    const response = await fetch(API_URL + '/signin/email-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    const data = await response.json();
    if(response.status === 401) {
        showMessage(data.message || 'Invalid email or password' , 'error');
        return;
    }
    if(response.status === 200) {
        showMessage('Sign in successfully');
    }
    console.log(data);
}