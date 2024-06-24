const http = require('http');
const fs = require('fs');
const path = require('path');

const directorioImagen = 'C:/TrabajosNode'; 

const servidor = http.createServer((pedido, respuesta) => {
  respuesta.writeHead(200, { 'Content-Type': 'text/html' });

  // Ruta completa de la imagen
  const rutaImagen = path.join(directorioImagen, 'CristianBrenes.jpg');

  // Lee el contenido del archivo de imagen
  fs.readFile(rutaImagen, (error, imagen) => {
    if (error) {
      console.log(error);
      respuesta.end('Error al cargar la imagen');
    } else {
      respuesta.write(`<!doctype html>
<html>
<head>
 <title>CV Cristian Brenes Víquez.js</title>
  <meta charset="UTF-8">
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
      background-color: #f4f4f4;
      color: #333;
    }
    h1 {
      text-align: left;
      color: #333;
    }
    .container {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 30px;
    }
    .nav {
      background-color: #fff;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
    .nav img {
      max-width: 100%;
      border-radius: 30%;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .section {
      margin-bottom: 30px;
    }
    .section h2 {
      color: #007bff;
      border-bottom: 2px solid #007bff;
      padding-bottom: 5px;
      font-size: 1.5em;
    }
    .section p {
      margin: 10px 0;
    }
    .section ul {
      margin: 10px 0;
      padding-left: 20px;
    }
    .section ul li {
      margin-bottom: 5px;
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="nav">
      <div class="section">
        <img src="data:image/jpeg;base64,${imagen.toString('base64')}" alt="Cristian Brenes">
        <p>Email: bvcris1@gmail.com</p>
        <p>Teléfono: (+506) 60788046</p>
        <p>Dirección: Cartago, Costa Rica</p>
      </div>

      <div class="section">
        <h2>Idiomas</h2>
        <ul>
          <li>Español: nativo</li>
          <li>Inglés: avanzado</li>
        </ul>
      </div>

      <div class="section">
        <h2>Formación</h2>
        <p>2024 <br>
        Diplomado Tecnologías de la Información <br>
        Colegio Universitario de Cartago
        </p>  
      </div>

      <div class="section">
        <h2>Certificación</h2>
        <p> 
        Scrum Foundation Professional Certification - SFPC <br>
        </p>  
      </div>
    </div>

    <div>
      <h1> Cristian Brenes Víquez</h1>
      <div class="section">
        <h2>Objetivo profesional</h2>
        <p style="text-align: justify;">
          Buscar una posición donde pueda aplicar mis habilidades en programación y mi conocimiento en tecnologías emergentes 
          para contribuir al desarrollo de soluciones innovadoras, mientras continúo aprendiendo y creciendo profesionalmente en un entorno colaborativo.
        </p>
      </div>

      <div class="section">
        <h2>Experiencia en la carrera</h2>
        <ul>
          <li>Desarrollo de programas de escritorio en Python, C++, C#, JAVA y Visual Basic</li>
          <li>Desarrollo de páginas web en C# y en Node.js</li>
          <li>Manejo de base de datos relacionales especialmente en SQL SERVER</li>
          <li>Manejo de archivos</li>
          <li>Familiarización con el uso de metodologías ágiles</li>
        </ul>
      </div>

      <div class="section">
        <h2>Habilidades</h2>
        <ul>
          <li>Lenguajes: Visual Basic, C, C#, C++, JAVA y Python</li>
          <li>Manejo de base de datos (SQL Server, MYSQL, MongoDB)</li>
          <li>Control de versiones (Git, GitHub)</li>
          <li>Metodología ágil (Scrum)</li>
          <li>Trabajo en equipo</li>
          <li>Asertividad</li>
          <li>Flexibilidad</li>
        </ul>
      </div>

      <div class="section">
        <h2>Proyectos</h2>
        <p>ATM de un banco</p>
        <ul>
          <li>Desarrollado de un cajero automático de escritorio usando Python y SQL Server</li>
          <li>Manejo de la cuenta con depósitos, retiros y consultas</li>
        </ul>
        <p>Sistema de Empleado del Mes</p>
        <ul>
          <li>Programa desarrollado en C# y base de datos para el manejo de un sistema de calificación de empleados</li>
          <li>CRUD entero para empleados y calificación según su rendimiento mensual</li>
        </ul>
        <p>Cálculo de depreciación de activos</p>
        <ul>
          <li>Programa desarrollado en Python con manejo de archivos para calcular depreciaciones de activos</li>
          <li>CRUD para los activos, cálculo de su depreciación y manejo de archivos</li>
        </ul>
      </div>
    </div>
  </div>

</body>
</html>`);
      respuesta.end();
    }
  });
});

servidor.listen(8888);

console.log('Servidor web iniciado');
