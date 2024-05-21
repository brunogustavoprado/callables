<?php

$l1 = true;
$l2 = false;
$l3 = true;
$l4 = false;
$l5 = true;
$l6 = false;
$l7 = true;
$l8 = false;

$locals = array($l1, $l2, $l3, $l4, $l5, $l6, $l7, $l8);

$contador = 0;
foreach ($locals as $local){
    if ($local) {
        $contador++;
    }
}

echo "Quantidade de locais que eu ja fui é: $contador";