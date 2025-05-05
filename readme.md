# Project Name: VidVerse (Backend Project)


## Project Summary:
This project is a comprehensive backend application built using Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt, and other technologies. It aims to create a full-fledged video hosting website similar to YouTube with features like user authentication, video upload, like/dislike, commenting, tweeting, subscribing, and more.

## Key Features:
- User authentication using JWT and Bcrypt for secure password hashing.
- Video upload functionality.
- Like and dislike videos.
- Commenting on videos.
- Tweeting and subscribing to other users.
- Utilizes standard practices such as access tokens and refresh tokens.

## Model Design Link:
You can view the design model for this project [here](https://app.eraser.io/workspace/IjuDeHAW1WwnKRJ6Oc0R?origin=share).

## Postman File:
Included in this repository is a Postman collection file (`vidverse.postman_collection.json`) for testing and interacting with the backend API.

## PM2 Integration:
The project includes PM2 for process management in production environments. PM2 is used to ensure reliable and efficient execution of the Node.js application.

## Installation:
1. Clone the repository: `git clone https://github.com/vaibhav108d/vidverse.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Environment Variables:

To run this project, you will need to set up the following environment variables in a `.env` file at the root of your project:

- `PORT`: The port number on which the server will run (default: `8000`).
- `MONGODB_URI`: The connection URI for your MongoDB database.
- `CORS_ORIGIN`: The allowed origin for Cross-Origin Resource Sharing (CORS) (default: `*`).
- `ACCESS_TOKEN_SECRET`: Secret key for generating access tokens.
- `ACCESS_TOKEN_EXPIRY`: Expiry time for access tokens (e.g., `1d` for 1 day).
- `REFRESH_TOKEN_SECRET`: Secret key for generating refresh tokens.
- `REFRESH_TOKEN_EXPIRY`: Expiry time for refresh tokens (e.g., `10d` for 10 days).
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name for image/video hosting.
- `CLOUDINARY_API_KEY`: Cloudinary API key.
- `CLOUDINARY_API_SECRET`: Cloudinary API secret.

Example `.env` file:

```plaintext
PORT=8000
MONGODB_URI=mongodb+srv://username:password@cluster0.mongodb.net/dbname
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=bfdc443e9efdb8f5700e848f262cca500b40cadf1605292a736f7374f0c38dfa
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=bd8448bc6ecddb722f194e1a926aac3e934d040299cf92c298c4da3
REFRESH_TOKEN_EXPIRY=10d
CLOUDINARY_CLOUD_NAME=dyjhsyblr
CLOUDINARY_API_KEY=285598114231897
CLOUDINARY_API_SECRET=TWg9ZXoCFxfTVWiEsX1KicgpHYs
```

## Usage:
1. Ensure MongoDB is running.
2. Start the server using the provided start script.
3. Access the API endpoints using tools like Postman or integrate them into your frontend application.

## Contributing:
Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.


