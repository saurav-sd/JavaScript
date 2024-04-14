//  Write a function which accepts a list of users and a name to check
// if such user exists in the array.

const users = [
    {id: 1, name: 'Jack', isActive: true},
    {id: 2, name: 'John', isActive: true},
    {id: 3, name: 'Mike', isActive: false},
];
    
// bruteforce approach

function findUser(users, name) {
    let exists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            exists = true;
            break;
        }
    }
    return exists;
}

console.log(findUser(users, 'modi'));

// approach 2 : using some() method

const isNameExists = (name, users) => users.some(user => user.name === name);

console.log(isNameExists('modi', users));

// approach 3 : using findIndex() method

const isNameExists2 = (name, users) => {
    const index = users.findIndex(user => user.name === name);
    return index >= 0;
}

console.log(isNameExists2('modi', users));

// approach 4 : using filter() method

const isNameExists3 = (name, users) => users.filter(user => user.name === name).length > 0;

console.log(isNameExists3('Mike', users));

// approach 5 : using find() method