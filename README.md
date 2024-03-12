# Toxicity-Classifier

A simple web application to classify user-entered comments as hateful or not using TensorFlow.js and the @tensorflow-models/toxicity library.


This project uses TensorFlow.js and the @tensorflow-models/toxicity library to perform toxicity classification on user-entered comments. The web application provides a textarea for users to input comments, and a button to check whether the comment is classified as hateful or not.

Toxicity Classifier - Usage Guidelines
1. Requirements
Make sure you have the following prerequisites installed on your machine:

Node.js - JavaScript runtime
npm - Node.js package manager
2. Clone the Repository
Clone the Toxicity Classifier repository to your local machine:

bash
Copy code
git clone https://github.com/Archit-lal/Toxicity-Classifier.git
cd Toxicity-Classifier
3. Install Dependencies
Install the project dependencies using npm:

bash
Copy code
npm install
4. Run the Web Application
Start the web application:

bash
Copy code
npm start
This will launch the Toxicity Classifier on your local server. Open your web browser and navigate to http://localhost:8000 to access the application.

5. Enter a Comment
On the web page, you will see an input area where you can enter a comment. Type in a comment and click the "Check Toxicity" button to analyze the comment for toxicity.

6. Interpret Results
The application will classify the comment as either "Hateful" or "Not Hateful" based on its toxicity score. The result will be displayed on the web page.

Note:
If there are issues related to model loading or classification, please check the browser console for error messages.
Ensure that your internet connection is stable as the toxicity model is loaded from an external source.

