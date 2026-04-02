The FitKit Documentation

DESCRIPTION:

The FitKit by Coach Kit is a fitness platform that introduces people to an engaging, unconventional way of training using tools like kettlebells, rope flow, steel mace, and clubbells. It focuses on helping individuals move better, build functional strength, and develop confidence through enjoyable, accessible movement, while encouraging a “flow” state where exercise feels natural and immersive. The platform provides tailored programmes and guided videos suitable for all ages and abilities, promoting a sustainable and inclusive approach to health and wellbeing.

The front end was built using React with MUI (Material UI), making use of reusable components to improve structure and efficiency. There was an effort to separate CSS from JSX files; however, due to time constraints, this was not fully refined. MySQL was used for the backend database, as it allows data to be easily viewed and managed in table format.

The system architecture includes provisions for future expansion following an MVC structure, although this was not fully implemented due to limited time. There is still significant room for further development and improvement.
Out of scope features include programme links to different classes, coaching calendar functionality, a personal workout tracker, and full responsive design across different screen sizes.

Some known issues remain in the current version, such as complications with calculating age from a user’s date of birth and a payment plan feature that is not yet functioning correctly, which will need to be fixed in future updates.

INSTRUCTIONS:
To locally run the application:

1. Clone the project
git clone https://github.com/pia-valente/2025-10-07-SE-PT-AU-NZ.git
cd 2025-10-07-SE-PT-AU-NZ

2. Open the folder and open Back-End folder
cd back-end
npm install (to automatically install all dependencies)

3. Create .env in Back-End
DB_NAME=TheFitKit
DB_USER=root
DB_PASSWORD=(change to your password)
DB_HOST=localhost
DB_PORT=3306
PORT=8081

4. Setup MySQL database
CREATE DATABASE TheFitKit

5. Run Backend
npm run dev

6. Split terminal and open Front-End folder
cd front-end
npm install (to automatically install all dependencies)

7. Run the front-end
npm run dev
You should see http://localhost:5173

8. Make sure front-end connects with back-end
Back-end is running on http://localhost:8081