React is what I am currently focused on. By the time we learn all the fundamentals and get some advanced knowledge, we are going to work on a huge team project by interacting with real clients(in July 2018). 

Learning through Andrew Mead's the complete react web developer course with redux(https://www.udemy.com/react-2nd-edition) has been very helpful to understand how to build and launch a real-world React application. During my study with the resource, I've asked some industry mentors about the different way that they are doing at work compared with what's taught in the course.

Andrew is also providing good examples for understanding ES6 JavaScript. I've added some code I tested for practice and details to https://github.com/crushoncode/learning-js.

# Learning Objectives 

* Understand how GSX works and how to inject values in it
* Add conditional rendering 
* Set up event handlers like form submits and button clicks
* Generate a dynamic set of elements based off of some application data
* Render and re-render all of that keeping the UI up todate with our app data

# To Get Started

npm init -y

npm add react

npm add react-dom

.gitignore(including scripts(generated code)) 

create public folder/index.html 
 
* option 1) 
npm install -g live-server 
"scripts": {
    "start": "live-server --open=public"
}
live-server --open=public 

    npm start
   
    cd public && live-server

* option 2)
npm add -D parcel-bundler

npm i -D babel

npm install --save-dev babel-cli babel-preset-env

npm install --save-dev babel-preset-react

npx babel

npx babel src/app.js --out-file=public/scripts/app.js --presets=env,react

npx babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

create scripts folder/app.js 

create src folder/app.js

# Exploring JSX Expressions

## 1)

```javascript
// We can't render objects. We should use object as a property, so can make user.name.

const user = {
    name: 'Serina',
    age: '20',
    location: 'Melbourne'
};

<div>
    <h1>{user}<h1>
</div>
```

## 2)

```javascript
const userName = 'Serina';
const userAge = 20;
const userLocation = 'Melbourne';

const templateTwo = (
     <div>
         <h1>{userName.toUpperCase()}</h1>
         <p>Age: {userAge}</p>
         <p>Location: {userLocation}</p>
     </div>
);
```

## 3) Ideal Code 

```javascript
const user = {
    name: 'Serina',
    age: 20,
    location: 'Melbourne'
};

const templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>{user.age}</p>
        <p>{user.location}</p>
    </div>
);
```

# Conditional Rendering in JSX

```javascript
//While the location does exist, Melbourne is a valid string here. It's going to get passed in to get location and the return value is going to show up. If we go through get location we know we get the string.

const user = {
    name: 'Serina',
    age: 20,
    location: 'Melbourne'
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return 'Unknown';
    }
}
```
```javascript
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return 'Undefined';
    }
}

// The above function can be simplified to the below which is identical.

function getLocation() {
    if (location) {
        return <p>Location: {location}</p>;
    }
}
```

