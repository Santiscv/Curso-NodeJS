const calcularPromedio = (numeros) => {
    let suma = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
  
    const promedio = suma / numeros.length;
  
    return promedio;
  };
  
  const arregloDeNumeros = [1, 2, 3, 4, 5, 9, 8];
  const resultado = calcularPromedio(arregloDeNumeros);
  console.log(resultado);
  