# Appointment Management System (AMS)

This is a web app built with ReactJS for managing appointments. It features three types of users - admin, doctor, and patient - each with different access and viewing/editing rights.

## Features

- Create, update, and view appointments
- Create, update, and view patients
- Responsive UI

## Access and Viewing/Editing Rights

### Admin

- Can view and edit all appointments

### Doctor

- Can view and edit their own appointments and patients

### Patient

- Can only view their own appointments

## Technologies Used

- ReactJS
- json-server (for simulating a back-end server)

## Getting Started

1. Clone the repository: `git clone https://github.com/[user]/ams.git`
2. Install the dependencies: `npm install` or `yarn install`
3. Start the json-server: `npm run json-server`
4. Start the app: `npm start` or `yarn start`

## Deployment

To deploy the app in a real-world scenario, you will need to set up a real back-end server and database, and modify the app to make HTTP requests to the real server instead of the json-server.

## Code and Architecture

The code and architecture of the app follow the best practices and principles of React, including the use of functional components and hooks, and a clear separation of concerns. The app uses Redux for managing the global state, and React Router for routing.

## Contributing

To contribute to the project, follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/[name]`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/[name]`
5. Submit a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [json-server](https://github.com/typicode/json-server) for providing a quick and easy way to simulate a back-end server for the app.
- [Create React App](https://github.com/facebook/create-react-app) for providing a modern and easy-to-use development environment for React apps.

