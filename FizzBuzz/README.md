# Ejercicio FizzBuzz

Escribe una función que imprima números del 1 al 100. Sin embargo:

Si el número es divisible por 3, imprime "Fizz" en lugar del número.
Si el número es divisible por 5, imprime "Buzz" en lugar del número.
Si el número es divisible por ambos 3 y 5, imprime "FizzBuzz" en lugar del número.

## Paso a Paso de la Solución
Aquí les dejo una solución en JavaScript, que es un lenguaje común para entrevistas técnicas y fácil de entender.

## 1. Inicializa un bucle que recorra del 1 al 100
Vamos a usar un bucle for que recorra los números del 1 al 100.

```javascript

for (let i = 1; i <= 100; i++) {
  // Su lógica vendrá aquí
}
```
## 2. Verifica si el número es divisible por 3 y 5
Para los números que son divisibles por ambos, 3 y 5, imprimimos "FizzBuzz". Esto debe verificarse primero, ya que si verificamos por 3 o por 5 primero, se perderá la combinación.

```javascript

if (i % 3 === 0 && i % 5 === 0) {
  console.log("FizzBuzz");
}
```

## 3. Verifica si el número es divisible solo por 3
Si el número es divisible solo por 3, imprimimos "Fizz".

```javascript

else if (i % 3 === 0) {
  console.log("Fizz");
}
```

## 4. Verifica si el número es divisible solo por 5
Si el número es divisible solo por 5, imprimimos "Buzz".

```javascript

else if (i % 5 === 0) {
  console.log("Buzz");
}
```

## 5. Imprime el número si no es divisible ni por 3 ni por 5
Si ninguna de las condiciones anteriores se cumple, simplemente imprimimos el número.

```javascript

else {
  console.log(i);
}
```

### Código Completo
```javascript
    for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
    }
``` 

## Tips y Recursos para Explicar el Código en una Entrevista

Aquí dejo algunos consejos para que expliquen su razonamiento de forma clara y concisa:

### Explicar el Enfoque General:
"Primero, uso un bucle for para recorrer todos los números del 1 al 100. Luego, verifico si el número es divisible por 3 y 5, por 3, o por 5. Dependiendo del caso, imprimo el texto correspondiente o el número."

### Explicar las Condiciones Lógicas:
"Uso el operador && para verificar si el número es divisible por ambos 3 y 5, lo cual es clave porque, de otro modo, los múltiplos de 3 y 5 serían detectados por las otras condiciones primero."

### Manejo de Errores:
"Si encontrara un problema, como que el programa no imprime 'FizzBuzz' en los números que son múltiplos de ambos, revisaría el orden de las condiciones para asegurarme de que la verificación más específica se realiza primero."

### Optimización del Código:
"Este código es eficiente para el rango de números del 1 al 100, pero si el rango fuera mucho más grande, podríamos considerar optimizaciones como evitar repetir las divisiones."

## Recursos para Practicar
[LeetCode](https://leetcode.com/) Sección de problemas básicos

[freeCodeCamp](https://www.freecodecamp.org/learn) Sección de algoritmos básicos

[HackerRank](https://www.hackerrank.com/) Ejercicios de práctica

## Tips Finales para los Alumnos al Presentar su Código en Live-Coding

- Piensa en voz alta: Siempre explica lo que estás haciendo y por qué. 

- Divide el problema: Descomponer el problema en partes pequeñas y resuélvelas una por una.

- Muestra mejoras o alternativas: Si terminas antes de tiempo o ves una forma de optimizar el código, menciona que mejorarías el rendimiento o el manejo de errores.

- No te paralices por errores: Si cometes un error o no sabes cómo proceder, di lo que estás pensando. A veces, un entrevistador te dará pistas o consejos. Mantén la calma y sigue adelante.

- Haz pruebas a medida que avanzas: Es útil probar tu código a medida que lo escribes, especialmente en entrevistas en vivo. Eso te ayudará a detectar errores antes de finalizar la solución.
