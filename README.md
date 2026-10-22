<h1 align="center">🎂 🍰 Cake Palace – Premium Cake Shop 🍰 🎂</h1>
<p align="center"><strong>✨ Sweet Moments, Beautiful Cakes! ✨</strong></p>

## 👩‍🎓 Student Details

| Field | Details |
|---|---|
| Name | Siddhi Narayandas Sapate |
| Roll No. | 07 |
| Div | B |
| Subject | DevOps and Kubernetes |

## 📑 Table of Contents

1. [Project Introduction](#1-project-introduction)
2. [Project Objective](#2-project-objective)
3. [Technologies Used](#3-technologies-used)
4. [Website Features](#4-website-features)
5. [How to Run the Website](#5-how-to-run-the-website)
6. [Changes Made](#6-changes-made)
7. [Git and GitHub Workflow](#7-git-and-github-workflow)
8. [Jenkins Integration](#8-jenkins-integration)
9. [Screenshots and Evidence](#9-screenshots-and-evidence)
10. [Conclusion](#10-conclusion)
11. [Project Limitation](#11-project-limitation)

## 1. Project Introduction

Cake Palace is a responsive cake shop website developed using HTML, CSS, and JavaScript. It provides a simple and attractive interface for viewing cakes and exploring cake shop features.

## 2. Project Objective

The main objective of this project is to develop a user-friendly cake shop website and understand Git, GitHub version control, and Jenkins integration as part of the DevOps and Kubernetes practical assignment.

## 3. Technologies Used

- **HTML5:** Creates the structure of the website.
- **CSS3:** Provides styling, layout, and responsive design.
- **JavaScript:** Adds interactive website features.
- **Git:** Tracks changes and maintains version history.
- **GitHub:** Hosts the project repository.
- **Jenkins:** Automates checkout and validation of website files.

## 4. Website Features

- Premium cake shop homepage
- Cake gallery with category filters
- Shopping cart with quantity controls
- Total price calculation
- Custom cake enquiry form
- Responsive design for desktop and mobile
- Announcement banner with a close button
- Back-to-top button
- Dark mode toggle
- Reading progress bar
- Font size controls

## 5. How to Run the Website

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Install the Live Server extension if it is not already installed.
4. Right-click `index.html`.
5. Select **Open with Live Server**.
6. The website will open in your browser.

## 6. Changes Made

### Change 1: Announcement Banner
Added a message banner at the top of the website with a close button.

**Commit message:** `Add dismissible announcement banner`

### Change 2: Back-to-Top Button
Added a circular arrow button to help users return to the top of the page.

**Commit message:** `Add back to top button`

### Change 3: Dark Mode
Added a toggle to switch between dark and light appearance.

**Commit message:** `Add dark mode toggle`

### Change 4: Reading Progress Bar
Added a progress bar at the top of the page that changes as the user scrolls.

**Commit message:** `Add reading progress bar`

### Change 5: Font Size Controls
Added controls to increase and decrease website text size.

**Commit message:** `Add font size controls`

> Note: Keep each commit message only if that change was actually committed and pushed to GitHub. Add the corresponding commit hash for each change after checking GitHub history.

## 7. Git and GitHub Workflow

The following commands are used to track and upload project changes:

```bash
git status
git add .
git commit -m "Describe your change"
git push
```

The project repository is available here:

[ Cake Palace - GitHub Repository ](https://github.com/sidverse07/Cake-Shop-Website)

## 8. Jenkins Integration

Jenkins is used to check out the project from GitHub and validate that the main website files are present.

### Integration Steps

1. Install and start Jenkins.
2. Open the Jenkins dashboard.
3. Create a Pipeline job named `Cake-Shop-Website`.
4. Open the job configuration.
5. Select **Pipeline script from SCM**.
6. Select **Git** as the source control management system.
7. Enter the GitHub repository URL.
8. Select the `main` branch.
9. Set the script path to `Jenkinsfile`.
10. Save the configuration and run **Build Now**.
11. Open the build details and check the Console Output.
12. Verify that the build completes successfully.

The pipeline checks out the repository and validates the presence of `index.html`, `style.css`, and `script.js`.

## 9. Screenshots and Evidence

### 9.1 Website Screenshots

![Website Screenshot 1](screenshots/web_ss_1/Screenshot%202026-10-18%20230140.png)

![Website Screenshot 2](screenshots/web_ss_1/Screenshot%202026-10-18%20230211.png)

![Website Screenshot 3](screenshots/web_ss_1/Screenshot%202026-10-18%20230227.png)

![Website Screenshot 4](screenshots/web_ss_1/Screenshot%202026-10-18%20230239.png)

![Website Screenshot 5](screenshots/web_ss_1/Screenshot%202026-10-18%20230300.png)

### 9.2 Change 1: Announcement Banner

![Announcement Banner 1](screenshots/web_ss_1/change_01/Screenshot%202026-10-18%20230839.png)

![Announcement Banner 2](screenshots/web_ss_1/change_01/Screenshot%202026-10-18%20232606.png)

### 9.3 Change 2: Back-to-Top Button

![Back-to-Top Button](screenshots/web_ss_1/change_02/Screenshot%202026-10-19%20114821.png)

### 9.4 Change 3: Dark Mode
![Dark Mode](screenshots\web_ss_1\change_03\image.png)
![Dark Mode](screenshots/web_ss_1/change_03/Screenshot%202026-10-19%20115545.png)

### 9.5 Change 4: Reading Progress Bar
![Reading Progress Bar](screenshots\web_ss_1\change_04\image.png)
![Reading Progress Bar](screenshots/web_ss_1/change_04/Screenshot%202026-10-19%20115924.png)

### 9.6 Change 5: Font Size Controls
![Font Size Controls](screenshots\web_ss_1\change_05\image.png)
![Font Size Controls](screenshots/web_ss_1/change_05/Screenshot%202026-10-19%20120332.png)

### 9.7 GitHub Repository

[View Cake Shop Website Repository](https://github.com/sidverse07/Cake-Shop-Website)

### 9.8 Jenkins Integration

**Jenkins Job Dashboard**

![Jenkins Job Dashboard](screenshots/web_ss_1/Jenkins/Screenshot%202026-10-21%20201411.png)

**Jenkins Console Output — Successful Build**

![Jenkins Console Output](screenshots/web_ss_1/Jenkins/Screenshot%202026-10-21%20221304.png)

**Jenkins Console Output — Build Validation**

![Jenkins Build Validation](screenshots/web_ss_1/Jenkins/Screenshot%202026-10-21%20221317.png)

**Jenkins Pipeline Stages**

![Jenkins Pipeline Stages](screenshots/web_ss_1/Jenkins/Screenshot%202026-10-21%20221731.png)

**Jenkins Pipeline Validation**

![Jenkins Pipeline Validation](screenshots/web_ss_1/Jenkins/Screenshot%202026-10-21%20221731.png)

## 10. Conclusion

This project demonstrates the development of a responsive cake shop website, version control using Git and GitHub, and basic DevOps integration using Jenkins for file validation.

## 11. Project Limitation

This is an academic demonstration project. The enquiry form does not save orders to a server, and the website does not process real payments.
