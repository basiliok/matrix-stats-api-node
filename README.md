# matrix-stats-api-node

API en **Node.js + Express 5 + TypeScript** que calcula estadísticas (máximo, mínimo, promedio, suma y si alguna matriz es diagonal) sobre las matrices Q y R que le envía `matrix-qr-api-go`.

> En construcción: por ahora solo expone `GET /health` y su documentación en `/docs`.

## Requisitos

- Node.js 24 o superior
- Docker (opcional, para correr el contenedor)

## Correr en local

```bash
npm install
npm run dev                          # modo desarrollo con recarga automática (tsx)
curl http://localhost:3000/health    # {"status":"ok"}
```

Versión compilada, igual a la de producción:

```bash
npm run build    # compila TypeScript a dist/
npm start        # node dist/server.js
```

## Documentación (Swagger)

Con el servidor levantado: http://localhost:3000/docs

Cada endpoint se documenta con un bloque `/** @openapi ... */` sobre su ruta. [swagger-jsdoc](https://github.com/Surnet/swagger-jsdoc) arma la especificación al arrancar, así que no hace falta regenerar nada.

## Correr con Docker

```bash
docker build -t matrix-stats-api-node .
docker run --rm -p 3000:3000 matrix-stats-api-node
curl http://localhost:3000/health    # {"status":"ok"}
```

## Variables de entorno

| Variable | Default | Descripción |
|---|---|---|
| `PORT` | `3000` | Puerto HTTP. |

## Repositorios del sistema

| Repositorio | Rol | Tecnología |
|---|---|---|
| [matrix-qr-api-go](https://github.com/basiliok/matrix-qr-api-go) | API de factorización QR (punto de entrada del frontend) | Go + Fiber |
| [matrix-stats-api-node](https://github.com/basiliok/matrix-stats-api-node) | API de estadísticas sobre las matrices Q y R | Node.js + Express + TypeScript |
| [matrix-web-react](https://github.com/basiliok/matrix-web-react) | Frontend | React + TypeScript |
