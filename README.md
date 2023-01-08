# Getting Started with the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

This command installs a package and any packages that it depends on.\
If the package has a package-lock, or an npm shrinkwrap file, or a yarn lock file, the installation of dependencies will be driven by that.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Development Environment

- Node.js **^14.18.1**
- npm **^6.14.15**
- React **^17.0.2**
- TypeScript **^4.4.4**

### Some packages are added:

- mui/material **^5.8.0** : Theme the project and use common components
- reduxjs/toolkit **^1.9.1** : Set up redux for the react project
- node-sass **^7.0.1** : Set up sass for the react project
- react-router-dom **^6.3.0** : Set up for client side routing for this app
- recharts **^2.2.0**: Used for createting the Body fat percentage graph in the [top-page](http://localhost:3000/top-page) and the Body record chart in the [my-record-page](http://localhost:3000/my-record)

## Project Folder Structure

All of these folder structures will only be dealing with the files/folders inside the **src** folder.

The folder structure looks like this:

- **assets** : As the name says, it contains assets of my project. It consists of images and styling files. Here I can store our global styles.\
  📦assets\
   ┣ 📂icons\
   ┃ ┣ 📂iconsDefined\
   ┃ ┗ 📜index.tsx\
   ┣ 📂images\
   ┣ 📂styles\
   ┃ ┣ 📜App.scss\
   ┃ ┗ 📜global.scss\
   ┗ 📂theme\
   ┃ ┗ 📜setupTheme.js

- **components** : Components are the building blocks of any react project. This folder consists of a collection of UI components like buttons, modals, inputs, loader, etc., that can be used across various files in the project.\
  📦components\
  ┣ 📂alert\
  ┃ ┗ 📜Alert.tsx\
  ┗ 📂loading\
  ┃ ┣ 📜Loading.scss\
  ┃ ┗ 📜Loading.tsx
- **features** : The files in the features folder indicate the route of the react application. Each file in this folder contains its route. A page can contain its subfolder..\
  📦features\
   ┣ 📂desktop\
   ┃ ┣ 📂columnPage\
   ┃ ┃ ┣ 📜ColumnPage.scss\
   ┃ ┃ ┣ 📜ColumnPage.tsx\
   ┃ ┃ ┗ 📜utils.tsx\
   ┃ ┣ 📂dashboard\
   ┃ ┃ ┣ 📂components\
   ┃ ┃ ┃ ┗ 📜BodyWeightGraph.tsx\
   ┃ ┃ ┣ 📜Dashboard.scss\
   ┃ ┃ ┣ 📜Dashboard.tsx\
   ┃ ┃ ┗ 📜utilts.tsx\
   ┃ ┣ 📂footer\
   ┃ ┃ ┣ 📜Footer.scss\
   ┃ ┃ ┗ 📜Footer.tsx\
   ┃ ┣ 📂header\
   ┃ ┃ ┣ 📜Header.scss\
   ┃ ┃ ┗ 📜Header.tsx\
   ┃ ┗ 📂record\
   ┃ ┃ ┣ 📂components\
   ┃ ┃ ┃ ┗ 📜RecordChart.tsx\
   ┃ ┃ ┣ 📜Record.scss\
   ┃ ┃ ┣ 📜Record.tsx\
   ┃ ┃ ┗ 📜utils.tsx\
   ┣ 📂mobile\
   ┃ ┣ 📜Footer.tsx\
   ┃ ┗ 📜Header.tsx\
   ┗ 📂systems\
   ┃ ┗ 📜systemSlice.ts
- **hooks** : The hooks folder contains every single custom hook in my entire project. This is a useful folder to have in any size project since almost every project will have multiple custom hooks so having a single place to put them all is really useful.\
  📦hooks\
   ┣ 📜redux.tsx\
   ┣ 📜useTimeoute.tsx\
   ┗ 📜useTranst.tsx
- **utils** : Utils folder consists of some repeatedly used functions that are commonly used in the project. It contain only common js functions & objects like dropdown options, regex condition, data formatting...\
  📦utils\
   ┣ 📂intl\
   ┃ ┣ 📂components\
   ┃ ┃ ┗ 📜LanguagesProvider.tsx\
   ┃ ┣ 📜en.json\
   ┃ ┣ 📜ja.json\
   ┃ ┗ 📜vi.json\
   ┣ 📂redux\
   ┃ ┣ 📜logger.ts\
   ┃ ┣ 📜rootReducers.ts\
   ┃ ┗ 📜store.ts\
   ┣ 📜auth.ts\
   ┣ 📜constant.tsx\
   ┣ 📜helpers.tsx\
   ┣ 📜moment.tsx\
   ┣ 📜regex.tsx\
   ┗ 📜routes.tsx
- **views** : Views folder contains layouts available to the whole project like header, footer, etc. We can store the header, footer, or sidebar code here and call it.\
  📦views\
   ┣ 📂footer\
   ┃ ┣ 📜Footer.scss\
   ┃ ┗ 📜Footer.tsx\
   ┣ 📂header\
   ┃ ┣ 📜Header.scss\
   ┃ ┗ 📜Header.tsx\
   ┣ 📂login\
   ┃ ┣ 📜LoginPage.scss\
   ┃ ┗ 📜LoginPage.tsx\
   ┗ 📜NotSupported.tsx

## Application Specification and Overview

- **top-page**: Open [http://localhost:3000/top-page](http://localhost:3000/top-page) to view it in the browser.
- **my-record-page**: Open [http://localhost:3000/my-record](http://localhost:3000/my-record) to view it in the browser.
- **column-page**: Open [http://localhost:3000/column-page](http://localhost:3000/column-page) to view it in the browser.
