$(document).ready(function() {
	//on ready
});

async function sumar(){
	let datos = {};
	
	datos.num1 = document.getElementById('num1').value;
	datos.num2 = document.getElementById('num2').value;
	
	const request = await fetch('sumar', {
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