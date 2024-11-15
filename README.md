Project Name: Jumbly
Description: Jumbly is a stand alone app, designed for facility managers to streamline task within their organization.


## Installation Guide for the frontend team
("The react app was installed using vite")
clone the repository
navigate to project folder
install dependencies : npm install 
run the project: npm run dev


## List of dependencies installed so far(pls all frontend team members should update this list whenever they install a dependency on the project)

1.  Tailwindcss
2.  React-icons
3.  React-router
4.  Animate.css (it has been uninstalled from the project)
5.  Axios


## Folder Structure For Static Files
1. All images are kept in the assets/images folder which can be found in the src folder
2. The assets folder also contains the data folder where data that should be dynamic but are currently static are kept.

##  Styling
1. styling for this project is implemented with tailwindcss
2. All styling are done inline, except for a few custom classes that are in the index.html, styling should be implemented inline using tailwindcss
3.{landing page} Theme colors, the theme colors that stood out from the design have been assigned to tailwind classes(themeColor2 and themeColor3), while background styles are(themeBg1 and themeBg2)

## Landing Page
A few sections of the landing page runs with dynamic data.

1. The pricing card: the pricing card is running on an external json file in the assets/data folder for all its data.
2. The Rating icons have been prepared using Javascript. so when ever you put the ratings from 0 to 5and call the function. the corresponding star would be displayed
3. The feedback and about card are also using a json like structurw



<!-- 
 1. this project is using tailwindcss
 -->




 <!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->