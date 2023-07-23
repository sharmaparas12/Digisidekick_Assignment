API Documentation

This document provides an overview of the APIs created for managing user data. The API endpoints and their functionalities are described below:

Add a User
Request
URL: POST /adduser
Description: Adds a new user to the system.


Request Body:
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securepassword",
  "about": "A brief description of the user"
}


Response
Status Code: 200 OK
Description: The user is successfully added to the system.
Get All Users
Request
URL: GET /users
Description: Retrieves a list of all users from the system.
Response
Status Code: 200 OK
Description: Returns a JSON array containing information about all users. Example response:

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "about": "A brief description of the user"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "about": "Another user in the system"
  },
  // More users...
]


Update User
Request
URL: PATCH /users/:id
Description: Updates the information of an existing user.
Request Parameters:
id (required): The ID of the user to be updated.
Request Body: A JSON object containing the fields to be updated. For example:

{
  "name": "Updated Name",
  "about": "Updated description"
}


Response
Status Code: 200 OK
Description: The user information is successfully updated.
Delete User
Request
URL: DELETE /users/:id
Description: Deletes a user from the system.
Request Parameters:
id (required): The ID of the user to be deleted.
Response
Status Code: 200 OK
Description: The user is successfully deleted from the system.