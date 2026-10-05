# Registration Portal

Registration Portal is a beginner-friendly React + Vite project for user registration, login, and dashboard management. It shows how a simple frontend app connects pages, validation, storage, and dashboard logic in one clear flow.

## Project Purpose
This app is designed to help beginners understand:
- route-based navigation
- form validation
- password rules
- login and registration flow
- dashboard statistics
- rendering stored users on a page
- using local storage for frontend data

## Features
- Login page with email and password inputs
- Registration page with validation
- Password strength rules
- Show/hide password toggle
- Dashboard summary cards
- Registered users list page
- Responsive design for smaller screens
- Clean beginner-friendly project structure

## Tech Stack
- React
- Vite
- JavaScript
- React Router DOM
- Formik
- Yup

## Folder Structure

- src/App.jsx — app routing and layout
- src/main.jsx — app bootstrap
- src/pages/Home.jsx — login page
- src/pages/Register.jsx — registration page and validation
- src/pages/Dashboard.jsx — dashboard statistics
- src/pages/Users.jsx — list of registered users
- src/services/api.jsx — API helper functions
- src/components/ — reusable UI components
- src/index.css — styling and responsive layout

## Installation

Run the following commands in the project folder:

```bash
npm install
npm run dev
```

Open the app in the browser:

```bash
http://localhost:5173/
```

## How the App Works

### 1. Login flow
The login page checks whether the user details are valid. If correct, the user is redirected to the dashboard.

### 2. Registration flow
The registration form collects:
- full name
- email
- phone number
- password
- confirm password

The data is validated before saving.

### 3. Password rules
The password must include:
- at least 8 characters
- one uppercase letter
- one lowercase letter
- one special character

### 4. Dashboard flow
After successful registration, the dashboard loads the user data and updates cards such as:
- total users
- today's registrations
- pending registrations
- successful registrations

### 5. User list flow
The users page displays all saved users as cards with their details.

## Beginner-Friendly Flow

1. User opens the app
2. User clicks Create an Account
3. User fills out the form
4. Validation checks the inputs
5. Form is submitted
6. Data is saved locally in the browser
7. Dashboard updates
8. User can view the list of registered users

## Output Preview

### Login Page

```text
Welcome Back
Login
Email Address
Password
[ Login ]
Create an Account
```

### Registration Page

```text
Create Account
Full Name
Email Address
Phone Number
Password
Confirm Password
[ Create Account ]
```

### Dashboard Page

```text
Dashboard
Welcome to Registration Portal
Total Registered Users: 10
Today's Registrations: 2
Pending Registrations: 1
Successful Registrations: 10
Recent Registrations
```

### User List Page

```text
Registered Users
Name: Jane Doe
Email: jane@example.com
Phone: 9876543210
Status: Active
```

## Sample UI Layout

```text
+-----------------------------------------------------------+
| RegPortal          Home   Register   Login                 |
+-----------------------------------------------------------+
|                                                           |
|   Welcome Back                                            |
|   Login                                                   |
|   Email Address      [....................]               |
|   Password           [....................]               |
|   [ Login ]                                               |
|   Don't have an account? Create an Account                |
|                                                           |
+-----------------------------------------------------------+
```

```text
+-----------------------------------------------------------+
| RegPortal          Home   Register   Login                 |
+-----------------------------------------------------------+
|                                                           |
|   Create Account                                          |
|   Full Name          [....................]               |
|   Email Address      [....................]               |
|   Phone Number       [....................]               |
|   Password           [....................]               |
|   Confirm Password   [....................]               |
|   [ Create Account ]                                      |
|                                                           |
+-----------------------------------------------------------+
```

```text
+-----------------------------------------------------------+
| RegPortal          Home   Register   Login                 |
+-----------------------------------------------------------+
| Dashboard                                                 |
| Welcome to Registration Portal                             |
|                                                           |
| Total Registered Users: 12                                 |
| Today's Registrations: 3                                   |
| Pending Registrations: 1                                   |
| Successful Registrations: 12                               |
| Recent Registrations                                       |
| - Jane Doe                                                 |
| - Alex Smith                                               |
| - Priya Nair                                               |
+-----------------------------------------------------------+
```

## Important Files to Read First
If you are a beginner, read these files in this order:

1. src/App.jsx — route setup and navigation
2. src/pages/Home.jsx — login behavior
3. src/pages/Register.jsx — registration form and validation
4. src/pages/Dashboard.jsx — summary cards and layout
5. src/services/api.jsx — API logic

## Beginner Concepts Used
- useState stores values in components
- useEffect runs code after rendering
- useNavigate redirects between pages
- Formik handles form state and submission
- Yup handles validation rules
- localStorage stores data in the browser
- fetch sends requests to an API

## Possible Next Improvements
- connect to a real backend
- add delete user option
- add edit user option
- add admin approval flow
- add protected routes for logged-in users

## Summary
This project is a useful frontend learning app because it combines multiple important React concepts in one practical app: routing, forms, validation, dashboard UI, and user data display.

It is a strong starting point for learning how a registration portal works in real applications.
