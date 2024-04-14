// Sort the array of object by authers lastname

const books = [
    {name: 'Harry Potter', author: 'Joanne Rowling'},
    {name: 'Warcross', author: 'Marie Lu'},
    {name: 'THe Hunger Games', author: 'Suzanne Collins'}
    ];

books.sort((book1, book2) => {
    const authorLastname1 = book1.author.split(' ')[1];
    const authorLastname2 = book2.author.split(' ')[1];

    return authorLastname1 < authorLastname2 ? -1 : 1;
});

console.log(books);