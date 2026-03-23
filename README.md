## How to Run This Utility Demo

1. Run in GitHub Codespaces (Recommended)  
    Open this repository on GitHub.  
    Click Code → Codespaces → Create Codespace on main.  
    Wait for the environment to load.  
    Open the terminal inside Codespaces.  
    Run:         bash demo.sh    
  
  2. Run Manually Inside the Repository (Local Machine)  
  If you downloaded or cloned the repository:  
  Open a terminal.  
  Navigate to the project folder.  
  Example:                            cd NPM-Security-Utilities  
  Run the launcher:                   bash demo.sh  
    
  3. If You Are Using a Random Public Terminal  
  Public terminals do not automatically have this project. You must first download or clone the repository.  
  A. Option A — Clone with Git  
  Type:  
            git clone https://github.com/USH3R/NPM-Security-Utilities.git  
            cd NPM-Security-Utilities  
            bash demo.sh  
   B. Option B — Download ZIP  
   Click Code → Download ZIP on GitHub.  
   Extract the folder from the ZIP file. Then,  
   Open a terminal in that folder. Run / Type:         bash demo.sh  
  
   4. Quick Start Command  
   This command is only for use inside a Terminal (like the one in Codespaces, terminal, or on your local machine).  
   Verify Your Location: Ensure your terminal is currently pointed at the project directory;  
   You should see NPM-Security-Utilities in your command prompt.  
   If you have already performed the setup in steps 1, 2, or 3 and just need to restart the application, type:  
            bash demo.sh  

# NPM Security Utilities

![Node](https://img.shields.io/badge/Node.js-18+-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Security](https://img.shields.io/badge/focus-cybersecurity-important)

A lightweight **Node.js security utilities package** demonstrating reusable helper functions commonly used in cybersecurity tooling and defensive automation.

This project illustrates how security-focused **utility modules** can be packaged and distributed in the Node ecosystem using **NPM-style module structure**.

---

# Overview

Security tools frequently rely on **small reusable helper functions**, commonly referred to as **utilities (utils)**. These functions perform focused tasks such as:

* hashing data
* validating network input
* encoding or parsing data
* generating identifiers or tokens
* processing logs or telemetry

Rather than rewriting these functions repeatedly, developers place them inside reusable modules called **utility libraries**.

This repository demonstrates how such utilities can be packaged using **Node.js module exports** and structured for potential distribution through NPM.

---

# Current Utilities Included

## SHA-256 Hash Generator

Generates a SHA-256 hash from an input string using the Node.js `crypto` module.

Example:

```
sha256Hash("security")
```

Output example:

```
5e884898da28047151d0e56f8dc6292773603d0d6aabbddf...
```

Uses the built-in Node cryptography library to simulate functionality commonly used in:

* password hashing workflows
* integrity verification
* security tooling
* forensic analysis pipelines

---

## IPv4 Address Validator

Validates whether a string is a properly formatted IPv4 address using a strict regular exp
