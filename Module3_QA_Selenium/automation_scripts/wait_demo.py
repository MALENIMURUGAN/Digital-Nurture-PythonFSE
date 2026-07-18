from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.maximize_window()

wait = WebDriverWait(driver, 10)

driver.get("https://www.testmuai.com/selenium-playground/bootstrap-alert-messages-demo/")

# -------------------------------
# Task 36
# Wait until button is clickable
# -------------------------------

button = wait.until(
    EC.element_to_be_clickable(
        (By.XPATH, "//button[contains(.,'Autoclosable Success Message')]")
    )
)

button.click()

print("✓ Success button clicked using Explicit Wait")
print("✓ Task 36 Completed")

# -------------------------------
# Task 37
# Compare sleep() vs Explicit Wait
# -------------------------------

driver.refresh()

start = time.time()
time.sleep(3)
sleep_time = time.time() - start

start = time.time()

wait.until(
    EC.element_to_be_clickable(
        (By.XPATH, "//button[contains(.,'Autoclosable Success Message')]")
    )
)

explicit_time = time.time() - start

print(f"time.sleep() : {sleep_time:.2f} seconds")
print(f"Explicit Wait : {explicit_time:.2f} seconds")

print("✓ Task 37 Completed")

# -------------------------------
# Task 38
# Explanation
# -------------------------------

print("""
Difference between waits

visibility_of_element_located():
- Element exists and is visible.

element_to_be_clickable():
- Element is visible, enabled and clickable.
""")

print("✓ Task 38 Completed")

# -------------------------------
# Task 39
# Fluent Wait (Python equivalent)
# -------------------------------

wait.until(
    EC.presence_of_element_located(
        (By.TAG_NAME, "button")
    )
)

print("✓ Fluent Wait demonstration completed")
print("✓ Task 39 Completed")

driver.quit()