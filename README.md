# IP Traker Online

## Descripción

Este proyecto es una aplicación web que permite rastrear información sobre una dirección IP pública. Utiliza una API de *RapidAPI* para obtener detalles como la ubicación geográfica, la organización, el riesgo del ASN, si la IP es parte de una VPN, entre otros. La interfaz de usuario está diseñada para ser intuitiva y atractiva, utilizando *Pico.css* para lograr un diseño limpio y responsivo.

La aplicación fue desarrollada con el objetivo de facilitar el rastreo de direcciones IP y obtener información clave como la ciudad, el país, la zona horaria, y más, todo a partir de una simple consulta.

## Características

- Consulta de información detallada de una IP pública.
- Verificación si la IP es privada o pública.
- Visualización clara de datos relevantes como continente, ciudad, organización, ASN, riesgo, VPN y más.
- Interfaz responsive adaptada a diferentes tamaños de pantalla (móviles, tabletas y escritorios).
- Implementación de un temporizador para prevenir búsquedas prolongadas.

## Tecnologías Utilizadas

- **HTML**: Estructura de la página web.
- **CSS**: Diseño y estilo utilizando *Pico.css*.
- **JavaScript**: Lógica para interactuar con la API y gestionar la interfaz.
- **API**: *IP Lookup Threat Detection API* de *RapidAPI* para obtener información de las direcciones IP.
- **Entorno de Desarrollo**: *codi.link.com*.
- **Despliegue**: La aplicación está desplegada en *Netlify* para que cualquier usuario pueda probarla directamente. Accede a la aplicación en el siguiente enlace: [IP Lookup en Netlify](https://stalwart-flan-c3ea60.netlify.app/).

## Instalación Local

Si deseas ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio en tu máquina:
   ```bash
   git clone https://github.com/tu-usuario/ip-lookup.git
2. Navega al directorio del proyecto:
   ```bash
   cd ip-lookup
3. Para ver la aplicación localmente, puedes usar el servidor integrado de PHP. Abre una terminal en el directorio del proyecto y ejecuta el siguiente comando:
   ```bash
   php -S localhost:8000
4. Ahora podrás acceder a la aplicación desde tu navegador en http://localhost:8000.

## Uso
En la página principal, introduce la dirección IP que deseas rastrear en el campo de texto. Haz clic en el botón "Rastrear información de esta IP". La aplicación mostrará la información de la IP, incluyendo detalles como:
-   **Ubicación**: (continente, país, ciudad)
-   **Información del ASN**: (número, organización)
-   **Riesgo asociado con el ASN**
-   **Estado de VPN**: (si la IP está asociada a una VPN)
-   **Correo electrónico para reportar abusos**
-   **Información de la zona horaria**: (hora local, etc.)

## Dependencias
Este proyecto utiliza las siguientes tecnologías y servicios:

    Pico.css: Un framework CSS minimalista para un diseño limpio y responsivo.
    RapidAPI: Servicio para acceder a la API que proporciona información sobre direcciones IP.

