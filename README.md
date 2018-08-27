# ftweatherapp
FT tech test

requirements

- real-time weather for your location
- display city and current weather
- allows you to change the city

bonus

- is accessible
- is responsive
- JS and node
- server-side rendered
- deployed to Heroku

stretch bonus

- performant over 3g?
- origami components?
- progressively enhanced?

timeline

- initialise repo
- set up heroku and cd on heroku from github
- set up file structure for express with handlebars
- get some basic pages set up - error and home views
- very basic css styling
- chose openweatherapi over darksky because of its use of city names instead of lat/long coordinates in the request url - this is because I wanted to be able to use the JSON file of world cities (pop > 15K) to create an autocomplete suggestion for the form, and easily insert this into the api call
- looked at express middleware for api calls with promises - got vs axios. Got has a much larger userbase, but I appreciated axios's browser compatibility table, especially since I want to ensure this site is accessible and works across as all browsers and devices, so I chose this
- had trouble with modularisation and abstraction - previous api projects were used before learning express and handlebars, so getting the right code in the right places and exporting/importing it all was a huge task, but slowly chipping away at it and looking at old projects as a guide, I was able to figure it out
- finished api functionality and had it showing on the page
- different error handling for 404, 500, and also if the api call cannot be made due to bad user input

accessibility

- color contrast
- keyboard access: able to reach all interactive elements via tab, and trigger them with spacebar, enter, or arrow keys
- screen readers: html lang attritubte, make sure link text is descriptive (VoiceOver screen reader on Mac)
- headings: use h1- h6 to clearly define section headings, only one h1 per page
- semantic html: nav, main, footer; section, article, aside; header contains h1-h6 and any other introductory content
- alt text for images
- typography: large and clear
- mobile: touch targets should be at least 48px, separate them by at least 8 px
- progressive enhancement: 
- audit for accessibility with Lighthouse

browsers

- test IE, Firefox, Safari, Opera, Chrome

