# 3813ICT - Week 4 Tutorial

This repository contains the Angular project for **Workshop 4 – Angular, Models and Functions**.  
The goal of this lab was to build a simple Angular front-end with routing, forms, and basic login functionality.

---

## Features
- Angular standalone components (Home, Login, Profile)
- Bootstrap navbar with routing
- Hardcoded users validated on login
- Redirect to Profile page on successful login


---

## Commands Used

### 1. Create the app
```bash
ng new week4
```

### 2. Install dependencies
```bash
npm install bootstrap --save
```

### 3. Generate new components
```bash
ng generate component home --standalone
ng generate component login --standalone
ng generate component profile --standalone
```

### 4. Serve the application
```bash
ng serve
```

---

## How to Run
1. Clone this repository:
   ```bash
   git clone https://github.com/<your-username>/3813ICT-week4.git
   cd 3813ICT-week4
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   ng serve
   ```
4. Open [http://localhost:4200](http://localhost:4200) in your browser.
