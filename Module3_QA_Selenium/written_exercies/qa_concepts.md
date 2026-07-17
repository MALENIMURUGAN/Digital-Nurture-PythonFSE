# Hands-On 1 – QA Concepts, Functional Testing & Defect Lifecycle

## Student Details

- Name:Maleni M
- Register Number:212223040110
- Module: QA Concepts & Selenium Basics
- Hands-On: 1

---

# Task 1: Testing Levels for Course Management API

## Unit Testing

**Description:**
Tests a single function or method independently.

**Example Test Case:**
Verify that the `create_course()` function correctly saves a valid course object.

**Testing Type:**
Functional Testing

---

## Integration Testing

**Description:**
Tests interaction between multiple components.

**Example Test Case:**
Verify that the `POST /api/courses/` endpoint stores course details correctly in the database.

**Testing Type:**
Functional Testing

---

## System Testing

**Description:**
Tests the complete application as one integrated system.

**Example Test Case:**
Create a course using the API and verify it appears in the course list.

**Testing Type:**
Functional Testing

---

## User Acceptance Testing (UAT)

**Description:**
Tests whether the application satisfies business requirements.

**Example Test Case:**
A college administrator successfully creates a new course and students can enroll.

**Testing Type:**
Functional Testing

---

## Non-Functional Test Example

**Performance Testing**

Verify that the `GET /api/courses/` endpoint responds within 2 seconds when accessed by 500 concurrent users.

---

# Task 2: Black-Box vs White-Box Testing

## Black-Box Testing

- Internal code is unknown.
- Focuses on inputs and outputs.
- Performed mainly by QA testers.

### Example

Send a POST request and verify the API response.

---

## White-Box Testing

- Internal implementation is known.
- Tests logic, branches, loops and code coverage.
- Usually performed by developers.

### Example

Test every branch inside the `create_course()` function.

---

# Task 3: Formal Test Cases

| Test Case ID | Description | Preconditions | Test Steps | Expected Result | Actual Result | Pass/Fail |
|--------------|-------------|---------------|------------|-----------------|---------------|-----------|
| TC001 | Create valid course | API running | Send valid POST request | HTTP 201 Created | | |
| TC002 | Missing course name | API running | Send POST without name | HTTP 400 Bad Request | | |
| TC003 | Duplicate course code | Existing course present | Send duplicate code | Duplicate error displayed | | |

---

# Task 4: Defect Lifecycle

New
↓
Assigned
↓
Open
↓
Fixed
↓
Retest
↓
Verified
↓
Closed

Additional States

Rejected
- Bug is not valid.

Deferred
- Bug is postponed to a future release.

---

# Task 5: Severity & Priority Classification

### Bug A

POST /api/courses returns HTTP 500.

Severity:
Critical

Priority:
P1

Reason:
Application functionality is completely broken.

---

### Bug B

Course names above 150 characters are truncated.

Severity:
Medium

Priority:
P2

Reason:
Core functionality works but data integrity is affected.

---

### Bug C

Swagger page contains a typo.

Severity:
Low

Priority:
P4

Reason:
Cosmetic issue.

---

### Bug D

Correct login occasionally returns 401.

Severity:
High

Priority:
P1

Reason:
Intermittent authentication failures affect users.

---

# Task 6: Defect Report

**Defect ID**
BUG-001

**Title**
POST /api/courses returns HTTP 500.

**Environment**
Windows 11
Python 3.12
Django REST API

**Build Version**
v1.0

**Severity**
Critical

**Priority**
P1

**Steps to Reproduce**

1. Start API
2. Open Postman
3. Send POST request
4. Observe response

**Expected Result**

Course should be created successfully.

**Actual Result**

HTTP 500 Internal Server Error.

**Attachment**

Screenshot of HTTP 500 error.

---

# Task 7: Severity vs Priority

## Severity

Represents how much the defect affects the application.

Example:
Database crash is Critical Severity.

---

## Priority

Represents how urgently the defect should be fixed.

Example:
A spelling mistake on the CEO's dashboard has Low Severity but High Priority because it is highly visible.

---