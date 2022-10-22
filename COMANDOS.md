## *Universidad Nacional de El Salvador*
### _Colaboración Programación III e Ingeniería de Software_
### _Ciclo II-2022_
### Sistema de Registro Terapéutico para la Ciudad de La Niñez y la Adolescencia
<br>

# **AYUDA**

## Refencias
#### 1. [Proyecto Países](https://github.com/Code-Geeks-IGF115/ejercicio-taller-node.git)
#### 2. [Sequelize](https://sequelize.org/docs/v6/) <br><br>

## Comandos
**1. Iniciar Servidor**
```
nodemon server.js
node server.js
npm start
```
**2. Crear DB**
```
npx sequelize-cli db:create
```
**3. [Crear Modelo](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration)**
```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```
**4. [Migrar DB](https://sequelize.org/docs/v6/other-topics/migrations/#running-migrations)**
```
npx sequelize-cli db:migrate
```
**5. [Agregar datos a la DB](https://sequelize.org/docs/v6/other-topics/migrations/#undoing-migrations)**
```
npx sequelize-cli seed:generate --name nombre_seed
npx sequelize-cli db:seed --seed nombre_archivo_seed.js
npx sequelize-cli db:seed:all
```
**6. Revisar si git ignora un archivo o folder**
```
git check-ignore -v /path/to/check
```