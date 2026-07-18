from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.maximize_window()

wait = WebDriverWait(driver, 10)

driver.get("https://www.lambdatest.com/selenium-playground/simple-form-demo")

# -------------------------
# Task 32 - Locator Strategies
# -------------------------

# ID
id_locator = wait.until(
    EC.presence_of_element_located((By.ID, "user-message"))
)
print("✓ ID Locator")

# NAME
try:
    driver.find_element(By.NAME, "user-message")
    print("✓ NAME Locator")
except NoSuchElementException:
    print("✗ NAME locator not available (website updated)")

# CLASS NAME
driver.find_element(By.CLASS_NAME, "form-control")
print("✓ CLASS_NAME Locator")

# TAG NAME
driver.find_element(By.TAG_NAME, "input")
print("✓ TAG_NAME Locator")

# Absolute XPath
driver.find_element(By.XPATH, "/html/body//input[@id='user-message']")
print("✓ Absolute XPath")

# Relative XPath
driver.find_element(By.XPATH, "//input[@id='user-message']")
print("✓ Relative XPath")

# -------------------------
# Task 33 - CSS Selectors
# -------------------------

# CSS by ID
driver.find_element(By.CSS_SELECTOR, "#user-message")
print("✓ CSS by ID")

# CSS by Attribute
driver.find_element(By.CSS_SELECTOR, "input[id='user-message']")
print("✓ CSS by Attribute")

# CSS Parent > Child
driver.find_element(By.CSS_SELECTOR, "div > input")
print("✓ CSS Parent > Child")

print("\nHands-On 5 - Task 32 & 33 Completed Successfully!")

driver.quit()