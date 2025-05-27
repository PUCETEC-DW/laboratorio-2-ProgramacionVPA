[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/RxH6bTkq)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19598825&assignment_repo_type=AssignmentRepo)

# Buscador de Países 🌎
## 🎯 Objetivo

Este proyecto es una aplicación web que permite buscar países y ver información relevante como su bandera, nombre oficial, región y población. Los datos se obtienen en tiempo real desde la API pública [REST Countries](https://restcountries.com/v3.1/all).

## ¿Cómo funciona?

- Al cargar la página, se muestran todos los países disponibles.
- Puedes escribir el nombre de un país en el campo de búsqueda para filtrar los resultados en tiempo real.
- Por cada país se muestra:
  - Bandera
  - Nombre oficial
  - Región
  - Población

## ¿Cómo se obtienen los datos? (Uso de fetch)

Para obtener la información de todos los países, se utilizó la función `fetch` de JavaScript. Esta función permite hacer solicitudes a servicios web externos (APIs) y recibir datos en formato JSON.  
En este proyecto, al cargar la página, se hace una petición a la API de REST Countries usando `fetch`. Cuando la respuesta llega, se convierte a un objeto JavaScript y se guarda en una variable global. Luego, esos datos se muestran dinámicamente en la página.

De esta manera, siempre se visualiza la información más actualizada de los países, sin necesidad de actualizar manualmente los datos.

## Tecnologías usadas

- HTML5
- CSS3
- JavaScript 
- [REST Countries API](https://restcountries.com/v3.1/all)

## Enlace a la demo

[Ver aplicación publicada en GitHub Pages](https://programacionvpa.github.io/laboratorio-2-ProgramacionVPA/)



Desarrollado para el laboratorio de ProgramacionVPA. Por VICTOR ALVAREZ