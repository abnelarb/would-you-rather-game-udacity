# README Udacity Would You Rather Game
--Designed And Developed by Mohammed Kamal for udacity advanced track nanodegree
-Would You Rather Game is a game app to let users ask questions and give answers in a poll mode of 2 options option A and option B depending on a mock database ```_DATA.js``` which authorised user must be logged in to give answers 
- there is leaderboard which view the top users depending on there asked questions and answers.

## Table of Contents

- [Installation](#installation)
- [What_You_Are_Getting](#What You're Getting)
- [Walkthrough](#Walkthorugh)


## Installation
git a clone of the project on your local machine 
cd the project folder 
```sh
cd would-you-rather
yarn install
yarn start
```
the app will be running on http://localhost:3000
## What_You_Are_Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   ├── index.html # DO NOT MODIFY
│   ├── logo192.png # DO NOT MODIFY
│   ├── logo512.png # DO NOT MODIFY
│   ├── robots.txt # DO NOT MODIFY
│   └── manifest.json # DO NOT MODIFY
│ 
└── src
    ├── actions # the actions directory.
    │   ├── askedQuestion.js #the question action 
    ├   ├── authenticatedUser.js # the authed user action
    ├   ├── shared.js # handling the intial data to get the data from the store 
    ├   ├── users.js # the users action 
    ├──api # the api directory.
    │   ├── -DATA.js #the fake data file 
    ├   ├── api.js # api to get and send fetch data to the database
    ├── components # the componenets directory.
    │   ├── App.js #the app component 
    │   ├── Dashboard.js #the Dashboard component 
    │   ├── ErrorPage404.js #the ErrorPage404 component 
    │   ├── Footer.js #the footer component 
    │   ├── HomeViewDesign.js #the HomeViewDesign component 
    │   ├── Leaderboard.js #the Leaderboard component 
    │   ├── Login.js #the Login component 
    │   ├── Navbar.js #the Navbar component 
    │   ├── NewQuestion.js #the NewQuestion component 
    │   ├── Question.js #the Question component 
    │   ├── QuestionView.js #the QuestionView component 
    │   ├── ResultView.js #the ResultView component 
    │   ├── UserView.js #the UserView component 
    ├── images # the images directory.
    │   ├── 404.webp #the error page image. 
    │   ├── ask.png #the ask icon. 
    │   ├── bronze.png #the pronze trophie icon . 
    │   ├── gold.jpg #the gold trophie icon . 
    │   ├── silver.png #the silver trophie icon . 
    │   ├── medal.png #the medal trophie icon . 
    │   ├── vote.webp #the vote icon.
    ├──middleware # the middleware directory.
    │   ├── index.js #the applyMiddleware to the store file .
    ├   ├── logger.js # the logger middleware
    ├── reducers # the reducers directory.
    │   ├── authedUser.js #the autheduser reducer. 
    ├   ├── index.js # the compine reducers file
    ├   ├── questions.js # the questions reducers 
    ├   ├── users.js # the users reducers 
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.test.js # App test file. 
    ├── index.css # the css file of the index.
    ├── index.js # the main javascript file for the index to manage the store and the redux provider . 
    ├── reportWebVitials.js # reportWebVitials file. 
    └── setupTests.js # to setup the tests .

```

## Walkthorugh
- Setup the starter code after clone it from udacity repo https://github.com/udacity/reactnd-project-would-you-rather-starter
- Setup the project using 
$npx-react-app would-you-rather
- Added bootstrap framework to style the app .
- Setup base actions, reducers and middleware also installed required packages and get the intial data from database then log it to the console by the logger middleware . 
- Design different views component.
- Setup the store and add required reducers and actions for users , questions and authenticated user .
- Map props and state to the components and start rendering the app .
- Made the navbar and routes by react-router-dom.
- Made the Leaderboard page and test it's funcionality .
- Made the add new question form and test it's functionaility .
- Made the result view and question view and test it's functionality .
- Made the 404 Error Landing page and test it in diffent mode at wrong question ids and wrong path.
- Style the app by css and bootstrap css library.
- Tested all functions , no errors , no bugs found on the console.

## Demo
- you can test the app at 
https://pi293.csb.app/