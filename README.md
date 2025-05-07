# Personal Portfolio

This is a personal portfolio website showcasing the work, education, and contact information of Faisal Khan, a BS Artificial Intelligence student. Built with **React.js**, **Material UI**, and **Vite**, the portfolio features a modern, responsive design with a collapsible sidebar, lazy-loaded pages, and a dynamic page title system.

## Features

- **Home Page**: Displays a profile picture, name, and title with a vibrant orange gradient background.
- **Education Page**: Lists academic qualifications in a styled table using a custom `CustomTable` component.
- **Projects Page**: Showcases three projects (Ping Pong, Notepad, Chess) with images and descriptions in Material UI cards.
- **Contact Page**: Includes a contact form (with a mock submission alert) and contact details.
- **Navigation**: A collapsible sidebar with Material UI icons for easy navigation.
- **Responsive Design**: Adapts to various screen sizes using Material UI’s grid system.
- **Dynamic Page Titles**: Updates the header title based on the current page using React Context.
- **Styling**: Consistent color scheme with a dark gradient background, inspired by the original HTML/CSS portfolio.

## Project Structure

```
personal-portfolio-bsai23028/
├── public/
│   ├── assets/
│   │   ├── FaisalKhan1.png
│   │   ├── pingpong.jpg
│   │   ├── notepad.jpeg
│   │   ├── chess.jpeg
├── src/
│   ├── components/
│   │   ├── CustomTable.jsx
│   │   ├── CustomTable.css
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── SideNav.jsx
│   │   ├── SideNav.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Education.jsx
│   │   ├── Education.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   ├── context/
│   │   ├── PageTitleContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
```

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or **Yarn**
- A modern web browser (e.g., Chrome, Firefox)
