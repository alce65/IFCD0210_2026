---
title: SQLite instalación
---

SQLite es una biblioteca de software que proporciona un motor de base de datos relacional que no requiere un servidor separado para funcionar. Es una base de datos SQL de código abierto y es probablemente la base de datos SQL más utilizada en el mundo. SQLite es una base de datos C que proporciona una API de base de datos SQL completa y que es más eficiente que las bases de datos tradicionales.

## SQLite: instalación em Windows

Para instalar SQLite en Windows, siga los siguientes pasos:

1. Descargue el archivo de instalación de SQLite desde el sitio web oficial de SQLite: [SQLite Download Page](https://www.sqlite.org/download.html).

   - Descargue la versión de 64 bits sqlite-tools-win-x64-3490000.zip.

2. Descomprima el archivo descargado en una carpeta, e.g. `C:\sqlite` o `C:\Program Files\sqlite`.

3. Agregue la carpeta de SQLite a la variable de entorno PATH.

   - Abra el menú Inicio y busque "Editar las variables de entorno del sistema".
   - Haga clic en el botón "Variables de entorno".
   - En la sección "Variables del sistema", busque la variable de entorno PATH y haga clic en "Editar".
   - Haga clic en "Nuevo" y agregue la ruta de la carpeta de SQLite, e.g. `C:\sqlite` o `C:\Program Files\sqlite3`.

4. Abra una ventana de comandos y ejecute el comando `sqlite3 --version`.

```bash
C:\Users\Alejandro>sqlite3 --version
3.49.0 2025-02-06 11:55:18 4a7dd425dc2a0e5082a9049c9b4a9d4f199a71583d014c24b4cfe276c5a77cde (64-bit)
```

### SQLite Browser: instalación em Windows

SQLite Browser es una herramienta visual de código abierto para crear, diseñar y editar bases de datos SQLite. Para instalar SQLite Browser en Windows, siga los siguientes pasos:

1. Descargue el archivo de instalación de SQLite Browser desde el sitio web oficial de SQLite Browser: [SQLite Browser Download Page](https://sqlitebrowser.org/dl/).

   - Descargue la versión de 64 bits Standard installer `https://download.sqlitebrowser.org/DB.Browser.for.SQLite-v3.13.1-win64.msi`.

2. Ejecute el archivo de instalación descargado y siga las instrucciones del instalador.

3. Abra SQLite Browser desde el menú Inicio.
