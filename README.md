# Quickstart Project 4 Boiler Plate

## Step 1, Create Project Folder
Create a new folder called Project4 in your workspace. Inside the Project4 folder, create two subfolders:
- One named client: This will hold the React app.
- One named server: This will hold the backend code.

## Step 2, Set Up React Client
Open the terminal in the client folder.
```
npx create-react-app .                # Set up React app in the current folder
npm install react-bootstrap bootstrap # Add Bootstrap
npm install react-router-dom@latest   # Add React Router
```

### Step 3, Set Up Server and Database
Now open the terminal in the server folder.
```
npm init -y              # Initialize Node.js project
npm install express      # Install Express.js
npm install mysql2       # Install MySQL client
npm install cors         # Allow cross-origin requests
npm install -g nodemon   # (Optional) Install nodemon globally
```
### Step 4, Create dbConnection.js File in Server
In the server folder, create a file named dbConnection.js and add the following code:
```
import mysql from 'mysql2/promise';

const db =  await mysql.createConnection ( {
  host: 'localhost',
  user: 'root',
  password: 'YOU PASSWORD',
  database: 'YOUR DATABASE'
})

db.connect ((err)=> {
  if (err) {
    console.log ("Error on DB connect:", err)
    return;
  } else
    console.log ("Connected to School DB")
})

export default db;
```

## Step 5, Create index.js in Server
In the server folder, create a file named index.js and add the following code:

```
import express from 'express';
import cors from 'cors';
// Add and import your route files here, Example:
// import yourRoute from './Routers/yourRoute.js'

const app = express();

app.use(express.json());  // To parse JSON bodies in requests
app.use(cors());          // To allow requests from all origins (good for development)

// Add your route handlers here, Example:
// app.use('/your-endpoint', yourRoute)

app.get('/', (req, res) => {
  res.send("Server running");
});

app.listen(4000, () => {
  console.log("Listening at http://localhost:4000");
});
```

## Step 6, Set Up Git Repository for Project 4
Manually delete the hidden .git folder inside the client directory.
This folder was created by create-react-app and should be removed to avoid Git conflicts.