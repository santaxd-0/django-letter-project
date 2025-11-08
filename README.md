<div align="center">

# 📨 Django Letter Project

*A minimalist web app for writing letters to your future self.*

Built with **Django**, **PostgreSQL**, and a touch of **JavaScript** — this project demonstrates practical full-stack development with clear architecture, user authentication, and templating.

---

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue?logo=python)](https://www.python.org/)
[![Django](https://img.shields.io/badge/Django-4.x-green?logo=django)](https://www.djangoproject.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)](https://www.postgresql.org/)

</div>

---

## 💡 Overview

**Django Letter Project** allows users to write letters they can revisit in the future — a simple concept built to refresh and strengthen my knowledge of **pure Django**.

It focuses on:
- Backend structure and maintainability
- Authentication and session handling
- Clean, minimal front-end integration

---

## 🚀 Features

- ✍️ Write and save personal letters for future reading  
- 🔐 User registration and authentication system  
- 🗂 Organized templates and static files  
- 🗄️ PostgreSQL integration for persistent storage  
- 🧩 Modular Django app architecture  

---

## 🧠 Motivation

This project was created as a way to **restart my Django practice** — focusing on fundamentals before moving to advanced frameworks and APIs.  
It serves as a clean, reference-ready codebase that I can build upon later.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-------------|
| **Backend** | Django |
| **Database** | PostgreSQL |
| **Frontend** | HTML, CSS, JavaScript |
| **Language** | Python |
| **Template Engine** | Django Templates |

---


---

## 🛠️ Setup & Usage

Clone the repo:

```bash
git clone https://github.com/santaxd-0/django-letter-project.git
cd django-letter-project
```

Create and activate a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Run migrations and start the app:
```bash
python manage.py migrate
python manage.py runserver
```

Then open
http://127.0.0.1:8000/
