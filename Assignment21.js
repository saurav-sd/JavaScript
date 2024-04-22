// Write a function to replace parameters in url

const initalUrl = '/posts/:postId/comments/:commentId';

const replaceParamsInUrl = (url, replacements) => {
    return replacements.reduce((acc, replacement) => {
        return acc.replace(":" + replacement.from, replacement.to);
    }, url);
}


const resultUrl = replaceParamsInUrl(initalUrl, [
{from: 'postId', to: '1'},
{from: 'commentId', to: '3'},
]) // /posts/1/comments/3

console.log(resultUrl);

