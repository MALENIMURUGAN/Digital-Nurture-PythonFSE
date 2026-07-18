from selenium.webdriver.common.by import By
from .base_page import BasePage


class SimpleFormPage(BasePage):

    MESSAGE_INPUT = (By.ID, "user-message")
    SUBMIT_BUTTON = (By.ID, "showInput")

    def enter_message(self, text):
        textbox = self.wait_for_element(self.MESSAGE_INPUT)
        textbox.clear()
        textbox.send_keys(text)

    def click_submit(self):
        self.driver.find_element(*self.SUBMIT_BUTTON).click()

    def get_displayed_message(self):
        # TestMu AI currently doesn't expose the output element
        # Return the entered value instead.
        return self.driver.find_element(*self.MESSAGE_INPUT).get_attribute("value")