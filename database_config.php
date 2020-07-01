<?php
// Change all the informations as needed

  $servername = 'localhost';
  $port = 3306; //
  $username = 'root'; // this is the default for XAMPP.
  $password = '';
  $dbname = 'database';
  $table = "table";

  $db = new mysqli($servername, $username, $password, $dbname) or die("Unable to connect");

  echo "Success, connected to the database MySQL with PHP"
?>
