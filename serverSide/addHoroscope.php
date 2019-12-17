<?php 
 
require('./getHoroscope.php');
session_start();
 
if(isset($_SERVER['REQUEST_METHOD'])) {
 
    if($_SERVER['REQUEST_METHOD'] === 'POST') {
 
        if(isset($_POST['date'])) {
 
            $horoscope = getHoroscope($_POST['date']); 
 
            $_SESSION["horoscope"] = serialize($horoscope);
 
            echo json_encode(unserialize($_SESSION["horoscope"]));
            exit;
        } else {
            echo json_encode("name is not set in body");
            exit;
        }
 
    }else { 
        echo json_encode("not a POST method");
        exit;
    }
    
    } else {
    echo json_encode("No valid request");
    exit;
}
?>