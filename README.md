## Project Overview

The task involves developing a web application that allows users to browse through a list of products categorized by various parameters. Users should have the capability to sort and filter products based on criteria such as categories, price range, gender, occasion, and discount. Furthermore, the application should empower users to seamlessly edit and delete their selected products, with these modifications being promptly reflected in the user interface.

## Github Repo:

https://github.com/KK-2495/EnactOn-task

### Recorded Video

https://drive.google.com/file/d/1UZvUn9nWLq-dZANHmYOEh8G_dAhX18lG/view?usp=sharing

Updated Filter section 

https://drive.google.com/file/d/10jP5pbZnkEpDvQkfk3-laJr7ouEHH2mg/view?usp=drivesdk

### Setting Up the Project

To set up the project locally, follow these steps:

1. Clone the repository and navigate to the project folder.
2. Import the product_database.sql file in to your MySQL database (you can use phpMyAdmin).
3. Update the .env file with your own MySQL credentials.
4. Run `npm install --force`.
5. Start the project using `npm run dev`.
6. Access the NextJS website at http://localhost:3000.
7. Setup the database, You would need mysql and workbench for the database. You can get it from here: https://dev.mysql.com/downloads/installer. To Import data in do refer to this document: https://dev.mysql.com/doc/workbench/en/wb-admin-export-import-management.html

### Requirements

#### Project Setup

#### Pagination for products : Pagination works fine

#### Product Sorting and Filtering : Unable to figure the issue with sorting, brand, category,price, occasion filters in the product table
: The value is displayed in the webpage and url parameters also updates but Product table does not show the filtered products.

**URL Parameters**: Stored all filter and sort options in the URL parameters.

#### Product Operations (Create/Edit/Delete)

 **Create Product**: Creates the product and it updates on DB.
 **Edit Product**: Updates the product information in DB.
 **Delete Product**: Reomves the product from the Db.
