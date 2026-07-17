# Hands-On 3 – Automation Testing & Selenium Basics

## Student Details

- Name:Maleni M
- Register Number:212223040110
- Module: QA Concepts & Selenium Basics
- Hands-On: 3

---

# Task 1: Automation Testing

Automation Testing uses software tools to execute test cases automatically without manual intervention.

### Advantages

- Faster execution
- Reusable test scripts
- Increased accuracy
- Supports Continuous Integration (CI/CD)
- Saves time for repetitive testing

### Disadvantages

- Initial setup cost
- Requires programming knowledge
- Maintenance effort when applications change

---

# Task 2: Selenium

Selenium is an open-source automation testing tool used for automating web applications.

### Selenium Components

1. Selenium IDE
2. Selenium WebDriver
3. Selenium Grid

---

# Task 3: Selenium WebDriver Architecture

```
Test Script
      │
      ▼
Selenium WebDriver API
      │
      ▼
Browser Driver
(ChromeDriver / GeckoDriver / EdgeDriver)
      │
      ▼
Browser
```

### Working

- Test script sends commands.
- WebDriver converts commands.
- Browser Driver communicates with the browser.
- Browser executes the requested action.

---

# Task 4: Browser Drivers

| Browser | Driver |
|----------|--------|
| Chrome | ChromeDriver |
| Firefox | GeckoDriver |
| Edge | EdgeDriver |
| Safari | SafariDriver |

---

# Task 5: Selenium Locators

### ID

```python
driver.find_element(By.ID, "username")
```

### Name

```python
driver.find_element(By.NAME, "email")
```

### Class Name

```python
driver.find_element(By.CLASS_NAME, "login")
```

### Tag Name

```python
driver.find_element(By.TAG_NAME, "button")
```

### Link Text

```python
driver.find_element(By.LINK_TEXT, "Login")
```

### Partial Link Text

```python
driver.find_element(By.PARTIAL_LINK_TEXT, "Log")
```

### CSS Selector

```python
driver.find_element(By.CSS_SELECTOR, "#username")
```

### XPath

```python
driver.find_element(By.XPATH, "//input[@id='username']")
```

---

# Task 6: XPath vs CSS Selector

| XPath | CSS Selector |
|--------|--------------|
| Supports forward and backward traversal | Forward traversal only |
| More powerful | Faster execution |
| Supports complex expressions | Simpler syntax |

---

# Task 7: Waits in Selenium

## Implicit Wait

Applies a default wait time for locating elements.

Example:

```python
driver.implicitly_wait(10)
```

---

## Explicit Wait

Waits until a specific condition is satisfied.

Example:

```python
WebDriverWait(driver,10).until(
    EC.visibility_of_element_located((By.ID,"username"))
)
```

### Why Explicit Wait?

- Better performance
- Waits only when required
- Reduces flaky tests

---

# Task 8: Automation Frameworks

### Linear Framework

- Simple
- Suitable for small projects

---

### Modular Framework

- Test scripts divided into modules
- Easy maintenance

---

### Data-Driven Framework

- Test data stored externally
- Same script runs with multiple datasets

---

### Keyword-Driven Framework

- Keywords define test actions
- Easy for non-programmers

---

### Hybrid Framework

- Combination of multiple frameworks
- Most commonly used in enterprises

---

# Task 9: Continuous Integration

Automation scripts can be executed automatically using CI/CD tools like Jenkins or GitHub Actions whenever new code is committed.

Benefits:

- Faster feedback
- Early bug detection
- Reliable releases
- Reduced manual effort

---

# Conclusion

Automation Testing improves software quality by reducing manual effort and enabling continuous testing. Selenium WebDriver, along with appropriate locators, waits, and automation frameworks, provides a scalable solution for web application testing.