# Medical Camp Management System (MCMS)

## Objective
Develop a Medical Camp Management System (MCMS) using the MERN stack. This system helps organizers and participants efficiently manage and coordinate medical camps.

---

## Website Details
- **Website Name**: Medical Camp Management System
- **Organizer's Credentials**:
  - Username: admin@admin.com
  - Password: AAaa11!!
- **Live Site URL**: [https://medicamp-f955a.web.app/](#)

---

## Key Features

1. **Responsive Design**: The site is fully responsive for mobile, tablet, and desktop, including the dashboard.
2. **Authentication**:
   - Login and registration forms implemented with `react-hook-form`.
   - Social login options available.(Google)
   - Private routes secured with JWT authentication, stored in Local Storage.
3. **Home Page**:
   - Navbar with dynamic options based on login status.
   - Banner section showcasing success stories from past camps.
   - Popular Medical Camps section with detailed information and participant counts.
   - "See All Camps" button leading to the "Available Camps" page.
4. **Camp Details Page**:
   - Comprehensive details of each camp.
   - "Join Camp" button with modal for participant registration.
5. **Participant Dashboard**:
   - View registered camps with payment and confirmation statuses.
   - Analytics page with visual data (charts using Recharts).
   - Manage profile and payment history.
   - Provide feedback and ratings for attended camps.
6. **Organizer Dashboard**:
   - Add, update, and delete camps.
   - Manage registered participants with options to confirm payments or cancel registrations.
7. **Notifications**:
   - Sweet alerts/toasts for all CRUD operations and authentication events.
8. **Data Fetching**:
   - TanStack Query for GET requests.
   - Pagination and search functionality in all tables.
9. **Security**:
   - Firebase config keys and MongoDB credentials hidden using environment variables.
10. **Error Handling**:
    - Custom 404 page.

---

## Key Rules
- Minimum **20 notable commits** on the client side.
- Minimum **12 notable commits** on the server side.
- Avoid Lorem Ipsum text on the website.
- Display participant feedback on the homepage after payment confirmation.
- Use `Formik` or `react-hook-form` for form validation.

---

## Additional Features
- Search bar for camps based on keywords, dates, or other criteria.
- Sort available camps by participant count, fees, or alphabetical order.
- Layout toggle button for grid views.
- Animations using Framer Motion or AOS.
- Axios interceptor for HTTP requests.

---

## Challenges Completed
- Implemented pagination for all tables.
- Added search functionality for table data.
- Integrated JWT for sensitive routes.

---

## Optional Tasks Added
- Custom animation effects for an enhanced user experience.
- Integrated additional packages like `react-awesome-button` and `React-select`.

---


## Tech Stack
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase, JWT
- **State Management**: Context API, TanStack Query
- **Payment Integration**: Stripe



