# My Personal Website

![Website Preview](/public/images/preview.png?raw=true "Website Preview")

This is the underlying code for my website, [brianhamilton.me](https://www.brianhamilton.me/).

[Node.js](https://nodejs.org/en/) app using [Express](https://expressjs.com/), [React](https://facebook.github.io/react/), [React Scroll](https://github.com/fisshy/react-scroll), [Nodemailer](https://nodemailer.com/about/), and [Material-UI](http://www.material-ui.com/#/).

## Installation

1. Download the latest version of [Node.js](https://nodejs.org/en/).

2. Clone the repository either through command line or a ZIP download.

3. Use terminal/cmd/powershell/something similar to navigate to the directory with the files and type the command below. This will automatically install all dependencies listed in the **package.json** file.

    ```
    npm install
    ```

4. Create your own **.env** file and copy everything over from the **.env.example** file. The values for each are necessary for implementing the mailing functionality in a local environment.
    
5. Type and run the command below to run the server. This will automatically open a browser window and navigate to [http://localhost:3000](http://localhost:3000).

    ```
    npm start
    ```

## Usage Notes

1. This website uses [Create React App](https://github.com/facebook/create-react-app) to function. Follow its usage details to understand how to build for production.

2. Nodemailer implementation uses environment variables for the sensitive IDs and tokens. Follow online documentation to create your own, then follow step 5 from the installation instructions to put them in place. It can also be removed entirely. If you deploy this on an actual server, you will need to manually set the variables. On Heroku, this is done with config vars.

3. The heroku-ssl-redirect module is included, but will only do anything with proper SSL certificates in use on Heroku.

4. This site has been optimized for Chrome, Firefox, Safari, Internet Explorer, and mobile Android and iOS devices.

5. Small bits of jQuery is used for mobile optimization and scrolling behavior for the banner and header bar. The code is located in the **/public/scripts/banner.js** file.

---

Let me know if there are any issues or if you have any questions.
