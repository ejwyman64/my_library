//require https
const https = require('https');

// const userName = "ejwyman64";
  
const request = https.get('https://crudapi.codelouisville.org/users/ejwyman64/library', response => {
  console.log(response.statusCode);
});
// module.exports.getUserInformation = getUserInformation;