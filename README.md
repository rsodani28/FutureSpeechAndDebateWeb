# Future Speech and Debate Camp Website

![Future Speech and Debate Camp](public/favicon.png)

A comprehensive web application for the Future Speech and Debate Camp, built with the T3 Stack. This website serves as a platform for students and parents to learn about the camp, view testimonials, and sign up for upcoming sessions.

## About the Project

Future Speech & Debate Camp is a summer program designed to teach students how to speak more confidently, think more critically, and be more mindful. The camp is taught by accomplished high school students who have qualified for the National Speech & Debate Tournament and know what it takes to succeed.

## Features

- **Informative Home Page**: Overview of the camp's mission, features, and benefits
- **About Instructors**: Information about the qualified instructors leading the camp
- **Registration System**: Easy-to-use signup form for camp registration
- **Testimonials**: Dynamic testimonial carousel showcasing parent feedback
- **Review Submission**: Ability for parents to submit reviews about their experience
- **Admin Dashboard**: Secure interface for managing reviews and site content
- **Mobile-Responsive Design**: Optimized for all screen sizes

## Tech Stack

This project is built using the [T3 Stack](https://create.t3.gg/), which includes:

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: For type safety and improved developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **tRPC**: End-to-end typesafe APIs for seamless client-server communication
- **NextAuth.js**: Authentication system for secure user management
- **Prisma**: Database ORM for intuitive database access

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rsodani28/FutureSpeechAndDebateWeb.git
cd FutureSpeechAndDebateWeb
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Update the .env file with your configuration
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/components`: Reusable React components
- `/src/pages`: Page components and API routes
- `/src/server`: Backend code including tRPC routers
- `/src/styles`: Global CSS and Tailwind configurations
- `/public`: Static assets like images and icons
- `/data`: JSON data for reviews

## Available Commands

- `npm run dev`: Start development server
- `npm run db:push`: Push Prisma schema to the database
- `npm run db:studio`: Open Prisma Studio to manage database
- `npm run build`: Build the application for production
- `npm run start`: Start production server

## Deployment

The application can be easily deployed to platforms like Vercel or Netlify that support Next.js applications.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

- Eric Chen - [erichonor890@gmail.com](mailto:erichonor890@gmail.com)
- Vivaan Lal - [vivaanlal11@gmail.com](mailto:vivaanlal11@gmail.com)
- Rishabh Sodani - [sodanirishabh@gmail.com](mailto:sodanirishabh@gmail.com)

## License

This project is licensed under the MIT License.

## Acknowledgements

- Developed by Rishabh Sodani
- Special thanks to all the instructors and students who contributed to making this camp successful
