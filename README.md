# SECRET BOOK CLUB

A secret book club hidden on the web, **built with a NextJS front end**, with **Express, Prisma, and PostgreSQL for the back end**

# INSTALLATION

## Pre requisites

### 1. Node.js should be installed

```bash
node --version
npm install
```

This project uses version 21.1 of Node.
### 2. pgAdmin4 (PostgreSQL) and Prisma should be installed

https://www.pgadmin.org/download/
https://www.prisma.io

### 3. Internet Connection

Make sure you are established to a network in order to continue.

# LOCAL DEPLOYMENT

## 1. Clone the repository

### Make sure git is installed

```bash
git clone https://github.com/muttyqt15/tugas_compfest.git
```

### If Git CLI is installed

```bash
gh repo clone muttyqt15/tugas_compfest
```

## 2. Install dependencies

Paste this into your cmd line in integrated terminal.

### Back end

```bash
cd pantheon
npm i
```

### Front end

```bash
cd aether
npm i
```



# 3. Initialization

Follow these steps for initialization!


### Back end

Go to the back end directory

```bash
cd pantheon
```


Create a **.env file** in your root directory and add these variables:

```bash
PORT=5000
JWT_EXPIRES_IN=36000
JWT_SECRET=anythingYouWantString
```


Create a local database in PostgreSQL using pgAdmin4 and set the database URL in .env

(https://docs.rapidminer.com/9.4/server/install/database_setup/creating_postgres_db.html)


```bash
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB-NAME
```



Push schema.prisma into database

```bash
npx prisma generate
npx prisma db push
```

## Run the server!

```bash
npm start
```



### Front end

Go to the front end directory

```bash
cd aether
```


Create a **.env file** and add these variables:

```bash
NEXT_PUBLIC_BE_URL={BE_URL}
```

_So if your server runs on http://localhost:5000, insert http://localhost:5000 as BE_URL_
_It might look like this_

```bash
NEXT_PUBLIC_BE_URL=http://localhost:5000
```


## Run the client!

```bash
npm run dev
```

# Done! Secret Book Club should be up!