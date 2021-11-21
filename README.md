## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Structure overview](#structure-overview)

## General info

This is a basic app showing the top 100 movies as ranked by the iTunes Store. Additionally, using a custom video, you can watch trailers for each movie. The application is available at https://top-100-movies-frontend-task.vercel.app/ .

## Technologies

Project is created with:

- [Next.js]
- [TypeScript]
- [Sass]
- [Bootstrap]

## Setup

To run this project, install it locally using npm:

```bash
npm install
npm run dev
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure overview

```
├── README.md
├── next.config.js
├── package.json
├── pages
│   ├── video.tsx
│   ├── _app.tsx
│   └── index.tsx
├── components
│   ├── Footer
│   ├── Heading
│   ├── Movies
│   ├── svg
│   └── VideoPlayer
├── containers
│   ├── HomePage
│   └── VideoPage
├── public
├── types
└── styles
```
