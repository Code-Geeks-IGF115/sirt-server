###Comandos
*Iniciar Servidor*
```
nodemon server.js
node server.js
```
*crear DB*
```
npx sequelize-cli db:create
```
*[crear Modelo](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration)*
```
npx sequelize-cli db:create
```
*[migrar DB](https://sequelize.org/docs/v6/other-topics/migrations/#running-migrations)*
```
npx sequelize-cli db:migrate
```
*[agregar datos a la DB](https://sequelize.org/docs/v6/other-topics/migrations/#undoing-migrations)*
```
npx sequelize-cli seed:generate --name nombre_seed
npx sequelize-cli db:seed --seed nombre_archivo_seed.js
npx sequelize-cli db:seed:all
```