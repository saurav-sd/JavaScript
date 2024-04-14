// 1. 
const users = [
    {id: 1, name: 'Jack', isActive: true, age:20},
    {id: 2, name: 'John', isActive: true, age:18},
    {id: 3, name: 'Mike', isActive: false, age:30},
]

// using for loop
users.sort((a, b) => (a.age < b.age ? -1 : 1)) //sort by age ascending
let arr = []
for (let i = 0; i < users.length; i++) {
    // console.log(users[i].name);
    if (users[i].isActive) {
        arr.push(users[i].name)
    }
}
// console.log(arr);

// using foreach loop
// const names = [];
// users.forEach((user) => { names.push(user.name) });
// console.log(names);

// const activeUsers = users.filter((user) => user.isActive);

// const res = activeUsers.map(user => user.name);

// console.log(res);

const names = users
    .sort((a, b) => (a.age < b.age ? 1 : -1))
    .filter((user) => user.isActive)
    .map((user) => user.name);

console.log(names);