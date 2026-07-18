import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select


@pytest.mark.parametrize("message", [
    "Hello Selenium",
    "Pytest Demo",
    "Digital Nurture"
])
def test_simple_form_submission(driver, base_url, message):

    driver.get(base_url + "simple-form-demo/")

    wait = WebDriverWait(driver, 10)

    textbox = wait.until(
        EC.presence_of_element_located((By.ID, "user-message"))
    )

    textbox.clear()
    textbox.send_keys(message)

    driver.find_element(By.ID, "showInput").click()

    print(f"Message Sent: {message}")


def test_page_title(driver, base_url):

    driver.get(base_url)

    assert "Selenium" in driver.title

    print("Page title verified")


def test_dropdown(driver, base_url):

    driver.get(base_url + "select-dropdown-demo/")

    dropdown = Select(
        driver.find_element(By.ID, "select-demo")
    )

    dropdown.select_by_visible_text("Friday")

    print("Dropdown Test Passed")