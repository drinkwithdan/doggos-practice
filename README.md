# Doggos! - MERN Practice

## This is Evan's changes - do they clash?

Get some practice scaffolding a MERN application from the ground up.

## Part 1

### Backend
Create an `api` directory where your Express application will live.

Install the `express`, `mongoose`, and `cors` packages.

The schema and model for the app is provided. Just move the [`models`](./models) and [`seed`](./seed) directories into your `api` directory.

Seed the database by running `node seed/run.js`.

Bootstrap your API server. Set up the necessary configuration and start your mongoose connection and the server itself.

Your front-end will be speaking JSON so make sure to tell Express to parse JSON-formatted request bodies.

Create your GET index route
| URL       |                                               |
|-----------|-----------------------------------------------|
| /         | Return the whole collection of Doggos as JSON |


### Frontend
Scaffold a `client` directory using create-react-app.

Clean up some of the starter CRApp generated for you.

Install react-router-dom and create your routes.

| URL        |                               |
|------------|-------------------------------|
| /          | Show all the doggos           |
| /815e7b8bb | Show a single doggo's details |

You'll need a `useEffect` to load the data from the API server.

Decide whether you want to nest your routes and render a doggo's details in an `Outlet` or un-nested and in a separate page. Structure your routes appropriately.

Add some style. Try out [`react-bootstrap`](https://react-bootstrap.github.io/) or [`mui`](https://mui.com/).


## Part 2

### Backend
Add create, update, delete routes (POST, PUT, DELETE) that modify your data properly. Make sure to return the appropriate JSON object back to the client after a database operation.

Test your routes with Postman.

### Frontend
Create routes and/or components that will use your API's create, update, and delete endpoints.

You have a freehand for how to structure and design your components.

Do you think it makes more sense to have Edit and Delete links/buttons only in the "Show" route instead of the "Index"? How about having a Delete confirmation page before actually sending the DELETE request? Have it your way.
