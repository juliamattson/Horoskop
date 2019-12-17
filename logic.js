// Funktion för inputvalue
 
function add() {
    let inputDate = document.getElementById('input').value
    let url = "./serverSide/addHoroscope.php"
    let method = "POST"
    
    let formData = new FormData()
    formData.set("date", inputDate) 
    makeRequest(url, method, formData, (result) => {
        console.log(result);       
        if(result) {
            printHoroscope() 
        }
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
        if(result) {
            printHoroscope() 
        }
    })
}
 
function erase() {  
    let inputDate = document.getElementById('input').value
    let url = "./serverSide/deleteHoroscope.php"
    let method = "DELETE"
    
    let formData = new FormData()
    formData.set("date", inputDate) 
        makeRequest(url, method, formData, (result) => {
        console.log(result);
        if(result) {
            printHoroscope() 
        }
    })
}
 
function makeRequest(url, method, formData, callback) {
    fetch(url, {
        method: method,
        body: formData
    }).then((response) => {
        return response.json()
    }).then((result) => {
        callback(result)
    }).catch((err) => {
        console.log("Error: ", err)
    })   
}

function printHoroscope() {
    makeRequest("./serverSide/viewHoroscope.php", "GET", undefined, (result) => {
        if(result) {
            document.getElementById("showHoroscope").innerHTML = result
        } else {
            document.getElementById("showHoroscope").innerHTML = ""      
            console.log(result)
        }
    })
}

printHoroscope()