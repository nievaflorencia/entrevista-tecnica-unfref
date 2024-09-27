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
  