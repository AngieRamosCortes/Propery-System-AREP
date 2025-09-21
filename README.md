# Sistema de Gestión de Propiedades

Un sistema CRUD simple para gestionar propiedades inmobiliarias. Este proyecto fue desarrollado como parte del curso de Arquitecturas Empresariales, implementando conceptos básicos de Spring Boot, JPA, y arquitectura cliente-servidor.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos

Para ejecutar este proyecto necesitas:

* Java 11 o superior
* MySQL 8.0
* Maven 3.6 o superior
* Un IDE (recomendado Visual Studio Code con las extensiones de Java y Spring Boot)

### Instalación

1. Clona el repositorio en tu máquina local:
```bash
git clone https://github.com/AngieRamosCortes/Propery-System-AREP.git
```

2. Configura la base de datos MySQL:
   * Asegúrate de que MySQL esté corriendo en el puerto 3306 Ingresando usuario y contraseña
   * Si necesitas usar otras credenciales, modifica el archivo `src/main/resources/application.properties`

3. Navega hasta el directorio del proyecto:
```bash
cd propertySystem
```

4. Compila el proyecto con Maven:
```bash
mvn clean install
```

5. Ejecuta la aplicación:
```bash
mvn spring-boot:run
```

6. Abre tu navegador y visita:
```
http://localhost:8080
```

## Estructura del Proyecto 

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── example/
│   │           └── propertysystem/
│   │               ├── PropertySystemApplication.java
│   │               ├── controller/
│   │               │   └── PropertyController.java
│   │               ├── model/
│   │               │   └── Property.java
│   │               └── repository/
│   │                   └── PropertyRepository.java
│   └── resources/
│       ├── application.properties
│       ├── schema.sql
│       └── static/
│           ├── index.html
│           └── app.js
```

## Endpoints de la API 

* GET `/api/properties` - Obtener todas las propiedades
* GET `/api/properties/{id}` - Obtener una propiedad por ID
* POST `/api/properties` - Crear una nueva propiedad
* PUT `/api/properties/{id}` - Actualizar una propiedad existente
* DELETE `/api/properties/{id}` - Eliminar una propiedad

### Ejemplo de Objeto Property

```json
{
    "address": "Calle 123 #45-67",
    "price": 250000.00,
    "size": 120.5,
    "description": "Casa de 3 habitaciones con jardín"
}
```

## Despliegue en AWS 

Para desplegar la aplicación en AWS:

1. Crea una instancia EC2 con Amazon Linux 2
2. Instala Java y MySQL en la instancia
3. Configura las reglas de seguridad para permitir el tráfico en los puertos 8080 y 3306
4. Sube el archivo JAR generado a la instancia
5. Ejecuta la aplicación usando:
```bash
java -jar property-system.jar
```

## Construido con 🛠️

* [Spring Boot](https://spring.io/projects/spring-boot) - El framework web usado
* [Maven](https://maven.apache.org/) - Manejador de dependencias
* [MySQL](https://www.mysql.com/) - Sistema de gestión de base de datos
* [JPA/Hibernate](https://hibernate.org/) - Framework de persistencia
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) - Para la interfaz de usuario

## Autores 

* **Angie Julieth Ramos Cortes** - Desarrollo completo

## Licencia 

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Agradecimientos 

* Profesor del curso de Arquitecturas Empresariales
* Stack Overflow y la comunidad de Spring por su documentación y ejemplos