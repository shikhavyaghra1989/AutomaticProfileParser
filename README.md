# Smart Automated Profile Filter Engine
## By : Shikha Vyaghra In supervision of Prof. James Abello
## Getting Started with Frontend

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project sub directory (smartAutomatedProfileFilterEngine) , you can run:
### `npm install` : To install the dependencies
### `npm start` : To Start application
### `rm-rf node_modules && npm install` : To Reinstall everything

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view applicant creating module in Browser.
Open [http://localhost:3000/admin](http://localhost:3000/admin) to view Admin module in Browser.

## Getting Started with Backend
Tools needed to set up this application.
Java 11 \
MySql (Database server in local machine and workbench to read/write data) \
Intellij IDEA (IDE) \
Maven (To run maven command from terminal- optional(Can use IDE like Intellij IDEA otherwise)) \
Backend URL: [http://localhost:8080](http://localhost:8080/) : Backend API's runs on this endpoint


#### Steps to set up backend application
1 - Import the project in Intellij IDEA as `mvn`  project
2 - Update all the Database properties in application.properties file as :\
spring.datasource.username=****\
spring.datasource.password=********\
spring.datasource.url=jdbc:mysql://localhost:3306/AutomaticProfileParser \
3 - Change `spring.jpa.hibernate.ddl-auto=update` this property to `create` to create the schema in above Database and set it back to `update` once schema is created.\
4 - Then do mvn clean and build the application to download the backend dependencies.\
5 - Run the application.




