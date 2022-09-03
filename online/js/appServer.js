/*

*/
const windowTxt = document.getElementById('list');
const getTxt = document.getElementById('textSayId');
const buttTxt = document.getElementById('sayId');
buttTxt.addEventListener('click', () => {
    const txtVal = getTxt.value;
    sock.emit('message', txtVal)
    //printtxt(txtVal)
    //console.log(sock.emit('message', txtVal));
    getTxt.value = '';
})
function printtxt(txtVal) {
    const fragment = document.createDocumentFragment();
    let liNew = document.createElement("li");
    liNew.innerText = txtVal; 
    fragment.appendChild(liNew);
    windowTxt.appendChild(fragment);
}
const sock = io();
sock.on("message", printtxt);
