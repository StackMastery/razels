# Razels Server

This is the server for [StackMastery Razels](https://github.com/programming-hero-web-course2/b10-a10-client-side-StackMastery).

## Dependencies

- **Express** - Used to create the server
- **Mongoose** - to handel Razels create, update, delete , view
- **Cors** - For cros origin policy
- **Dotenv** - to secure project env


## Project Diagram

    Project Root
    │
    ├── controllers
    │   ├── campaign.controller.js
    │   └── subscribe.controller.js
    │
    ├── db
    │   └── db.js
    │
    ├── models
    │   ├── campaign.model.js
    │   ├── mydonation.model.js
    │   └── subscribe.model.js
    │
    ├── routes
    │   └── default.routes.js
    │
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── server.js
![Razels Diagram](https://res.cloudinary.com/dhuydj1lg/image/upload/v1733675063/pagl2fgay4miv6lvr1nw.svg)

     

## How To Install?
First Clone this Repository
   ```bash
   git clone https://github.com/programming-hero-web-course2/b10-a10-server-side-StackMastery
   cd .//b10-a10-server-side-StackMastery
   ```
After Cloned Repository Rename Or Duplicate And Give A name .env and configure the env
    
    PORT=YOUR_PORT
    MONGO_DB_URL=YOUR_MONGODB_URL
    ALLOWED_ORIGIN=YOUR_FRONTEND_DOMAIN

Then Open Your Terminal And Run

    npm install
    npm run dev

After running This command hope this project run 


