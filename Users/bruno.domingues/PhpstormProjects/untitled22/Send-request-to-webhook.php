<?php
$data = array(
    '07854946183' => 'Bruno',
    '34355946183' => 'Ana',
    '07567634354' => 'Maria',
    '35657646757' => 'Pedro',
    '74576946183' => 'Marcos',
    '98675425647' => 'Miguel',
    '25436765745' => 'Julia'
);


$url = 'https://webhook.site/4e9f9298-f2ec-4853-9f28-1a2293670288';


$ch = curl_init($url);


curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);


$result = curl_exec($ch);


if (curl_errno($ch)) {
    echo 'Erro ao enviar a solicitação: ' . curl_error($ch);
}

// Fechar a sessão cURL
curl_close($ch);

// Exibir a resposta
echo $result;

