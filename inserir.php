<?php
require_once("./conexao.php");

$postjson = json_decode(file_get_contents("php://input"), true);

$nome = $postjson["nome"];
$data = $postjson["data"];
$local = $postjson["local"];
$imagem = $postjson["imagem"];
$data = array();

if ($nome == "" or $data == "" or $local == "" or $imagem == "") {
    $data = array(
        "return" => 400,
        "success" => false,
        "message" => "Dado(s) incompleto(s)!",
        "color" => "danger",
    );

    $result = json_encode($data);
    echo $result;
    exit;
}
$select = "INSERT INTO produto(produto_nome) VALUES('$nome')";
$query = $pdo->prepare($select);
$query->execute();
$result = $query->fetchAll(PDO::FETCH_ASSOC);
if (@count($result) > 0) {
    $data = array(
        "return" => 400,
        "success" => false,
        "message" => "Erro ao inserir!",
        "color" => "danger",
    );
} else {
    $data = array(
        "return" => 200,
        "success" => true,
        'message' => "Salvo com sucesso!",
        'color' => 'success'
    );
}

// if (mysqli_query($pdo, $select)) {



// } else {
//     $data = array(
//         "return" => 400,
//         "success" => false,
//         "message" => "Erro ao inserir!",
//         "color" => "danger",
//     );

//     $result = json_encode($data);
//     echo $result;
//     exit;
// }

$result = json_encode($data);
echo $result;
