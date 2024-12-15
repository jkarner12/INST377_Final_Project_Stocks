Project Title
Finacial insight

Description
This project is designed to give our users an easy way to access the best-performing stocks in the market. We want to be able to have our users find the best investment opportunities by presenting them with the best-performing stocks on the market.

Example:

This web application helps users manage their personal finances by pulling real-time stock prices adn dislaying some of the best stocks on the market. The app is designed to be easy to use for both novice and experienced investors.

Target Browsers
Our application is designed to be compatible with the following browsers:

Desktop:

Google Chrome (latest version)
Mozilla Firefox (latest version)
Safari (latest version)
Mobile:

iOS (Safari)
Android (Google Chrome)
Link to Developer Manual
For more detailed instructions on setting up and contributing to the project, refer to the Developer Manual below.

Developer Manual
We want to provide instructions for future developers who will take over or contribute to this project so we are providing a manual that helps explain a little about the processes.
Installing the Application and Dependencies
To set up the project on your local machine, follow the steps below:

Developer's Manual: Financial Insights Web Application
Overview
The Financial Insights web application provides users with access to financial data, such as real-time stock prices, top-performing stocks, and financial events. The application is built using Express.js for the backend, Supabase for database storage, and a simple HTML/CSS frontend to display information.

Technologies Used
Backend:

Node.js with Express: Handles API requests, routes, and interactions with the Supabase database.
Supabase: Used for storing user data and managing backend storage.
Body-Parser: A middleware for handling POST requests containing JSON and URL-encoded data.
Frontend:

HTML/CSS: Provides a simple, responsive design to display stock-related information and the financial insights of the platform.
Project Structure
/financial-insights ├── /public │ ├── INST377_Home_Page_Final.html │ ├── INST377_Stock_Page_Final.html │ └── INST377_About_Page_Final.html ├── /node_modules ├── server.js ├── package.json ├── package-lock.json └── README.md

markdown Copy code

Folders and Files:
/public: Contains the HTML files for the frontend.

INST377_Home_Page_Final.html: Home page displaying stock performance overview.
INST377_Stock_Page_Final.html: Contains the main content on stock prices and top performers.
INST377_About_Page_Final.html: About us page explaining the mission of the platform.
index.js: The main file to start the Express server and define routes for API requests.

package.json: Contains metadata about the project and its dependencies.

package-lock.json: Manages dependencies and ensures consistent installs across environments.

Setting Up the Environment
1. Install Node.js and npm
Ensure that Node.js and npm are installed. You can verify this with the following commands:

#```bash #node -v #npm -v

2. Clone the Repository
Clone the project repository to your local machine:

bash Copy code git clone cd financial-insights

3. Install Dependencies
Run the following command in your project folder to install the necessary dependencies:

#bash Copy code npm install

!!! This will install Express, Supabase, Body-Parser, and other necessary libraries.!!!

4. Backend (server.js) Configuration
Connecting to Supabase: In server.js, Supabase is used to handle user data storage. You need to configure your Supabase URL and API Key. These values are sensitive and should not be shared publicly.

5. javascript
Copy code const SUPABASE_URL = 'your_url'; const SUPABASE_KEY = 'your_key';
Make sure to replace SUPABASE_URL and SUPABASE_KEY with your own values from the Supabase dashboard.

6. API Routes:
/api/setup-account: Allows users to submit their account information (name, email, password).

Method: POST Parameters: name, email, password Response: Success or error message.

Example Request:
bash Copy code POST /api/setup-account { "name": "John Doe", "email": "john.doe@example.com", "password": "password123" } /api/users: Retrieves a list of users stored in the Supabase database.

Method: GET Response: Returns a JSON array of all users. Example Response:

json Copy code [ { "id": 1, "name": "John Doe", "email": "john.doe@example.com" }, ... ]

End of sample!!!
Project Descriptions
Frontend (HTML/CSS) Pages: Home Page (INST377_Home_Page_Final.html)

Provides a simple overview of the platform with links to the Stock Page and About Us Page. Stock Page (INST377_Stock_Page_Final.html)

Displays dynamic stock performance, real-time prices, and trends (this is where the main stock content will be displayed). About Us Page (INST377_About_Page_Final.html)

Describes the platform’s mission, goals, and team. Styling (CSS): The CSS is defined in the <style> tag of each HTML page and applies the layout and animations such as glowing hover effects for navigation buttons.

7.
Navigation: The pages are interconnected via a navigation bar:

html Copy code

Home
Stocks
About
8. Running the Application
Start the Server To run the server locally, execute the following command:
bash Copy code npm start This will start the Express server on localhost:3000. You can access the application through your web browser by navigating to http://localhost:3000.

Testing the Application Open your web browser and visit the Home page at http://localhost:3000/. Test submitting user data via the setup-account API. Check the Stock Page for updates on real-time data. Check the about page for output
Good Luck!!!
