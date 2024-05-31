# Server using Apollo GraphQl Server

# HOW TO USE

1. Clone the repository and run `npm run i` or `yarn add`
2. Create `.env` file and paste

   DATABASE_URL=<`your DB username`>
   </br>
   APP_PORT=<`your port`>
   </br>
   AUTH_USERNAME=<` your username`>
   </br>
   AUTH_PASSWORD=<` your password`>
   </br>
   
 3. Connect your database
   `postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA`
    Here's a short explanation of each component:
      - USER: The name of your database user
      - PASSWORD: The password for your database user
      - HOST: The name of your host name (for the local environment, it is localhost)
      - PORT: The port where your database server is running (typically 5432 for PostgreSQL)
      - DATABASE: The name of the database
      - SCHEMA: The name of the schema inside the database
          
