# Assignment

Imagine you are the owner of a movie theater. You have a range of movies playing today, each at a specific time. For simplicity, we’ll assume there is only one movie hall, with a limited number of numbered seats, each movie is played just once, and only today. Your customers can see the movies playing today, the scheduled time, available seats for a specific movie and make a reservation.

Once a reservation is made, the reserved seats become unavailable for that movie. If a reservation is cancelled, the seats become available again.
You need to model the business using TypeScript and ES6. After creating the model, you should also create 'source.json' files which will contain the test data. You then need to interact with data from services which answer the following criteria:

1. There has to be a way to see which movies are playing today, and the time they’re playing at (ex. A service that can return this information).
2. There also has to be a way to see available seats for a specific movie, by specifying the movie id.
3. There needs to be a way to make a reservation by specifying a movie, and list of seats. Also, there should be a way to cancel a reservation by specifying a reservation id.

## Instructions

1. Open the application.
2. Make your changes.
3. Run:

    ```shell
    npm install
    ```

4. Run:

    ```shell
    npm start
    ```

    Server should now be listening on port 3000.
5. Using Postman (or curl, etc) make http requests to the endpoints you defined in  `index.ts` (ex. ["http://localhost:3000/movies"](http://localhost:3000/movies))

All operations should be logged to the console, including the operation name, call parameters and results.

You may send your assignments in the usual way, by email.
