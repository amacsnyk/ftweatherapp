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
- beginning to focus more on design, added o-grid and o-typography; decided on a light color scheme to show off the typography; had to change from flexbox to o-grid
- difficulties having geolocation on page load - problems with template not rendering. Frustrating to not be able to figure this out in the time given, and want to look into it, though figured out a workaround. (explain)
- got around html5 geolocation by using an ip geolocator. This worked on localhost until I uploaded to heroku.... then of course it geolocates to heroku's servers in Ashburn VA.
- ended up replacing the ip api call with google maps geolocation api. then it was fine.


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

lessons

- I didn't know if I'd be using origami components beforehand and got to it later. It was difficult to refactor the layout and involved a bit more time than I woud have liked to spend to do this. If I'd designed and laid out the webpage using o-grid from the beginning, it would have been much easier.
- I want to dig deeper into templating engines and become better at them. I felt limited in what I knew already and had to do what felt like hacky workarouns to get geolocation working on page load. However, I was happy I got it working. I felt that if I'd been pair programming or had a team around me to ask, I would have learned the proper way to do it and I hope I still will.