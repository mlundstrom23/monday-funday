// want to have this in a config folder 
// exports a config method so we can call it
require('dotenv').config()

// MY_MEM is an env variable we are making up just for the sake of testing env vars out
// this can be tested using MY_MEM=Arrays node environment-variables.js
// this will result in the console logging out 'I remember Arrays'
// if the value has spaces we need quotes like: MY_MEM="Arrays in JS" node environment-variables.js
console.log('I remember ' + process.env.MY_MEM);

// I won't specify MY_FAV intentionally so I can see the default ('filter function') being used 
// keep using MY_MEM=Arrays node environment-variables.js to test everything
const my_favorite = process.env.MY_FAV || 'filter function';
console.log('I really like the ' + my_favorite);


// this can be called so that the default is used and also with a specific DB_HOST
// MY_MEM=Arrays node environment-variables.js
// MY_MEM=Arrays DB_HOST=myprodawshost node environment-variables.js
// myprodawshost is a dummy code, will be a url in real life
const db_host = process.env.DB_HOST || 'localhost';
console.log('Using database host: ' + db_host);

/* after npm installing 'dotenv' and making .env file, you can now just
   call node environment-variables.js and everything will print from .env */