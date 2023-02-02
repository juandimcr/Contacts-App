HOST: https://localhost:3000

# Contacts App API
Documentación para la API Contacts App
[App.net API](http://contactfrontend).

NOTE: This document is a **work in progress**.

# Como proveer el token de autenticacion
Para poder mandar el token de autenticacion es importante añadirlo a la cabecera de la HTTP request como 'Authorization: Bearer token'. Si no es así, no se podrá leer el token

# Group Contacts
Endpoints para la gestión de los contactos

## GET [/api/v1/contacts/user/{userId}?type=X]
Devuelve todos los contactos de un usuario.

+ Parameters
    + userId: `b879dc49-3068-4d09-a952-a3030f5cd9a0` (string) - El id del usuario

+ Query Parameters
    + type: `FAMILIAR - AMIGO - TRABAJO - OTROS` (string) - Para filtrar por tipo de contacto

+ Responses:
    + 200 - Todo ha ido bien y se lista los contactos
    + 401 - No puedes acceder
    + 403 - No se provee el token de autenticación
    + 404 - No hay contactos para ese usuario o no se encuentra el usuario
    + 500 - Error interno del servidor

+ Return (application/json)
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

## GET [/api/v1/contacts/{id}]
Devuelve la información del contacto con la id proporcionada.

+ Parameters
    + id: `f02d7639-3c14-49bb-b29f-802b45923599` (string) - El id del contacto

+ Responses:
    + 200 - Todo ha ido bien y se devuelve el contacto
    + 401 - No puedes acceder
    + 403 - No se provee el token de autenticación
    + 404 - No existe el contacto
    + 500 - Error interno del servidor

+ Return (application/json)
    ```js
    {
        "id": "f02d7639-3c14-49bb-b29f-802b45923599",
        "fullname": "Juan Diego",
        "contactImg": "https://i.pinimg.com/736x/b2/b2/59/b2b259504f7f286ad5573bce72991455--ferrari-laferrari-ferrari--gto.jpg",
        "type": "FAMILIAR",
        "city": "Murcia",
        "country": "España",
        "user": "b879dc49-3068-4d09-a952-a3030f5cd9a0"
    }
    ```

## POST [/api/v1/contacts]
Insertar un nuevo contacto por parte de un usuario

+ Responses:
    + 201 - Contacto creado
    + 401 - No puedes acceder
    + 403 - No se provee el token de autenticación
    + 404 - No existe el contacto
    + 500 - Error interno del servidor

+ Información necesaria para crear un contacto:
    + Fullname - nombre completo del contacto
    + ContactImg - imagen del contacto (URL)
    + Type - tipo de contacto (FAMILIAR, AMIOGO, TRABAJO, OTRO)
    + City - ciudad
    + Country - país
    + User - usuario que crea el contacto

+ Return (application/json)
    ```js
    {
        "id": "f02d7639-3c14-49bb-b29f-802b45923599",
        "fullname": "Juan Diego",
        "contactImg": "https://i.pinimg.com/736x/b2/b2/59/b2b259504f7f286ad5573bce72991455--ferrari-laferrari-ferrari--gto.jpg",
        "type": "FAMILIAR",
        "city": "Murcia",
        "country": "España",
        "user": "b879dc49-3068-4d09-a952-a3030f5cd9a0"
    }
    ```
## PUT [/api/v1/contacts/{id}]
Actualizar la información de un contacto

+ Parameters
    + id: `f02d7639-3c14-49bb-b29f-802b45923599` (string) - El id del contacto

+ Responses:
    + 200 - Todo ha ido bien y se devuelve el contacto
    + 401 - No puedes acceder
    + 403 - No se provee el token de autenticación
    + 404 - No existe el contacto
    + 500 - Error interno del servidor

+ Información necesaria para actualizar un contacto:
    + Fullname - nombre completo del contacto
    + ContactImg - imagen del contacto (URL)
    + Type - tipo de contacto (FAMILIAR, AMIOGO, TRABAJO, OTRO)
    + City - ciudad
    + Country - país
    + User - usuario que actualiza el contacto

+ Return (application/json)
    ```js
    {
        "id": "f02d7639-3c14-49bb-b29f-802b45923599",
        "fullname": "Juan Diego",
        "contactImg": "https://i.pinimg.com/736x/b2/b2/59/b2b259504f7f286ad5573bce72991455--ferrari-laferrari-ferrari--gto.jpg",
        "type": "FAMILIAR",
        "city": "Murcia",
        "country": "España",
        "user": "b879dc49-3068-4d09-a952-a3030f5cd9a0"
    }
    ```

## DELETE [/api/v1/contacts/{id}]
Eliminar un contacto

+ Parameters
    + id: `f02d7639-3c14-49bb-b29f-802b45923599` (string) - El id del contacto

+ Responses:
    + 200 - Todo ha ido bien y se devuelve el contacto
    + 401 - No puedes acceder
    + 403 - No se provee el token de autenticación
    + 404 - No existe el contacto
    + 500 - Error interno del servidor

+ Return (application/json)
    ```js
    { 
        Contact has been removed successfully" 
    }
    ```

# Group User
Endpoints para poder actualizar la información de un usuario

## PUT [/api/v1/user/{userId}]
Actualizar la información de un usuario.

+ Responses:
    + 200 - Usuario actualizado correctamente
    + 401 - No puedes acceder
    + 403 - No se provee el token de autenticación
    + 404 - No existe el usuario
    + 500 - Error interno del servidor - Devuelve si existe ya ese usuario o el correo proporcionado

+ Información necesaria para actualizar un usuario:
    + Username - nombre de usuario proporcionado por el usuario
    + Password - contraseña del usuario (máx 16 caracteres)
    + Fullname - nombre completo del usuario
    + ProfileImg - imagen del perfil (URL)
    + Email - email proporcionado por el usuario

+ Return (application/json)
    ```js
    {s
        "id": "2043d34c-2356-498b-9b90-d23b0a025bb3",
        "username": "foo",
        "fullname": "Foo Foo Foo",
        "profileImg": "https://i.pinimg.com/736x/b2/b2/59/b2b259504f7f286ad5573bce72991455--ferrari-laferrari-ferrari--gto.jpg",
        "email": "foo@gmail.com"
    }
    ```

# Group Authentication
Endpoints para iniciar sesión y registrarse en la aplicación

## POST [/api/v1/auth/signup]
Registro de un usuario en la app

+ Responses:
    + 200 - Usuario registrado correctamente
    + 500 - Error interno del servidor - Devuelve si existe ya ese usuario o el correo proporcionado

+ Información necesaria para registrar un usuario:
    + Username - nombre de usuario proporcionado por el usuario
    + Password - contraseña del usuario (máx 16 caracteres)
    + Fullname - nombre completo del usuario
    + ProfileImg - imagen del perfil (URL)
    + Email - email proporcionado por el usuario

+ Return (application/json)
    ```js
    {
        "User has been signed up"
    }
    ```
NOTA: El token se devuelve en el login, por lo que en las aplicaciones frontend después del registro redireccionar al login

## POST [/api/v1/auth/signin]
Inicio de sesión de un usuario en la app

+ Responses:
    + 200 - Usuario logueado correctamente
    + 400 - Nombre de usuario o contraseña incorrecto
    + 500 - Error interno del servidor

+ Información necesaria para registrar un usuario:
    + Username - nombre de usuario proporcionado por el usuario
    + Password - contraseña del usuario

+ Return (application/json)
    ```js
    {
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwNDNkMzRjLTIzNTYtNDk4Yi05YjkwLWQyM2IwYTAyNWJiMyIsImlhdCI6MTY3NTM3MjczMSwiZXhwIjoxNjc1OTc3NTMxfQ.RwZ-PcK43Walq1223iSZGd2Y635jhUe8sKnC5Y2r1b0",
        "id": "2043d34c-2356-498b-9b90-d23b0a025bb3",
        "username": "foo",
        "fullname": "Foo Foo Foo",
        "profileImg": "https://i.pinimg.com/736x/b2/b2/59/b2b259504f7f286ad5573bce72991455--ferrari-laferrari-ferrari--gto.jpg",
        "email": "foo@gmail.com"
    }
    ```
NOTA: el accessToken es lo que hay que mandar en las cabeceras http para crear, eliminar, actualizar, devolver los contactos y actualizar el perfil del usuario



