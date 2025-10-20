# ReadME For my project website and test cases

<span style="color: #ff0000"><strong>All of my projects will be a work in progress at this time they will be consecutively updated in-between my normal responsibilities and other normal life circumstances.</span><strong>

There will be two projects here while im working on expanding everything out.

    So far i've built a simple site page that will, overtime, be used to house various utilities. Some further projects related to the site will include automation testing and other more involved site utilites which are still to be determined.

Please read the notes below in order to access the projects

<span style="color: #00ff00"><strong>This Projects Objective:</span><strong>

Nick's Testing Site
Welcome to Nick's Testing Site! This is a fun web project I’ve been tinkering with to showcase some HTML, CSS, and a bit of JavaScript.
What’s Inside:

Login Page: Sign in with username "Nick" and password "Testing1" (or register your own!).

Home Page: A starting point with a collapsible sidebar and dropdown navigation.
Profile Page: Upload a profile pic and manage your settings in a full-width box.
Dashboard Page: See some placeholder stats in a card layout.
Settings & Edit Profile: Basic placeholder pages for future expansion.
Dark Mode: Toggle it on/off for a sleek night look.

Getting Started

Clone the Repo: git clone <https://github.com/Nick288701/Test_Cases_v1>
Open the Folder: Navigate to the my-site folder.
Run It: Open index.html in any modern browser (Chrome, Firefox, etc.).
Files to Note:

banner.jpg: The fantasy banner background.
profile-icon.png: The default profile pic icon.
styles.css: All the magic styling happens here.
index.html, home.html, etc.: The page files.

Prerequisites

Just a web browser! No server needed yet.

Known Issues

No backend, so login/register data is stored in localStorage.
Profile pic uploads are local previews only.
Placeholder alerts/buttons need real functionality.

Future Ideas

Add a backend (Node.js maybe?) for secure auth.
Spice up the dashboard with charts or real data.
More animations or interactive elements.

Thanks for stopping by! 😄

Nick

Automation Testing for the Practice Test Automation Website

This project utilizes Cypress to develop comprehensive end-to-end tests for the utilities on the testing sites homepage https://practice.expandtesting.com/, focusing on a wide range of interactions including number, text, password, and date input fields, form submission, validations, placeholder checks, maximum length enforcement, responsiveness across different viewport sizes, and clear button functionality. The initiative addresses challenges such as ad-related JavaScript errors by implementing a custom setViewport command to set a standard resolution, ensuring stable test execution. Future plans include expanding the test suite to cover additional sections like "Test Login Page," "Dynamic Table," and other sample applications, while continuously refining the automation process based on encountered issues.

Development Progress: The "Web Inputs" tests have been successfully stabilized with the viewport adjustment, and ongoing efforts are focused on troubleshooting and integrating tests for other sections
