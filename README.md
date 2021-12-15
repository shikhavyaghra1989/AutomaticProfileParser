# Smart Automated Profile Filter Engine
## By : Shikha Vyaghra In supervision of Prof. James Abello

### Knowledge required:
1. React application
2. Java application setup 
3. Maven  
4. Intellij

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
1 - Import the project in Intellij IDEA as `mvn`  project\
2 - Update all the Database properties in application.properties file as :\
spring.datasource.username=****\
spring.datasource.password=********\
spring.datasource.url=jdbc:mysql://localhost:3306/AutomaticProfileParser \
3 - Change `spring.jpa.hibernate.ddl-auto=update` this property to `create` to create the schema in above Database and set it back to `update` once schema is created.\
4 - Then do mvn clean and build the application to download the backend dependencies.\
5 - Run the application.

## Steps to set up backend application using terminal
1. Install mvn on your machine with java 11.
2. Create mysql database called "AutomaticProfileParser"    
3. Update all the Database properties in application.properties file as :
   spring.datasource.username=****\
   spring.datasource.password=********\
   spring.datasource.url=jdbc:mysql://localhost:3306/AutomaticProfileParser 
4. Change `spring.jpa.hibernate.ddl-auto=update` this property to `create` to create the schema in above Database and set it back to `update` once schema is created.
5. Go to project root folder "AutomaticProfileParser" mvn clean install to build the project
6. Once build is success, run application using mvn spring-boot:run command.
   **Note** Endpoint in following files needs to be changed according to your application server:
   a. ApiCall.js( PROFILE_SAVING_URL ="http://localhost:8080")
   b. ApplicantProfileController(@CrossOrigin(origins = "http://localhost:3000"))
   c. FileController(@CrossOrigin(origins = "http://localhost:3000"))
   Replace "localhost" with corresponding ip address.
   




