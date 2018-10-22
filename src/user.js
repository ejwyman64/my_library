//require https
const https = require('https');

const userName = "ejwyman64";

// print message to console.
function printUserToDoc(username, fullname, librarygenre, bookcount) {
  const message = `My username is ${username} and my real name is ${fullname}. My library is classified as ${librarygenre} and it contains ${bookcount} books.`;
  console.log(message);
}
  
const request = https.get(`https://crudapi.codelouisville.org/users/${userName}/userProfile`, response => {

  let body = "";
  //Read the data.
  response.on('data', data => {
    body += data.toString();
    // console.log(body);
  });

  response.on('end', () => {
    //Parse data.
    const profile = JSON.parse(body);
    const userProfile = profile[0];
    //Print data.
    printUserToDoc(userProfile.username, userProfile.firstname, userProfile.genre, userProfile.bookCount);
  });

});

// module.exports.getUserInformation = getUserInformation;