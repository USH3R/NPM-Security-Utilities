## How to Run This Utility Demo

1. Open Codespace (Github) or any terminal and type this:
         
         bash run.sh
         
2. Or try the manual executable way (optional):
   Open Codespace (Github) or any terminal and type this:
         
         chmod +x run.sh
         
   Press enter.
   Then type:
         
         ./run.sh


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
