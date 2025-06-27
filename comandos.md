## Comandos

Iniciar npm

```sh
    npm init
```

Configuración de scripts para el proyecto

```json
    "scripts": {
        "dev": "nodemon index.js",
        "start": "node index.js",
        "lint": "eslint"
    },
```

Instalación de nodemon

```sh
    npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
```

Instalación de Express JS
```sh
    npm i express
```

Iniciar script de start

```sh
    npm run start
```

---

## Metodos:

Get: Obtener
Put: Modificar/Actualizar
Patch: Modificar/Actualizar
Post: Crear
Delete: Eliminar

### Patch

El método de solicitud HTTP PATCH aplica modificaciones parciales a un recurso.

PATCH es algo análogo al concepto de "actualización" que se encuentra en CRUD, Una solicitud se considera un conjunto de instrucciones sobre cómo modificar un recurso. Contrasta esto con PUT; que es una representación completa de un recurso.PATCH

No es necesariamente idempotente, aunque puede serlo. Contrasta esto con PUT; que siempre es idempotente.

La palabra "idempotente" significa que cualquier número de solicitudes repetidas e idénticas dejará el recurso en el mismo estado.

Por ejemplo, si un campo de contador de incremento automático es una parte integral del recurso, entonces un PUT lo sobrescribirá naturalmente (ya que sobrescribe todo), pero no necesariamente para .PATCH

PATCH (como POST) puede tener efectos secundarios sobre otros recursos.

PATCH - HTTP | MDN
