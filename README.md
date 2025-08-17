**🚀 Startup Incubation Management**

The Startup Incubation Management application helps university incubators efficiently manage startup programs. It provides tools for handling applications, assigning mentors, tracking milestones, and organizing demo day events — all in one streamlined platform.

---

**📌 Project Overview**

This system enables **students, mentors, and administrators** to collaborate effectively throughout the incubation process.

- Students: Submit applications, build startup profiles, track progress, and book demo slots.
- Mentors: Manage availability, run office hour sessions, and provide feedback.
- Administrators: Monitor progress via milestones/KPIs, schedule events, and prepare demo day logistics.

The application is built with **Node.js**, **React.js**, and **MongoDB**, deployed on **AWS EC2** with **CI/CD pipelines** using GitHub Actions.

---

**✨ Features**

**🎓 User Side**

- Application form submission (save draft, upload deck/video/docs)
- Startup profile builder (logo, description, team members, links)
- Application stage tracking (visual timeline)
- Milestone tracking & KPI updates
- Pitch slot booking for demo day

**🛠️ Developer Side**

- Authentication & Authorization (JWT)
- Database Management (MongoDB)
- Scheduling & Calendar Integration
- Notification System
- Testing & CI/CD (GitHub Actions → AWS EC2 deployment)

---

**🏗️ System Design**

SysML diagrams were used to define structure and constraints:

- **Requirement Diagram** – captures functional needs
- **Block Definition Diagram (BDD)** – system architecture
- **Parametric Diagram** – performance and constraints
- Implement various backend functions for handling application data.Ensure that all functions are compatible with an Application Programming Interface (API) structure(Follow existing patterns used in the Task Manager App where applicable).
- Implement CRUD operations forcreating, reading, updating, and deleting records for each functionality.

---

**📋 Project Management**

The project followed **Agile practices** using **Jira** :

- Epics, User Stories, and Subtasks for task tracking
- Sprint planning, execution, and retrospective boards
- Integration with GitHub for commit history tracking

---

**⚙️ Development & Deployment**

- **Frontend** : React.js
- **Backend** : Node.js (Express.js)
- **Database** : MongoDB
- **Hosting** : AWS EC2 (PM2 process manager)
- **CI/CD** : GitHub Actions pipeline with test automation & deployment

---

✅ **Testing & CI/CD**

- Unit tests and integration tests executed in GitHub Actions
- CI/CD pipeline automates build, test, and deploy
- Environments secured with GitHub Secrets (MONGO_URI, JWT_SECRET, PORT)

---

✅ **Project Information Details**

Public URL: 3.27.187.126

AccountName: Matthew

Password: matt94317

---

📈 **Discussion & Reflection**

The system successfully delivered a **secure, scalable, and maintainable** platform for managing incubation programs. By combining structured SysML design, Agile management in Jira, and automated CI/CD deployment to AWS, the project reflects a **real-world production workflow** .

Through this project, I gained practical experience in:

- Requirement analysis and SysML modeling
- Integrating frontend and backend components
- Managing tasks with Jira and GitHub branching
- Solving challenges (API communication, CORS, validation)
- Improving **time management** and **problem-solving skills**
