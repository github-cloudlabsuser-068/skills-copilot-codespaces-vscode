import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('Type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />

            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;

const sentence = "Hello, world!";
const reversedSentence = sentence.split(' ').reverse().join(' ');
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);
console.log(capitalizedSentence); // Output: "World! Hello,"

const data = [ [ { name: 'John', age: 25 }, { name: 'Jane', age: 30 } ], [ { name: 'Bob', age: 40 } ] ];
const names = data.flatMap(arr => arr.map(item => item.name)); 
console.log(names);


const flattenedData = data.flatMap(arr => arr.map(item => item.name));
console.log(flattenedData);

