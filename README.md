# Twitter-clone-react

[![Build Status](https://travis-ci.org/meshack-mbuvi/twitter-clone-react.svg?branch=develop)](https://travis-ci.org/meshack-mbuvi/twitter-clone-react)

This project creates a clone of twitter using PREN stack with TypeScript
We will be using [Sequelize](http://docs.sequelizejs.com) for the database management.

# Tech

React - A JavaScript library for building user interfaces
Redux - A predictable state container for JavaScript apps.
Typescript - A typed superset of JavaScript that compiles to plain JavaScript.
Bootstrap - An open source toolkit for developing with HTML, CSS, and JS.
React-router-v4 - Declarative routing for React
Jest - A JavaScript testing solution
Enzyme - A JavaScript Testing utility for React

# Structure

The project will have two main folders:
client: holds code for the front-end
server: holds code for the back-end

# setup

clone this repository and :
`$cd twitter-clone-react`
`$npm install`
`$cd client && npm install`
`$cd server && npm install`
Run the application by: `npm start` from the root directory

# Payload

```
{
   user:{
        name: "",
        email: "",
        phone: "",
        password: "",
        photo: "",
        header_photo: "",
        followers: [users],
        following: [users],
    },
    message:{
        to: user,
        from: user,
        text: ""+emojis

    }

}
```

#### Authors

-   Meshack Mbuvi
