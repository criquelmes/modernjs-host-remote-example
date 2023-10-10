# Ejemplo básico de host-remote con moderjs y module federation

Este ejemplo es un demo de una aplicación host cargando un componente remoto.

- `app1` es la aplicación host.
- `app2` es la aplicación remota que expone el componente `Button`. standalone

# Levantar el proyecto

Ejecutar `yarn start`. Esto construirá y servirá tanto `app1` como `app2` en los puertos 3001 y 3002 respectivamente.

- [localhost:3001](http://localhost:3001/) (HOST)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)
