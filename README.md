# Overview

This project is for Ajaib senior frontend test. The finished project also can be seen on [https://web-engineering-test.vercel.app/](https://web-engineering-test.vercel.app/). I use [Vercel](https://vercel.com/) to deploy the project.

# Technologies

This project is built with several technologies:
* [Typescript](https://www.typescriptlang.org/)
* [Next JS](https://nextjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React-query](https://react-query-v2.tanstack.com/)
* [Jest](https://jestjs.io/)
* [Testing-library](https://testing-library.com/)

# Usage

I will use pnpm for my package manager. The reason is pnpm will save disk space and boost installation speed. When using npm or Yarn, if you have 100 projects using a dependency, you will have 100 copies of that dependency saved on disk. You can read the complete motivation [here](https://pnpm.io/motivation). You can still use yarn and npm to run the project.

```bash
# install 
pnpm install

#or
npm install

# or
yarn install

# run development
pnpm run dev

#or
npm run dev

# or
yarn run dev

# run linter
pnpm lint

# run unit test
pnpm test
```

# Architecture

## Data Fetching & State Management
This project will use [React-query](https://react-query-v2.tanstack.com/) to fetch data and server-side state management. React-query is a data-fetching library that makes fetching, caching, synchronizing, and updating server state easier. React-query also does optimization such as [Stale While Revalidate](https://web.dev/stale-while-revalidate/), smart refetches, tracking queries, etc.

## Unit Testing
This project will use [Jest](https://jestjs.io/) and [Testing-library](https://testing-library.com/) for unit testing. I use [Kent C Dodds course and blog](https://kentcdodds.com/courses) as a reference for my testing approach.

## Debounce Search, Filter, and Sort
This project will use debounce search for searching keywords, which will wait until users stop typing and will fetch the updated query. Users' tables will be filtered based on gender (`male` & `female`). I've been searching [the documentation](https://randomuser.me/documentation), and I don't find any Sort feature. So I sort the data with array manipulation based on `username`, `email`, `gender`, and `registered date` with `ascending` and `descending` order.

# Directory Structure
I use a features-based directory structure. Features-based directories separate specific features related components from generic UI components. [This blog](https://www.developerway.com/posts/react-project-structure) explains features-based structure with details.

```

public/ Next.js public directory, used for storing static assets.
|
pages/ Next.js pages. This folder includes the routes of our project
|
src/ The source code for the project
└── features/ contains every features on our app
    └── users-list/
        ├── users-list.component.tsx
        ├── users-list.hook.ts
        ├── users-list.util.ts
        ├── users-list.type.ts
        └── table
            ├── users-list-table.component.tsx
            └── users-list-table.constant.ts
    components/ contains every shared component
    ├── layout/
        ├── layout.component.tsx
        └── layout.test.tsx
    hooks/ contains shared hooks for the app
    ├── use-debounce/
        ├── use-debounce.hook.ts
        └── use-debounce.test.ts

styles/ Global CSS files.
|
types/ Global Typescript types
```
