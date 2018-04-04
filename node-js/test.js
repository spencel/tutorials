var fs = require('fs');
/*
fs.writeFile('Y:\\EPM\\DivisionShare\\Water Sys Inspection\\mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
})

fs.open('Y:\\EPM\\DivisionShare\\Water Sys Inspection\\mynewfile3.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Opened!');
});
*/
fs.appendFile('\\\\aladdin2\\epm\\DivisionShare\\Water Sys Inspection\\mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});