function mostrar() {
    //variables
    var edad;
    var sexo;
    var nombre;
    var nombreMayor;
    var nombreMenor;
    var nombreHombreMenor;
    var edadHombreMenor;

    edad = parseInt(edad);
    var contador = 0;
    var contadorMayores = 0;
    var contadorMenores = 0;
    var contadorHombres = 0;
    var contadorMujeres = 0;
    var menorEdad;
    var mayorEdad;
    menorEdad = parseInt(menorEdad);
    mayorEdad = parseInt(mayorEdad);
    edadHombreMenor = parseInt(edadHombreMenor);


    //Validación:

    while (contador < 3) {
        nombre = prompt("Ingrese el nombre");
        edad = prompt("Ingrese la edad, de 0 a 100");
        edad = parseInt(edad);
        while (edad < 0 || edad > 100) {
            edad = prompt("Ingrese una edad valida de 0 a 100");
            edad = parseInt(edad);
        }
        sexo = prompt("Ingrese el sexo f o m");
        sexo = sexo.toLowerCase();
        while (!(sexo == "f" || sexo == "m")) {
            sexo = prompt("Solo existen dos generos, ingrese nuevamente.");
            sexo = sexo.toLowerCase();
        }
        
        contador++

        //algoritmos

        if (edad > 17) {
            contadorMayores++;
        } else if (edad < 17) {
            contadorMenores++;
        }
        if (sexo == "f") {
            contadorMujeres++;
        } else if (sexo == "m") {
            contadorHombres++;
        }
        if (contador == 1) {
            menorEdad = edad;
            mayorEdad = edad;
            nombreMayor = nombre;
            nombreMenor = nombre;
        }
        if (edad > menorEdad && edad < mayorEdad) {
            nombreHombreMenor = nombre;
            edadHombreMenor = edad;
        } else if (mayorEdad < edad) {
            mayorEdad = edad;
            nombreMayor = nombre;
        } else if (menorEdad > edad) {
            menorEdad = edad;
            nombreMenor = nombre;
        }
        if (sexo == "m" && (contadorHombres == 1 || edad < edadHombreMenor)) {
            nombreHombreMenor = nombre;
            edadHombreMenor = edad;
        }



    }

    //Mostrar

    document.write("La cantidad de mayores de edad es de " + contadorMayores + " personas" + "<br>");
    document.write("La cantidad de menores de edad es de " + contadorMenores + "personas" + "<br>");
    document.write("La cantidad de hombres es de " + contadorHombres + "<br>");
    document.write("La cantidad de mujeres es de " + contadorMujeres + "<br>");
    document.write("El nombre del menor de edad es " + nombreMenor + " y tiene " + menorEdad + " años." + "<br>");
    document.write("el nombre del mayor de edad es " + nombreMayor + " y tiene " + mayorEdad + " años" + "<br>");

    if (contadorHombres == 0) {
        document.write("No se han ingresado hombres" + "<br>")
    } else {
        document.write("El hombre menor es " + nombreHombreMenor + " y tiene " + edadHombreMenor + " años" + "<br>");
    }






}