<?php 
 
session_start();
 
if(isset($_SERVER['REQUEST_METHOD'])) {
 
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
 
        if(isset($_POST['date'])) {
 
            $_SESSION["horoscope"] = serialize($_POST["date"]);
 
            echo json_encode(unserialize($_SESSION["horoscope"]));
        } else {
            
            echo json_encode("name is not set in body");
        }
 
    }else {
            
        echo json_encode("not a POST method");
    }
 
} else {
 
    echo json_encode("No valid request");
}
 
?>