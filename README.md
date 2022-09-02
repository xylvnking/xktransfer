# packages
[react-firebase-hooks](https://github.com/CSFrequency/react-firebase-hooks)
[multer](https://github.com/expressjs/multer)
[body parser](https://github.com/expressjs/body-parser)
[easy emoji favicons](https://favicon.io/emoji-favicons/bat)

# quick tools ref
[hex color picker](https://htmlcolorcodes.com/color-picker/)

# so ref

[How to list individual key values in an object in React](https://stackoverflow.com/a/65150547/19101255)
[Understanding unique keys for array children in React.js](https://stackoverflow.com/a/43892905/19101255)
[Remove all special characters with RegExp](https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp)

# unresolved problems

I couldn't get the firestore setDoc function to not just overwrite the contents of the document, despite following the documentation's directive of passing {merge: true} as an argument. It didn't cause any errors, but it didn't have any affect either. Switched to updateDoc.