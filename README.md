### STEPS FOR DATA PERSISTANCE

1. Create index.js

2. npm init -y

3. install packages: npm i colors cors dotenv express helmet knex knex-cleaner morgan sqlite3

4. install nodemon npm i -D nodemon

5. update package.json - write script "server": "nodemon index.js", "start": "node index.js"

6. create server.js file 

7. create data folder

8. knex init - to create knexfile.js 

9. edit knexfile    

- 9.1- edit the connection filename
- 9.2- add migrations:  
    migrations: {
      directory: "./data/migrations",
    },
- 9.3- add seeds: 
    seeds: {
      directory: "./data/seeds",
    },
- 9.4 add useNullAsDefault: true,
- 9.5 add pool: 
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_key = ON", done);
      },
    },

10. inside of data create config.js

11. add the following code: 
- 11.1- const knex = require("knex")
- 11.2- const config = require("../knexfile")
- 11.3- const db = knex(config.development)
- 11.4- module.exports = db;

12. create a model folder

13. inside of model folder, create name-model.js

14. create .env and add PORT

15. edit index.js

16. edit server.js

17. spin the server

18. create router folder 

19. inside of router folder create name-router.js

20. go inside name-model.js
- 20.1 bring in config file - const db = require('../data/config')
- 20.2 module.exports {// function names}
- 20.3 write functions

21. go inside name-routes.js
- 21.1 call router - const router = require('express').Router()
- 21.2 bring in model file - const Name = require("../models/name-model")
- 21.3 create your routes ( CRUD)
- 21.4 module.exports = router;

22. go to server.js
- 22.1- bring in the router file-const nameRouter = require('./routes/name-routes.js')
- 22.2- server.use('/api/names', nameRouter)

23. inside of router file, write a test end point and test it inside of postman

24. run knex migrate:make create_name_table
 

25. inside of migration folder edit the new migration

26. create table and drop table
- 26.1  knex migrate:latest

27. run knex seed:make 001-cleanup

28. inside of cleanup.js add this code:
- 28.1: 
    const cleaner = require('knex-cleaner');
    exports.seed = function(knex) {
    return cleaner.clean(knex, {
        mode: 'truncate', // resets ids
        ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
    });
    };

29. knex seed:make 002-names (this will the information for the first table)

30. knex seed:run