# Server using Apollo GraphQl Server

# HOW TO USE

1. Clone the repository and run `npm run i` or `yarn add`
2. Create `.env` file and paste
   </br>
MONGODB_URI = YOUR_MONGODB_URI
   </br>
REDIS_PORT = YOUR_REDIS_PORT
   </br>
REDIS_HOST = YOUR_REDIS_HOST
   </br>
REDIS_PASSWORD = YOUR_REDIS_PASSWORD
   </br>
4. Connect your database
   `mongodb+srv://<username>:<password>@beyondthebasics.abcde.mongodb.net/test`
    Here's a short explanation of each component:
      - USER: The name of your database user
      - PASSWORD: The password for your database user
      - HOST: The name of your host name (for the local environment, it is localhost)
      - PORT: The port where your database server is running (typically 5432 for PostgreSQL)
      - DATABASE: The name of the database
      - SCHEMA: The name of the schema inside the database
          
