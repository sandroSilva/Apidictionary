<?php
function consulta($fword)
    {
		$ch = curl_init();
		//chama o xml da API.
		curl_setopt($ch, CURLOPT_URL, "http://dicionario-aberto.net/search-xml/".$fword);
		curl_setopt($ch, CURLOPT_HEADER, 0);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$result = curl_exec($ch);
		curl_close($ch);
		echo $result;
    }
//inicia a função com o parâmetro recebido.
consulta($_REQUEST['word']);
?>

