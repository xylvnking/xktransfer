# packages
[react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks)
[multer](https://github.com/expressjs/multer)
[body parser](https://github.com/expressjs/body-parser)
[easy emoji favicons](https://favicon.io/emoji-favicons/bat)

# quick tools ref
[hex color picker](https://htmlcolorcodes.com/color-picker/)

# so ref

[How to list individual key values in an object in React](https://stackoverflow.com/a/65150539/19101255)
[Understanding unique keys for array children in React.js](https://stackoverflow.com/a/43892905/19101255)
[Remove all special characters with RegExp](https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp)
[how-to-clone-an-array-in-javascript](https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/)
[regex meme](https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/1732454#1732454)

# unresolved problems

[How to use Async and Await with Array.prototype.map()](https://flaviocopes.com/javascript-async-await-array-map/)

I couldn't get the firestore setDoc function to not just overwrite the contents of the document, despite following the documentation's directive of passing {merge: true} as an argument. It didn't cause any errors, but it didn't have any affect either. Switched to updateDoc.

# learned

## react

I ran into an issue which wasn't stopping me from moving forward but I needed to figure out what was happening.

I was somehow mutating the state implicitly without using its respective set function.

This happened because I thought I was copying the array, when really I was creating a *shallow* copy of it, when I needed a *deep* copy. Shallow copies still reference the same memory, so when they are manipulated, so is the memory.

```js


function Admin() {
    const [clientListArray, setClientListArray] = useState([{field: value}, {field: value}]) // state
    const WRONGcloneOfClientListArray = clientListArray // how I thought you could copy the array of nested data held in state to a new array without mutating it
    const RIGHTcloneOfClientListArray = JSON.parse(JSON.stringify(clientListArray)) // how I ended up doing it
    return (
        <main></main>
    )
}

```