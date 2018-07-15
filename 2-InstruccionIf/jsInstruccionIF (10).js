function mostrar()
{
	//Genero el número RANDOM entre 1 y 10asd 
	
var numero;

numero= Math.floor((Math.random() * 10) + 1);
numero = parseInt(numero);

if (numero >8)
{alert("Excelente");
}
else if(numero > 3)
{alert("aprobado");
}
else
{alert("desaprobado");}
}//FIN DE LA FUNCIÓN