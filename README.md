# Task Manager Angular Application

This Angular application allows users to manage tasks efficiently by providing features for adding, viewing, updating, and deleting tasks. The application utilizes Angular's features and best practices to deliver a smooth user experience.

## Introduction

Task Manager is a multi-page Angular application designed to simplify task management for users. With its intuitive user interface and robust functionality, users can easily create, view, update, and delete tasks as needed. The application employs Angular's powerful features and adheres to best practices to ensure a seamless user experience.

## Features

- **Task List:** Display a comprehensive list of tasks including their titles and due dates. Users can mark tasks as completed or delete them directly from the list.
  
- **Task Details:** View detailed information about a selected task, including the title, description, due date, and status (completed or not).
  
- **Create Task:** Allow users to create new tasks by providing a title, description, and due date.
  
- **Edit Task:** Enable users to modify existing tasks by editing the title, description, due date, and status.

- **Angular Router Navigation:** Implement navigation between different views using Angular Router for seamless user experience.

- **Responsive Design:** The user interface is designed to be responsive, ensuring optimal viewing and interaction across various devices.

## Installation

To get started with Task Manager, follow these steps:

1. Clone the repository to your local machine:

git clone https://github.com/VinyasSanil/TaskManager.git

2. Navigate to the project directory:

cd task-manager

3. Install dependencies:

npm install

4. Start the JSON server for storage:

json-server --watch db.json --port 3000 (If json-server is installed globally)

or

npx json-server --watch db.json --port 3000 (If json-server is installed locally)

4. In a separate terminal, start the Angular application:

ng serve

5. Open your browser and navigate to `http://localhost:4200` to view the application.

or

ng serve --open

This command will start the Angular application and automatically open it in the default browser.





## TestCases
1. **Display Tasks Correctly:**
   - Mock a list of tasks with titles and due dates.
   - Call the task list component.
   - Expect the tasks to be displayed correctly in the UI.

2. **Mark Tasks as Completed:**
   - Mock a task list with at least one task.
   - Click the Checkbox option to mark the task status as completed.
   - Expect the task's status to be updated as completed.

3. **Delete Task Confirmation Popup:**
   - Mock a task list with at least one task.
   - Click the "Delete" option for a task.
   - Expect a confirmation popup to be displayed.
   - Click "Yes" on the popup.
   - Expect the task to be deleted from the list.

4. **Display Correct Task Details:**
   - Mock a task object with title, description, due date, and status.
   - Pass the task object to the task details component.
   - Expect the task details to be displayed correctly in the UI.

5. **Create Task with Valid Inputs:**
   - Input a valid title, description, and due date.
   - Click the "Create Task" button.
   - Expect the new task to be added to the task list.
   - Expect a toaster message confirming successful creation.

6. **Validation for Empty Inputs:**
   - Input an empty title, description, or due date.
   - Click the "Create Task" button.
   - Expect validation errors to be displayed for empty inputs.

7. **Edit Task with Valid Inputs:**
   - Mock an existing task object.
   - Input valid changes to the task's title, description, due date, or status.
   - Click the "Save Changes" button.
   - Expect the task to be updated in the task list.
   - Expect a toaster message confirming successful update.

8. **Validation for Empty Inputs:**
   - Mock an existing task object.
   - Input empty values for the task's title, description, or due date.
   - Click the "Save Changes" button.
   - Expect validation errors to be displayed for empty inputs.

9. **Confirmation Popup on Back Button:**
   - Navigate to the edit task component with an existing task.
   - Modify the task details.
   - Click the browser's back button or a custom back button.
   - Expect a confirmation popup to be displayed.
   - Click "Yes" on the popup.
   - Expect navigation to the previous page without saving changes.

10. **Display Confirmation Dialog:**
    - Trigger the confirmation dialog with a specific message.
    - Expect the confirmation dialog to be displayed with the provided message.

11. **Toaster Message for Successful Deletion:**
    - Delete a task successfully.
    - Expect a toaster message confirming successful deletion.

12. **Toaster Message for Successful Creation:**
    - Create a task successfully.
    - Expect a toaster message confirming successful creation.

13. **Toaster Message for Successful Update:**
    - Update a task successfully.
    - Expect a toaster message confirming successful update.
