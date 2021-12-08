
# W09D03 

## Todo Task 

### Description

Todos task is a small project it has backend API by node express and frontend by "React Redux" and CSS for simple style.

### User Stories

*	Signup: As an anon, I can sign up on the platform so that I can start adding my tasks.
*	Login:  As a user, I can login to the platform so that I can start doing my tasks and editing and deleting it.
*	Logout: As a user, I can logout from the platform. 
*	Edit tasks:  As a user, I can update my task.
*	Delete task:  As a user, I can delete my task.


### Client / Frontend

#### React Router Routes (React App)


| Parameter | Component  | Permissions              | Behavior    |
| :-------- | :----------| :-------------           | :-----------| 
|  /        |   Home     | public <Route>           | Home Page   | 
|  /signup  |   signup   | anon only <AnonRoute>    | Signup form, link to login, navigate to homepage after signup | 
|  /login   |   login    | anon only <AnonRoute>    | Login form, link to signup, navigate to homepage after login |
|  /Nav     |   Nav      | user only <PrivateRoute> | The navbar has a logout button and displays it on all user pages. | 
|  /task    |   Task     | user only <PrivateRoute> |The task page has an input label to add a new task and submit button to submit the task. |   


### Components

* homepage

* signup page 

* login page 

* Nav 

* Task page 

### Services
#### Auth Service

* auth.login(user)
* auth.signup(user)
* auth.logout()

#### User Service
* User.getAllTasks(token) // synchronous
* User.addNewTask()// synchronous
* User.updateTask(id)// synchronous
* User.deleteTask(id)// synchronous 

### Server / Backend
#### Models



## Installation

User model

```bash
const mongoose = require("mongoose");
const user = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});
module.exports = mongoose.model("User", user);
```

Todo model

```bash 
const mongoose = require("mongoose");

const todo = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  deleted: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("todo", todo);

``` 
#### Backend routes 



|HTTP Method| URL         | Request Body                              | Success status| 
| :-------- | :---------- | :-------------                            | :-----------| 
|  POST     | /createrole | { role, Permissions }                     | 201       |    
|  GET      |/ role       |                                           | 200       |   
|  POST     |/todo        | {task}  req.body;                         | 201       |    
|  GET      |/todo        |                                           | 200      |     
|  PUT      |/todo        | { id } = req.params; { task } = req.body; |201       |     
| Delete    |/todo        | { id }                                    |201       |    


## Acknowledgements

I would like to express my special thanks of gratitude to our teachers as well as our tuwaiq javaScript bootcamp who gave us the golden opportunity to do this wonderful project on the topic (Todo ), which also helped us in doing a lot of Research and we came to know about so many new things. I am really thankful to them.

