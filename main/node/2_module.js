// exporting variables as modules
const user1 = 'user1';
const user2 = 'user2';

function sayHello(name)
{
    console.log(`hi ${name}`);
}

module.exports = {user1, user2, sayHello};
//alternative

module.exports.items = ['item1','item2'];
module.exports.person = {
    name: 'person name'
}