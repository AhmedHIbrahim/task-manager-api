# task-manager-api
Used Technologies:
* Node.JS 
* MongoDB
* Heroku 

## APIs
* BASE_URL = https://ahi-tasks-manager.herokuapp.com

### User API

| API  | PATH | REQUEST | 
| ------------- | ------------- | ------------- | 
| Register | /users  | POST  |
| Login | /users/login  | POST  | 
| Upload Avatar | /users/me/avatar  | POST  | 
| Logout | /users/logout  | POST  | 
| logoutAll | /users/logoutAll  | POST  |  
| Read Profile | /users/me  | GET  |
| Update Profile | /users/me  | PATCH  | 
| Delete User | /users/me  | DELETE  |
| Delete Avatar | /users/me/avatar | DELETE |


### Task API


| API  | PATH | REQUEST | 
| ------------- | ------------- | ------------- | 
| Create Task | /tasks  | POST  |
| Read Tasks | /tasks?sortBy=createdAt:asc  | GET  |
| Read Task | /tasks/:taskToken  | GET  |
| Update Task | /tasks/:taskToken  | PATCH  |
| Delete Task | /tasks/:taskToken  | DELETE  |


## API Details

### User API

* Register
```
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Tester",
  "email": "tester@gmail.com",
  "password": "justdoit"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/users", requestOptions)
```

* Login
```
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "ah@em.co",
  "password": "justliveit"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/users/login", requestOptions)
```

* Upload Avatar 

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");

var formdata = new FormData();
formdata.append("avatar", fileInput.files[0], "/C:/Users/Ahmed/Downloads/images/add.png");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/users/me/avatar", requestOptions)
```

* Logout
```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/users/logout", requestOptions)
```

* Logout All

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/users/logoutAll", requestOptions)
```


* Read Profile

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/users/me", requestOptions)
```

* Update Profile

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "name": "Tester10",
  "password": "justdoit",
  "age": 40
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/users/me", requestOptions)
```

* Delete User

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/users/me", requestOptions)
```

* Delete Avatar
```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/users/me/avatar", requestOptions)
```



### Task API
* Create Task 

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "description": "Do Shopping",
  "completed": false
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/tasks", requestOptions)
```

* Read Tasks 

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/tasks?sortBy=createdAt:asc", requestOptions)
```

* Read Task

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/tasks/60fdb6612f03570cf0d8d151", requestOptions)
```

* Update Task

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "completed": true
});

var requestOptions = {
  method: 'PATCH',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/tasks/60ff17af97418f14d0b883c8", requestOptions)
```

* Delete Task 

```
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTE4MjZjMGQ0YWQwNjAwMTYwMDMzMDMiLCJpYXQiOjE2Mjg5NzI3MzZ9.ftMvsc-GQUzeV5F34OfsGsanrk1UsKgNr3v8sS4yFcU");

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://ahi-tasks-manager.herokuapp.com/tasks/60fdb6612f03570cf0d8d151", requestOptions)
```






