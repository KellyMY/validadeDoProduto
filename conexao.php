<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Request');
header('Content-Type: application/json; charset=utf-8');

$database = 'validadeproduto';
$host = 'localhost';
$user = 'root';
$password = '';

@session_start();

try{
$pdo = new PDO("mysql:dbname=$database;host=$host", "$user","$password");
return $pdo;
}catch(Exception $e){
    echo 'Erro ao conectar com o banco de dados! '.$e;
}
