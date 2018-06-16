console.log('App.js is running!')

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}; 

const template = (
<div>
    <h1>{app.title}</h1> 
    <p>{app.subtitle}</p>
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
</div>
);

// const userName = 'Serina';
// const userAge = 20;
// const userLocation = 'Melbourne';

// const templateTwo = (
//     <div>
//         <h1>{userName.toUpperCase()}</h1>
//         <p>Age: {userAge}</p>
//         <p>Location: {userLocation}</p>
//     </div>
// );

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

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

