# Learning Next 13 App Route - Image Gallery and Search

This project is a Next.js application that implements a gallery for displaying images and provides a search functionality using the Unsplash API. The application is built with the Next.js framework, which provides server-side rendering, routing, and other features to create performant and scalable web applications.

## Features

- Image Gallery: Display a grid of images fetched from the Unsplash API.
- Search: Search for images based on user-entered keywords.
- Dynamic Routing: Implement dynamic routes to view individual images or user profiles.
- Server-Side Rendering (SSR): Utilize Next.js's SSR capabilities for improved performance and SEO.
- API Integration: Fetch image data from the Unsplash API for displaying images and related information.
- Responsive Design: Ensure the application adapts well to different screen sizes and devices.

## Setup and Usage

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` or `yarn install`.
3. Obtain an access key from the Unsplash API by creating an account at [https://unsplash.com/developers](https://unsplash.com/developers).
4. Create a `.env.local` file in the root directory of the project and add your Unsplash API access key:

   ```
   UNSPLASH_ACCESS_KEY=your_access_key_here

   ## not need NEXT_PUBLIC_ , because using in server not client
   ```

5. Start the development server by running `npm run dev` or `yarn dev`.
6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

The project structure follows the conventions of a typical Next.js application:

- `/app`: Contains the Next.js app, which represent different routes of the application.
- `/components`: Includes reusable React components used throughout the application.
- `/api`: Contains serverless functions or API routes used for fetching data from the Unsplash API.
- `/styles`: Holds CSS or SCSS files for styling the components.

## Dependencies

The main dependencies used in this project are:

- Next.js: A React framework for building server-side rendered applications.
- Axios: A library for making HTTP requests to fetch data from the Unsplash API.
- Tailwind CSS: A utility-first CSS framework for quickly styling the application.
- Shadcn/ui : Re-usable components built using Radix UI and Tailwind CSS.
- React Icons: A collection of popular icons as React components.

Please refer to the `package.json` file for a complete list of dependencies and their versions.

## Conclusion

This project provides an example of how to build an image gallery and search functionality using the Next.js framework and the Unsplash API. It showcases the usage of Next.js's routing, server-side rendering, and integration with external APIs. Feel free to explore and enhance the project to suit your requirements and expand its functionality.

For more information about Next.js, refer to the [Next.js documentation](https://nextjs.org/docs). To learn about the Unsplash API, visit the [Unsplash API documentation](https://unsplash.com/documentation).

Happy coding!
