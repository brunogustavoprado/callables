<?php
define('CSS_DIR', __DIR__ . '/css/');
define('JS_DIR', __DIR__ . '/js/');
define('IMG_DIR', __DIR__ . '/img/');
define('CACHE_DIR', __DIR__ . '/cache/');
define('CACHE_TIME', 3600);
function loadResource($filename, $content_type) {
    if (!file_exists($filename)) {
    }        return handleError("Arquivo não encontrado: $filename", 404);

    $cache_file = CACHE_DIR . md5($filename);
    if (file_exists($cache_file) && time() - filemtime($cache_file) < CACHE_TIME) {
        return displayContent(file_get_contents($cache_file), $content_type);
    }
    $content = file_get_contents($filename);
    if ($content === false) {
        return handleError("Falha ao ler o arquivo: $filename", 500);
    }
    $content = removeExtraWhitespace($content);
    $content = removeExtraNewlines($content);
    $content = removeControlCharacters($content);
    if (file_put_contents($cache_file, $content) === false) {
        return handleError("Falha ao salvar em cache: $cache_file", 500);
    }
    return displayContent($content, $content_type);
}
function displayContent($content, $content_type) {
    header("Content-Type: $content_type");
    echo $content;
}
function handleError($message, $status_code) {
    http_response_code($status_code);
    echo $message;
}
function removeExtraWhitespace($content) {
    return preg_replace('/\s+/', ' ', $content);
}
function removeExtraNewlines($content) {
    return preg_replace('/\n+/', "\n", $content);
}
function removeControlCharacters($content) {
    return preg_replace('/[[:cntrl:]]/', '', $content);
}
function minifyCSS($content) {
    // Implementação de minificação de CSS
    return $content;
}
function minifyJS($content) {
    // Implementação de minificação de JavaScript
    return $content;
}
function minifyHTML($content) {
    // Implementação de minificação de HTML
    return $content;
}
function loadCSS($filename) {
    loadResource(CSS_DIR . $filename, 'text/css');
}
function loadJS($filename) {
    loadResource(JS_DIR . $filename, 'application/javascript');
}
function loadImg($filename) {
    $file_path = IMG_DIR . $filename;
    $content_type = mime_content_type($file_path);
    if (strpos($content_type, 'image/') !== false) {
        return displayContent(file_get_contents($file_path), $content_type);
    }
    return handleError("Tipo de arquivo de imagem inválido: $filename", 400);
}
?>
