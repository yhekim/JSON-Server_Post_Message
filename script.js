const formConnect = document.getElementById("iletisim");
const txtNameLastName = document.getElementById("txtAdSoyad");
const txtMessage = document.getElementById("txtMesaj");
formConnect.addEventListener("submit", saveInformation)

/*
function saveInformation(e) {
    e.preventDefault();
    let sendMessage = txtNameLastName.value;
    let message = txtMessage.value;
    //console.log(sendMessage);
    //console.log(message);




    fetch('http://localhost:3000/mesajlar', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mesajGonderen: sendMessage,
                mesajIcerik: message
            }),
        })
        .then(response => response.json())
        .then(data => {
            alert('Veriler Başarılı şekilde kaydedildi:');
        })
        .catch((error) => {
            console.error('Hata Oluştu:', error);
        });
}
*/

async function saveInformation(e) {
    e.preventDefault();
    let sendMessage = txtNameLastName.value;
    let message = txtMessage.value;
    //console.log(sendMessage);
    //console.log(message);
    const data = {
        mesajGonderen: sendMessage,
        mesajIcerik: message
    }
    const serverAnswer = await fetch('http://localhost:3000/mesajlar', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    let datas = await serverAnswer.json();
    alert('Veriler Başarılı şekilde kaydedildi:');
    clear();



}
const clear = () => {
    txtNameLastName.value = "",
        txtMessage.value = ""

}