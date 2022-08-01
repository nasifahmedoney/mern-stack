const importedUsers = require('./2_module');

console.log(importedUsers);//output: { user1: 'user1', user2: 'user2' }, object
console.log(importedUsers.user1);//output: user1, user1 var value
importedUsers.sayHello(importedUsers.user1);//using function
console.log(importedUsers.items);//output: [ 'item1', 'item2' ] array
console.log(importedUsers.person);//output: { name: 'person name' } object