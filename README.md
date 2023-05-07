


##  Reminders


<a href="">
  <img alt="Reminders" src="">
</a>


## 🚀 Getting Started

This project is divided into 2 parts:
1. Backend (server folder) 
2. Frontend (web folder)

💡 The frontend needs the backend to be up and running

### Pre-requisites

Before you begin, you need to make sure that you already have the following tools installed:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
In addition, you need an editor to work with code like [VSCode](https://code.visualstudio.com/)
and a running [postgres](https://www.postgresql.org/) database.


#### 🎲 Run the backend (the development serve)

```bash

# Clone the repository
$ git clone https://github.com/CampossCaio/Reminders

# Access the project folder
$ cd Reminders

# Go to the server folder
$ cd server

# Install the dependencies
$ yarn

# Run the following command to perform the migrations
$ yarn prisma migrate dev

# run the development serve
$ yarn start:dev

# The server will be started on port 3333 - access http://localhost:3333 

```

---

#### 🧭 Run the web (Frontend)

```bash

# Go to the web folder
$ cd web

# Install the dependencies
$ yarn

# Run the application
$ yarn dev

# The application will be started on port 3000 - access http://localhost:3000

```


---

