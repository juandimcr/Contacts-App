FORMAT: A1
HOST: https://localhost:3000

# Contacts App API
Documentation of the contacts app API
[App.net API](http://contactfrontend).

NOTE: This document is a **work in progress**.

# Como proveer el token de autenticacion
Para poder mandar el token de autenticacion es importante añadirlo a la cabecera de la HTTP request como 'Authorization: Bearer token'. Si no es así, no se podrá leer el token

# Group Contacts
This section groups contacts endpoints.

## GET [/api/v1/contacts/user/{userId}?type=X]
Devuelve todos los contactos de un usuario.

+ Parameters
    + userId: `b879dc49-3068-4d09-a952-a3030f5cd9a0` (string) - El id del usuario

+ Query Parameters
    + type: `FAMILIAR - AMIGO - TRABAJO - OTROS` (string) - Para filtrar por tipo de contacto

+ Responses:
    + 200 - Todo ha ido bien y se lista los contactos
    + 404 - No hay contactos para ese usuario o no se encuentra el usuario
    + 403 - No se provee el token de autenticación
    + 401 - No puedes acceder
    + 500 - Error interno del servidor

+ Model (application/json)
    ```js
    [
        {
            "id": "c4938b37-0b38-4d19-875c-b7ed9ed5b581",
            "fullname": "Maria Rodriguez",
            "contactImg": "https://i.pinimg.com/736x/b2/b2/59/b2b259504f7f286ad5573bce72991455--ferrari-laferrari-ferrari--gto.jpg",
            "type": "FAMILIAR",
            "city": "Murcia",
            "country": "España",
            "user": "b879dc49-3068-4d09-a952-a3030f5cd9a0"
        },
        {
            "id": "f02d7639-3c14-49bb-b29f-802b45923599",
            "fullname": "Juan Diego",
            "contactImg": "https://i.pinimg.com/736x/b2/b2/59/b2b259504f7f286ad5573bce72991455--ferrari-laferrari-ferrari--gto.jpg",
            "type": "TRABAJO",
            "city": "Murcia",
            "country": "España",
            "user": "b879dc49-3068-4d09-a952-a3030f5cd9a0"
        }
    ]


    ```


