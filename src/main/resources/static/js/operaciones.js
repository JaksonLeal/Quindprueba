$(document).ready(function() { 
	//el codigo dentro se ejecutacuando toda la pagina este lista
});

async function sumar(){ //async function devuelve elemento promise
	let datos = {};  // variable let solo puede ser usada en el metodo
	
	datos.num1 = document.getElementById('num1').value;
	datos.num2 = document.getElementById('num2').value;
	
	const request = await fetch('sumar', { //await espera hasta que el promise este resuelto para continuar
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
 
 async function restar(){
	let datos = {};
	
	datos.num1 = document.getElementById('num1').value;
	datos.num2 = document.getElementById('num2').value;
	
	const request = await fetch('restar', {
    	method: 'POST',
    	headers: {
      	'Accept': 'application/json',
      	'Content-Type': 'application/json'
    		}, 
		body: JSON.stringify(datos)
    });
    const respuesta = await request.json();
    
    document.querySelector('#respuesta').innerHTML = respuesta;
    
 }
 
 async function multiplicar(){
	let datos = {};
	
	datos.num1 = document.getElementById('num1').value;
	datos.num2 = document.getElementById('num2').value;
	
	const request = await fetch('multiplicar', {
    	method: 'POST',
    	headers: {
      	'Accept': 'application/json',
      	'Content-Type': 'application/json'
    		}, 
		body: JSON.stringify(datos)
    });
    const respuesta = await request.json();
    
    document.querySelector('#respuesta').innerHTML = respuesta;
    
 }
 
 async function dividir(){
	let datos = {};
	
	datos.num1 = document.getElementById('num1').value;
	datos.num2 = document.getElementById('num2').value;
	
	const request = await fetch('dividir', {
    	method: 'POST',
    	headers: {
      	'Accept': 'application/json',
      	'Content-Type': 'application/json'
    		}, 
		body: JSON.stringify(datos)
    });
    const respuesta = await request.json();
    
    document.querySelector('#respuesta').innerHTML = respuesta;
    
 }