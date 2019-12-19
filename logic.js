// Funktion för att lägga till horoskop 
function add() {
    let inputDate = document.getElementById('input').value
    if(inputDate.length) {
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
    } else {
        console.log("Välj datum först") // Om inget datum valts i input:en
    }
}
 
// Funktion för att uppdatera horoskop
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
 
// Funktion för att radera horoskop
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
 
// Funktion innehållande fetch-anropet
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

// Funktion för att visa horoskopet på hemsidan, alternativt tömma div:en efter klick på "radera"-knappen
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