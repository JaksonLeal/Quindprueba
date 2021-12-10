$(document).ready(function() { 
	//el codigo dentro se ejecuta cuando toda la pagina este lista
}); 
 
 async function operar(x){ //async function devuelve elemento promise
	let datos = {}; // variable let solo puede ser usada en el metodo
	
	datos.num1 = document.getElementById('num1').value;
	datos.num2 = document.getElementById('num2').value;
	
	let urlOpe = '';
	if(x=='+'){urlOpe = 'sumar';}
		else if(x=='-'){urlOpe = 'restar';}
			else if(x=='*'){urlOpe = 'multiplicar';}
				else if(x=='/'){urlOpe = 'dividir';}
	
	const request = await fetch(urlOpe, { //await espera hasta que el promise este resuelto para continuar
    	method: 'POST', //metodo post se usa para enviar datos al servidor
    	headers: {
      	'Accept': 'application/json',
      	'Content-Type': 'application/json'
    		}, 
		body: JSON.stringify(datos)
    });
    const respuesta = await request.json();
    
    document.querySelector('#respuesta').innerHTML = respuesta;
    
 }
 