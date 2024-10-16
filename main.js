function Strength(password){
    let i = 0;
    if(password.length > 6){
        i++;
    }
    if(password.length >= 10){
        i++;
    }
    if(/[A-Z]/.test(password)){
        i++;
    }
    if(/[0-9]/.test(password)){
        i++;
    }
    if(/[A-Za-z0-9]/.test(password)){
        i++;
    }
    // Eğer şifre mükemmel bir seviyede ise (örneğin 12 karakter, büyük harf, küçük harf ve sayı içeriyorsa)
    if(password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)){
        i++;
    }
    return i;
}

let container = document.querySelector('.container');
document.addEventListener("keyup", function(e){
    let password = document.querySelector('#myPassword').value;
    
    let strength = Strength(password);
    if(strength <= 2){
        container.classList.add('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
        container.classList.remove('perfect');
    } else if(strength >= 2 && strength <= 4){
        container.classList.remove('weak');
        container.classList.add('medium');
        container.classList.remove('strong');
        container.classList.remove('perfect');
    } else if(strength === 5){
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
        container.classList.remove('perfect');
    } else if(strength === 6){
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
        container.classList.add('perfect');
    }
});

let pswrd = document.querySelector('#myPassword');
let show = document.querySelector('.show');
show.onclick = function(){
    if(pswrd.type === 'password'){
        pswrd.setAttribute('type', 'text');
        show.classList.add('hide');
    }
    else{
        pswrd.setAttribute('type', 'password');
        show.classList.remove('hide');
    }
}