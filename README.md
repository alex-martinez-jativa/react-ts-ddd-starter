# React TypeScript DDD Architecture Starter

## Folder Structure

### Domain

This directory contains the model entities and repository interfaces.

### Infrastructure

Here, you'll find all the infrastructure logic, such as external connections (e.g., fetching data). Additionally, there's a wrapper for API fetch operations.

### Application

This directory has the use cases that interact with the repository. It serves as the file used in the presentation layer.

### Presentation

All pages and components are organized in this directory.


### Getting Started

To use this project, follow these steps:

1. Clone the repository:

- `git clone <repository-url>`

2. Install dependencies:

- `npm install`

3. Run the development server:

- `npm run dev`