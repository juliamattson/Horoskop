// Funktion för inputvalue
 
function add() {
    let inputDate = document.getElementById('input').value
    let url = "./serverSide/addHoroscope.php"
    let method = "POST"
    
    let formData = new FormData()
    formData.set("date", inputDate) 
    makeRequest(url, method, formData, (result) => {
    console.log(result);
        // kalla på get för att kunna printa ut horoscope på sidan  
    })
}
 
function update() {
    let inputDate = document.getElementById('input').value
    let url = "./serverSide/updateHoroscope.php"
    let method = "POST"
    
    let formData = new FormData()
    formData.set("date", inputDate) 
    makeRequest(url, method, formData, (result) => {
    console.log(result);
        // kalla på get för att kunna printa ut horoscope på sidan  
    })
}
 
function erase() {  
    let inputDate = document.getElementById('input').value
    let url = "./serverSide/deleteHoroscope.php"
    let method = "POST"
    
    let formData = new FormData()
    formData.set("date", inputDate) 
    makeRequest(url, method, formData, (result) => {
    console.log(result);
        // kalla på get för att kunna printa ut horoscope på sidan  
    })
}
 
function makeRequest(url, method, formData, callback) {
    fetch(url, {
        method: method,
        body: formData
    }).then((response) => {
        console.log(response)
        return response.json()
    }).then((result) => {
        callback(result)
    }).catch((err)=>{
        console.log("Error: ", err)
    })   
}