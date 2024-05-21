<?php
$varTeste = "Hello";
function olaMundo() : string
{
    echo "Olá mundo!";
}

function execOneFunction(callable $function)
{
    echo "Executando uma função";
    echo $function;
}

$teste = function () use ($varTeste)
{
    return "Olá Mundo";
};

execOneFunction("olaMundo");

var_dump($teste);

