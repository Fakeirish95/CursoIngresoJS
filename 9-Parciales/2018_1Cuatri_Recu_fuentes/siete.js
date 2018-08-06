/* 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),la edad y el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert: 
a) El promedio de las notas totales. V 
b) La nota más baja y el sexo de esa persona. V
c) La cantidad de varones mayores a 18, que su nota haya sido mayor o igual a 6. V
d) El sexo y la nota del más joven 
d) La edad y la nota de la primera mujer ingresada o informar si no hubo ninguna mujer.

*/

function mostrar()
{
	//variables
    var nota;
    nota=parseInt(nota);
    var contadorNotas=0;
    var notaBaja;
    var sexoNotaBaja;
    var contador=0;
    var sexoJoven;
    var notaJoven;
    notaJoven=parseInt(notaJoven);
    
    var edad;
    edad=parseInt(edad);
    var sumaNotas=0;
    var promedioNotas;
    sumaNotas=parseInt(sumaNotas);
    promedioNotas=parseInt(promedioNotas);
    var contadorAprobadosHombres=0;
    
    var contadorMujeres=0;
    var edadMujer;
    var notaPrimeraMujer;
    var bandera=0;
    var edadDelMasJoven;


    //entrada y validacion de datos.
    while (contador < 5)
    {
        nota=prompt("ingrese la nota del estudiante entre 0 y 10");
        nota=parseInt(nota);
        while (nota < 0 || nota > 10)
        {
            nota=prompt("Error, ingrese la nota entre 0 y 10");
        }
        sexo=prompt("Ingrese el genero del estudiante (f ó m");
        while (!(sexo=="f" || sexo =="m"))
        {
            sexo=prompt("Solo existen dos generos. ingrese f ó m");
        }
        edad=prompt("ingrese la edad del estudiante");
        edad=parseInt(edad);
        while (edad <0 || edad >100)
        {
            edad=prompt("ingrese una edad valida");
        }

        contador++;

        //algoritmos

        if (nota >= 0 || nota <= 10)
        {
            contadorNotas++
            sumaNotas=sumaNotas+nota;
        }

        if (contador==1)
        {
            notaBaja=nota;
            sexoNotaBaja=sexo;
            sexoJoven=sexo

            

        }
        else if (nota < notaBaja)
        {
            notaBaja=nota;
            sexoNotaBaja=sexo;
        }
        if (sexo == "m" && edad > 18 && nota >= 6)
        {
            contadorAprobadosHombres++;
        }

        if (sexo=="f")
        {
            contadorMujeres++;
        }
        if (contadorMujeres==1 && sexo == "f")
        {
            edadMujer=edad;
            notaPrimeraMujer=nota;
        }
        if ( edad<edadDelMasJoven || bandera==0)
        {
            sexoJoven=sexo;
            edadDelMasJoven=edad;
            notaJoven=nota;
            bandera=1;
        }
    


    }

    promedioNotas=sumaNotas/contadorNotas;

//mostrar

alert ("El promedio total de las notas es: " + promedioNotas);
alert ("La nota mas baja es: " + notaBaja + " y el genero del estudiante es " + sexoNotaBaja);
alert ("la cantidad de hombres aprobados con 6 en adelante es de: " + contadorAprobadosHombres);
alert ("la nota del mas joven es " + notaJoven + " y genero es " + sexoJoven);
if (contadorMujeres>0){
alert ("la nota de la primera mujer ingresada es " + notaPrimeraMujer + " y su edad es " + edadMujer);
}
else{
    alert ("No se ha ingresado ninguna mujer");
}





}
