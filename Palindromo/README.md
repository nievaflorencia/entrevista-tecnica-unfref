# Verificar si una palabra o frase es un palíndromo

Un palíndromo es una palabra, número o frase que se lee igual de adelante hacia atrás que de atrás hacia adelante, ignorando espacios, puntuación y mayúsculas/minúsculas.

### Ejemplo de entrada y salida:

Entrada: "A man a plan a canal Panama"
Salida: True (es un palíndromo)

## Código para verificar si una cadena es un palíndromo
Este es el código que puedes usar para resolver el problema

```javascript
function isPalindrome(str) {
  // Eliminar espacios y caracteres no alfabéticos y convertir todo a minúsculas
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Verificar si la cadena es igual a su reverso
  const reversedStr = cleanedStr.split('').reverse().join('');
  
  return cleanedStr === reversedStr;
}

// Ejemplos de uso:
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("Hello world")); // false
```