# Pyramid Generator with Next.js

This project is a solution to the CS50 pyramid challenge, implemented using [Next.js](https://nextjs.org/) instead of C. The application allows users to generate a pyramid of a specified height between 1 and 8.

## Repository Link

You can find the repository [here](https://github.com/anayo-hub/next-pyramid-generator).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 with your browser to see the result.

## Usage

Open the application in your browser.
Enter a height value between 1 and 8 in the input field.
Click the "Generate Pyramid" button.
The pyramid will be displayed below the form.
Implementation Details
The pyramid generator is implemented using React's useState hook to manage state and event handlers to handle user input and generate the pyramid. Here’s a brief overview of the main components:

## Pyramid Component

useState Hook: Manages the height input and the generated pyramid.
handleSubmit Function: Validates the input height and calls the generatePyramid function.
generatePyramid Function: Generates the pyramid based on the input height and updates the state.
Home Page
Renders the Pyramid component and includes the page metadata.
Code Structure
app/page.js: Contains the Home component which renders the Pyramid component.
components/Pyramid.js: Contains the Pyramid component which includes the form and the logic to generate the pyramid.
Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!
