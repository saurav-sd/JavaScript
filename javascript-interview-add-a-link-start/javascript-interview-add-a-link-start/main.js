// Add a link back to the source of the text after the paragraph tag.(https://forcemipsum.com/)

const paragraph = document.querySelector("p");

paragraph.innerHTML = paragraph.innerHTML.split(" ")
    .map((word) => {
        return word.length > 8 ? `<span style="background-color: yellow">${word}</span>` : word;
    })
    .join(" ");

// Add a Link at the end of the paragraph using DOM

const link = document.createElement("a");
link.href = "https://forcemipsum.com/";
link.innerText = "Text generated from lorem epsum";

document.body.appendChild(link);

// split each sentence at seperate line in the parigraph  text.

const parigraph = document.querySelector("p");

parigraph.innerHTML = parigraph.innerHTML.split(/\.[^.|<]/).join(".</p><p>") + "</p>";

    

