# W09D03 

## Todo Task 

### Description

Todos task is a small project it has backend API by node express and frontend by "React Redux" and CSS for simple style.

### User Stories

•	Signup: As an anon, I can sign up on the platform so that I can start adding my tasks.
•	Login: As a user, I can login to the platform so that I can start doing my tasks and editing and deleting it.
•	Logout: As a user, I can logout from the platform. 
•	Edit my tasks, As a user, I can update my task.
•	Delete my task, As a user, I can delete my task.


### Client / Frontend

#### React Router Routes (React App)


| Parameter | Component  | Permissions    | Behavior    |
| :-------- | :----------| :------------- | :-----------| 
|  /        |   Home     | public <Route> | Home Page   | 
|  /signup  |   signup   | anon only <AnonRoute> | Signup form, link to login, navigate to homepage after signup | 
|  /login  |   login   | anon only <AnonRoute> | Login form, link to signup, navigate to homepage after login |
|  /Nav  |   Nav   | user only <PrivateRoute> | The navbar has a logout button and displays it on all user pages. | 
|  /task  |   Task   | user only <PrivateRoute> |The task page has an input label to add a new task and submit button to submit the task. |   


### Components

. homepage

. signup page 

. login page 

. Nav 

. Task page 

