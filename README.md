# OSS Movie API Web Application

This project is a web application for displaying box office information using open APIs such as KMDB and KOBIS. It provides up-to-date movie data and rankings.

## Project Overview

This web application uses several movie-related open APIs to fetch and display data such as weekly and daily box office rankings. It was created as a reference for the 2024 2nd semester "Open Source Studio" course.

## Live Demo

You can access the live version of the web application here:

[Live Demo](https://oss-ta-open-api-example.vercel.app/)

## APIs Used

This project makes use of the following public APIs to gather movie data:

- **KMDB (Korean Movie Database)**: [KMDB API](https://www.kmdb.or.kr/main)
- **KOBIS (Korean Box Office Information System)**: [KOBIS Open API](https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)

## Features

- **Weekly and Daily Box Office Rankings**: Displays both weekly and daily movie rankings retrieved from the KOBIS API.
- **Search Functionality**: Allows users to search for specific movies by title using KMDB API.
- **Responsive Design**: Built using Chakra UI for responsive and modern user interfaces.
- **Movie Details**: Displays detailed information about each movie, including director, cast, release date, and more.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library for React.
- **Axios**: For making HTTP requests to external APIs.
- **Framer Motion**: For adding smooth animations and transitions.
- **React Router**: For client-side routing.
- **Vercel**: Used for deployment.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/oss-movie-api.git
   cd oss-movie-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

The app will be running on `http://localhost:3000`.

## Deployment

This project is deployed using Vercel. You can view the live deployment at:

[https://oss-ta-open-api-example.vercel.app/](https://oss-ta-open-api-example.vercel.app/)

## Contribution

Feel free to submit issues or pull requests. Contributions are welcome!

## Author

This project was created by **박지성 TA** as part of the **2024 2학기 오픈소스 스튜디오** 수업 참고자료.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
