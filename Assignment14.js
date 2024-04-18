// You have 2 functions which return promises. Map data from getUsers
// and getUserStatuses to get array of users with id, name, isActive

const users = [
{id: 1, name: 'Jack'},
{id: 2, name: 'John'},
{id: 3, name: 'Mike'},
]
const userStatuses = [
{id: 1, isActive: true},
{id: 2, isActive: true},
{id: 3, isActive: false},
]
const getUsers = () => {
return new Promise(resolve => {
resolve(users)
})
}
const getUserStatuses = () => {
return new Promise(resolve => {
resolve(userStatuses)
})
}

// solution1
// getUsers().then((users) => {
//     getUserStatuses().then((usersStatuses) => { 
//         const mappedUsers = users.map((user) => {
//             return {
//                 id: user.id,
//                 name: user.name,
//                 isActive: usersStatuses.find(userStatus => userStatus.id === user.id).isActive
//             }
//         });
//         console.log("mappedUsers ",mappedUsers);
//     })
// });

// solution 2
// Promise.all([getUsers(), getUserStatuses()]).then(([users, userStatuses]) => {
//     const mappedUsers = users.map((user) => {
//         return {
//             id: user.id,
//             name: user.name,
//             isActive: userStatuses.find(userStatus => userStatus.id === user.id).isActive
//         }
//     });
//     console.log("mappedUsers ",mappedUsers);
// })


// Using async await

const getMappedUsers = async () => {
    try {
        const users = await getUsers();
    const userStatuses = await getUserStatuses();

    const mappedUsers = users.map((user) => {
        const isActive = userStatuses.find(userStatus => userStatus.id === user.id).isActive;
        return { ...user, isActive };
    });
    console.log("mappedUsers ", mappedUsers);
    }
    catch (error) {
        console.log(error);
    }
};

getMappedUsers();

