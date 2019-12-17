<?php
 
function getHoroscope($date) {
    $horoscopeArray = array(
        "Stenbock"=>"12:22:01:19",
        "Vattumannen"=>"01:20:02:18",
        "Fiskarna"=>"02:19:03:20",
        "Väduren"=>"03:21:04:19",
        "Oxen"=>"04:20:05:20",
        "Tvillingarna"=>"05:21:06:20",
        "Kräftan"=>"06:21:07:22",
        "Lejonet"=>"07:23:08:22",
        "Jungfrun"=>"08:23:09:22",
        "Vågen"=>"09:23:10:22",
        "Skorpionen"=>"10:23:11:21",
        "Skytten"=>"11:22:12:21",
    );
 
    $inputDates = explode("-", $date);
    $inputMonth = (int)$inputDates[1];
    $inputDay = (int)$inputDates[2];
 
    $keys = array_keys($horoscopeArray);
 
    for ($i=0; $i < count($keys); $i++) { 
       
        $key = $keys[$i];
        $dateString = $horoscopeArray[$key];
        $dateArray = explode(":", $dateString);
        
        $fromMonth = (int)$dateArray[0];
        $fromDay = (int)$dateArray[1];
        $toMonth = (int)$dateArray[2];
        $toDay = (int)$dateArray[3];
    
        error_log($inputMonth . " " . $inputDay);
        
        if($inputMonth == $fromMonth) {
            if ($inputDay >= $fromDay) {
                return $key;
            } 
        } 
        
        if ($inputMonth == $toMonth) {
            if ($inputDay <= $toDay) {
                return $key;
            }
        }
    }
 
}
 
?>