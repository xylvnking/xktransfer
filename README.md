# packages
[react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks)
[react-textarea-autosize](https://github.com/Andarist/react-textarea-autosize)
[FileSaver.js](https://github.com/eligrey/FileSaver.js)


[multer](https://github.com/expressjs/multer)
[body parser](https://github.com/expressjs/body-parser)

# quick tools ref
[easy emoji favicons](https://favicon.io/emoji-favicons/bat)

[hex color picker](https://htmlcolorcodes.com/color-picker/)

[repeating memphis background](https://www.toptal.com/designers/subtlepatterns/tag/dark/page/2/)

[google icons](https://fonts.google.com/icons)

# so ref

[How to list individual key values in an object in React](https://stackoverflow.com/a/65150539/19101255)

[Understanding unique keys for array children in React.js](https://stackoverflow.com/a/43892905/19101255)

[Remove all special characters with RegExp](https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp)

[how-to-clone-an-array-in-javascript](https://www.freecodecamp.org/news/how-to-clone-an-array-in-javascript-1d3183468f6a/)

[regex meme](https://stackoverflow.com/questions/1732348/regex-match-open-tags-except-xhtml-self-contained-tags/1732454#1732454)

[annoying date stuff](https://stackoverflow.com/questions/7693170/javascript-convert-from-epoch-string-to-date-object)

[dynamic nextjs routes](https://nextjs.org/docs/routing/dynamic-routes)


# unresolved problems

[How to use Async and Await with Array.prototype.map()](https://flaviocopes.com/javascript-async-await-array-map/)

I couldn't get the firestore setDoc function to not just overwrite the contents of the document, despite following the documentation's directive of passing {merge: true} as an argument. It didn't cause any errors, but it didn't have any affect either. Switched to updateDoc.

- It's a little hacky but to get a shareable link i'm passing data with the url to the dynamic route and then splitting the arguments with regex. for some reason the last two only work in this order - if i switch them it doesn't work.

```js
    onClick={() => navigator.clipboard.writeText(siteNameTemporary + '/Components/' + songDataValue.songName + '?foo=' + encodeURIComponent(songDataValue.revisionNote) + 'xxxxxxxxxx' + songDataValue.fileNameRegexed + 'xxxxxxxxxx' + songDataValue.downloadURL)}>
```

# learned

## cors using fetch

[was able to make a cors request to replit with this](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options)

## dev experience

creating buttons which log important data is super helpful

also creating a mock data instead of creating one as if you're actually using the app speeds things up if you need to make changes to the data structure

## forms
[get form data](https://stackoverflow.com/questions/23427384/get-form-data-in-reactjs)
[stop form reset](https://javascript.tutorialink.com/event-in-javascript-is-deprecated-and-i-cannot-use-preventdefault/)
event.preventDefault() stops the form from resetting the whole page, but it has to be passed as an argument.
```js
const saveRevisionNotes = (event) => {
        event.preventDefault()
        console.log('updating firebase with revision notes...')
    }
```

## use auth hook

useAuth from the use react-firebase-hooks/auth gets its state changed often.
I was using it as a trigger for the on-load dependancy array and it caused issues 

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

## next

### dynamic routes

[doc](https://nextjs.org/docs/routing/dynamic-routes)

I needed a way for clients to be able to share the song with others if they wanted to.

I used dynamic routes and passed in the song name as the route, and link as the parameter. The routing doesn't support multiple parameters right now which is fine for this project - if I wanted to work around that I could do some regex trickerey to add them all up before sending and then decoding them on the dynamic page, but it's not needed.

# to do for the remake

- Clients need a way to link what they need to do other people

- Link shortener microservice

- [Listen for realtime updates to data](https://firebase.google.com/docs/firestore/query-data/listen)

- The data needs to be structured differently.
    - Specifically, the file versions should have been all held in one array. 
    - right now it's 
    ```js
        artistCollection: {
            songNameDocument: {
                fileName1: {
                    ...filedata
                },
                fileName2: {
                    ...filedata
                },
                fileName3: {
                    ...filedata
                },
            }
        }
    ```
    - but this made it such a hassle to iterate over, especially since I need the vileversions to be ordered anyways, and ordering them accourding to sorting them alphabetically could go wrong if the name changes
    - what is should have been is:
    ```js
        artistCollection: {
            songNameDocument: {
                files: [
                    {file version data},
                    {file version data},
                    {file version data},
                ]
            }
        }
    ```
    - this way it's easy to iterate over the files in order, as well as storing other data about the song within the document.
    - you could also make keep all the songs within one document since you get a full mb. technically it wouldn't scale forever, but for just holding some metadata and revision notes I think it's fine. 
    
    - the alternate I'm talking about would be:
    ```js
        artistCollection: {
            songs: {
                songName: {
                    files: [
                        {file version data},
                        {file version data},
                        {file version data},
                    ]
                }
            }
        }
    ```
    - i like this approach because then I can access the songs easier directly without needed to iterate over all the documents, i could directly access the files array and index of the one that matches etc. it also lets me keep data about the artist themselves within their collection.
        - this is easier because the only custom word would be their collection, everything else would be standard across every artist meaning i wouldn't have to do what i did for it this time and iterate over a bunch of objects all the time just to get the data to access the correct parts of them

    - so the new structure would look something like this:
    ```js
        artistCollection: {
            artistMetadata: {
                // unsure about storing this and other user data here
                // might be better to keep that behind the api?
                name: 'artistName',
                uid: 'yejjhfb4hbth4j5b4jynjkg', 
                email: 'artistemail@email.com',
                whateverelse: 'other data'
                
            }
            songs: {
                songName: {
                    songMetadata: {
                        paidFor: true,
                        dateRawFilesReceived: 'date',
                        dateReleased: 'date'
                    },
                    files: [
                        {file version data},
                        {file version data},
                        {file version data},
                    ]
                }
            }
        }
    ```

- right now I'm using the client's UID to create and make references to their collections, but that seems unwise.
    - in order to get any of their data, i need to know the collection name, but that could be anything, even a username I let them choose.
    - right now i'm creating their collection as soon as they sign up, and if any of that data didn't need to be public i could even autogenerate
    - but the complication comes when i need a shareable link - i need a way to let people query the right document without being signed in
    - **what i think i need to do is build the page as a dynamic route, and use the query passed in as the collection which gets queried**
    - and then on a different 'client dashboard' would be the component where they would have edit priviledges
    
- components should be called artists or something so the url looks better
    - artist share url should be xylvnking/artistName/songName