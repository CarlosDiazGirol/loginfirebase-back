# API users/auth/content

Esta API nos ayudará a montar un backend donde guardaremos en BBDD un usuario logado desde el front con firebase y a su vez podrá crear entradas.

### Inicializando el proyecto
Tenemos que instalar todas las dependencias con `npm i` y después inicializaremos el servidor con `npm start`

## Para comprobar que funciona el proyecto completo necesitaremos:
- Clave privada de firebase
- Url de BBDD de Mongo

Más adelante, en el apartado claves privada se dice como configurarlo.

Además este proyecto está asociado con su front que está en 

## MODELO
En `User.js` tenemos el modelo de usuario donde se le añadirán las entradas desde el back. Este modelo de usuario se caracteriza porque al hacer registro desde el front conseguimos su `UID`, se guarda en BBDD de Mongo y con ello conseguimos asociar usuario a contenido.

## ROUTES
Tenemos 3 archivos con rutas:
- `auth.js`ruta para deslogarse
- `post.js`ruta de contenido por usuario (GET y POST)
- `profile.js` ruta con datos de usuario (GET y POST)
NO hay controladores sino que todo está dentro de sus rutas

Las rutas de `posts.js` y `profile.js` están protegidas por el `middleware/auth.js`

## CLAVES PRIVADAS
En el `.env` crea las siguientes variables de entorno:
- MONGODB_URI -> Aquí irá tu url de mongo con ATLAS
- FIREBASE_SERVICE_ACCOUNT -> Aquí irá tu clave privada de firebase

Consigue la clave privada del dashboard de firebase:
configuración de proyecto (rueda dentada) -> Cuentas de servicio -> Pulsa el botón: generar clave privada.
Se descargará un archivo con este aspecto

```js
{
  "type": "service_account",
  "project_id": "tu-proyecto-id",
  "private_key_id": "c3e1f4g5678hijklmnop9qrstuvwx",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDpG...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-abcde@tu-proyecto-id.iam.gserviceaccount.com",
  "client_id": "123456789012345678901",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-abcde%40tu-proyecto-id.iam.gserviceaccount.com"
}
```

en el .env lo añadirás de la siguiente manera

```js
FIREBASE_SERVICE_ACCOUNT='{
  "type": "service_account",
  "project_id": "tu-proyecto-id",
  "private_key_id": "c3e1f4g5678hijklmnop9qrstuvwx",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDpG...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-abcde@tu-proyecto-id.iam.gserviceaccount.com",
  "client_id": "123456789012345678901",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-abcde%40tu-proyecto-id.iam.gserviceaccount.com"
}'
```

**IMPORTANTE:**
Es importante añadir esas comillas delante y detrás de las llaves para luego poder parsearlo y que estén protegidas. Recuerda subirlo igual en RENDER como variable de entorno.