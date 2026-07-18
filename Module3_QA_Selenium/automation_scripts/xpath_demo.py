from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.maximize_window()

wait = WebDriverWait(driver, 10)

driver.get("https://www.lambdatest.com/selenium-playground/checkbox-demo")

# Wait until at least one checkbox is present
wait.until(
    EC.presence_of_element_located((By.XPATH, "//input[@type='checkbox']"))
)

# XPath using text()
try:
    option = driver.find_element(
        By.XPATH,
        "//label[contains(normalize-space(),'Option')]"
    )
    print("✓ XPath using text()/contains() works")
    print("Label:", option.text)
except:
    print("Label with 'Option' text not found on current page")

# XPath using contains()
labels = driver.find_elements(
    By.XPATH,
    "//label[contains(.,'Option')]"
)

print("Labels found:", len(labels))

print("\nTask 34 Completed")

driver.quit()