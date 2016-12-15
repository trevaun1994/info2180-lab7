<?php

$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'world';

$conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $country = $_GET['country'];
    $all = $_GET['all'];
    
    if ($all) {
        $sql = "SELECT * FROM countries";
    } else {
        $sql = "SELECT * FROM countries WHERE name ='$country'";
    }
    $result = $conn->prepare($sql);
    $result->execute();
    
    echo '<ul>';
    
    while ($row = $result->fetch()) {
        echo '<li>' . $row['name'] . ' is ruled by ' . $row['head_of_state'] . '</li>';
    }
    echo '</ul>';
}
?>
