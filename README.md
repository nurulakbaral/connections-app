# Introduction

Connections App is an application that displays a list of friends connected to the user's account. The application is available for both Desktop and Mobile versions, ensuring users have a comfortable experience on various devices.

# How To Install

1. Clone this repository using `git clone`.
2. Don't forget to install the `node_modules` by running `pnpm install`.
3. Start the application by running `dev:app`.

# Features and Requirements

- [x] Responsive for Desktop and Mobile
- [x] Search Bar
- [x] User Details
- [x] Infinite Scroll
- [x] Shimmer Effect
- [x] Loading and Feedback States

# Architecture and Technologies

### Technologies

- [x] React and Next.js
- [x] Tailwind CSS
- [x] Tanstack Query
- [x] Motion (Framer Motion)

### Code Quality

I use several tools to ensure the quality of the code I write and have added `husky` and `lint-staged` to keep the code neat and consistent.

- [x] ESLint
- [x] Prettier

### Setup and Folder Structuring

I created a micro-generator library using `plop` named `@cli-toolbox/project` to simplify project setup and ensure consistent folder structure.  
Source: [CLI Toolbox - Project Generator](https://github.com/nurulakbaral/cli-toolbox/blob/main/packages/cli-toolbox-project/README.md)
