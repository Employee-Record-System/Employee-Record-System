<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px;">

<h1>📌 Employee Record System – StaffBase</h1>

<h2>🏷️ Badges</h2>
<p>
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen" />
  <img src="https://img.shields.io/badge/License-MIT-blue" />
  <img src="https://img.shields.io/badge/Frontend-React-orange" />
  <img src="https://img.shields.io/badge/Backend-SpringBoot-green" />
  <img src="https://img.shields.io/badge/Database-SQL%20%2B%20MongoDB-yellow" />
  <img src="https://img.shields.io/badge/Deploy-Vercel%20%2B%20Render-purple" />
</p>

<hr>

<h2>📖 Overview</h2>
<p>
<b>StaffBase – Employee Record System</b> is a comprehensive full-stack HRMS designed to manage the entire employee lifecycle — onboarding,
profile management, documentation, reporting, and exit workflows.
</p>
<p>It acts as a <b>centralized repository</b> ensuring secure, digitized, and structured HR operations.</p>

<hr>

<h2>🚀 Features</h2>

<h3>🔐 Authentication & Roles</h3>
<ul>
  <li>JWT authentication</li>
  <li>Role Based Access Control (Employee, HR Manager, Admin)</li>
  <li>Secured API endpoints</li>
</ul>

<h3>👤 Employee Dashboard</h3>
<ul>
  <li>Personal details</li>
  <li>Employment timeline</li>
  <li>Skills & qualifications</li>
  <li>Profile photo</li>
</ul>

<h3>📁 Document Management</h3>
<ul>
  <li>Upload essential documents</li>
  <li>Verification workflows</li>
  <li>Expiry alerts</li>
</ul>

<h3>🧭 Directory & Organization Chart</h3>
<ul>
  <li>Searchable employee directory</li>
  <li>Visual org chart</li>
  <li>Department/location filters</li>
</ul>

<h3>🧑‍💼 HR Console</h3>
<ul>
  <li>Add/edit employees</li>
  <li>Salary & job updates</li>
  <li>Onboarding/offboarding</li>
</ul>

<h3>📊 Reports & Analytics</h3>
<ul>
  <li>Export CSV/Excel</li>
  <li>Headcount & attrition metrics</li>
  <li>Diversity & inclusion insights</li>
</ul>

<hr>

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>React</li>
  <li>Tailwind / Material UI</li>
  <li>Axios</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Spring Boot</li>
  <li>Spring Security + JWT</li>
  <li>Spring Data JPA</li>
</ul>

<h3>Databases</h3>
<ul>
  <li>SQL (Authentication)</li>
  <li>MongoDB (Employee records, documents, org chart)</li>
</ul>

<h3>Deployment</h3>
<ul>
  <li>Vercel (Frontend)</li>
  <li>Docker</li>
  <li>Render (Backend)</li>
  <li>MongoDB Atlas</li>
  <li>Aiven / Cloud SQL</li>
</ul>

<hr>

<h2>📂 Repository Structure</h2>

<pre>
📦 employee-record-system
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── hooks
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── utils
│   ├── package.json
│   └── README.md
│
├── backend
│   ├── src/main/java/com/staffbase
│   │   ├── config
│   │   ├── controllers
│   │   ├── services
│   │   ├── repositories
│   │   ├── exceptions
│   │   ├── security
│   │   └── models
│   ├── src/main/resources
│   ├── Dockerfile
│   └── README.md
│
├── docs
│   ├── architecture-diagram.png
│   ├── database-schema.png
│   └── api-documentation.md
│
├── .gitignore
├── LICENSE
└── README.md
</pre>

<hr>

<h2>🖼️ Screenshots</h2>

<p><img src="https://via.placeholder.com/900x500?text=Dashboard+Screenshot" /></p>
<p><img src="https://via.placeholder.com/900x500?text=Org+Chart+Screenshot" /></p>
<p><img src="https://via.placeholder.com/900x500?text=Employee+Profile+Screenshot" /></p>

<hr>

<h2>☁️ Deployment Workflow</h2>

<h3>Frontend – Vercel</h3>
<ul>
  <li>Import GitHub repo into Vercel</li>
  <li>Build command: <code>npm run build</code></li>
  <li>Output: <code>build/</code></li>
  <li>Add environment variables</li>
</ul>

<h3>Backend – Render (Docker)</h3>
<ul>
  <li>Connect GitHub repository</li>
  <li>Add environment variables</li>
  <li>Deploy Docker container</li>
</ul>

<h3>Database Setup</h3>
<ul>
  <li>SQL → Aiven / Cloud SQL</li>
  <li>NoSQL → MongoDB Atlas</li>
  <li>Configure connection strings on Render</li>
</ul>

</body>
</html>
