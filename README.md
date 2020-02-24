# ISP App
This code is made for frontend side of ISP management project. It is build using Angular (version 8.3.8) and Material.
It provides functionalities to query ISP list, view details and download the ISP information.

##Pre-requisite
* Your system should have npm version >6.x.x and node version > 11.x.x.
* If running locally, the server side code should be present and running. Can be downloaded from [here](https://github.com/mrmilind11/isp-backend)

##Installation
* Clone or download the repo from github.
* Open the folder in terminal
* Run this to install dependencies  
    ```
    npm i
    ```

##Serve Locally
* Run the command
    ```
        ng serve --port=15000
    ```
* By default it takes port=4000 as server. Make sure your server code is running on the same.
* To modify the server access point change 'apiPoint' to desired in 'environment.ts'

##Production build
* To do production build. Run
    ```
        ng build --prod
    ```
* On production build it uses a heroku server for api calls. 
* To modify the access point change 'apiPoint' to desired in 'environment.prod.ts'

##Compatibility
* App is tested on firefox and chrome browser on MacOs and Windows platform.
* For best experience use updated Firefox/Chrome browser.

##Features
* View ISP list
* Query ISP list using search. You can search by name, rating or price.
* Sorting can be done by Name, Price and Rating. Also order can be set.
* Details of ISP can be viewed in side navigation.
* Details of ISP can be downloaded as well.

##Responsive Design
* App is made responsive to support all screen sizes.
* Tested screen width range from 320px to 1920px;