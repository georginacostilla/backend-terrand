# 📌 Prueba técnica - Terrand 

## Estructura del Proyecto

```plaintext
back-terrand/
├── dist/                 # Archivos compilados de TypeScript a JavaScript
├── node_modules/         # Dependencias del proyecto
├── prisma/               # Configuración y modelos de la base de datos (Prisma)
├── src/                  # Código fuente del proyecto
│   ├── common/           # Utilidades
│   ├── config/           # Configuraciones del proyecto
│   ├── modules/          # Módulos de la aplicación
│   ├── utils/            # Utilidades adicionales
│   └── main.ts           # Punto de entrada de la aplicación
├── test/                 # Pruebas unitarias e integradas
├── .env                  # Variables de entorno
├── .gitignore            # Archivos y directorios ignorados por Git
├── .prettierrc           # Configuración de Prettier
├── eslintrc.js           # Configuración de ESLint
├── nest-cli.json         # Configuración del CLI de NestJS
├── package-lock.json     # Versiones exactas de las dependencias
├── package.json          # Dependencias y scripts del proyecto
├── README.md             # Este archivo
├── tsconfig.build.json   # Configuración de TypeScript para la compilación
└── tsconfig.json         # Configuración de TypeScript para el desarrollo
```

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/georginacostilla/backend-terrand.git
```

2. Instalar las dependencias:
   
```bash
$ npm install
```
3. Configurar las variables de entorno en el archivo .env

## Ejecución del proyecto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Contribución

Si deseas contribuir al proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3. Realiza tus cambios y haz commit (git commit -am 'Añade nueva funcionalidad').
4. Haz push a la rama (git push origin feature/nueva-funcionalidad).
5. Abre un Pull Request.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="80" alt="Nest Logo" /></a>
</p>

- Georgina Costilla: https://github.com/georginacostilla | https://www.linkedin.com/in/georgina-costilla/
