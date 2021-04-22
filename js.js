let but = document.getElementsByTagName('button'),
    fBlock = document.getElementsByClassName('fblock'),
    sBlock = document.getElementsByClassName('sblock'),
    display = true;

but[0].onclick = ()=>{
    if(display == true){
    fBlock[0].style.backgroundColor = 'white';
    sBlock[0].style.visibility = 'hidden';
    display = false;
    } else {
        fBlock[0].style.backgroundColor = 'red';
        sBlock[0].style.visibility = 'visible';
        display = true;
    }
};