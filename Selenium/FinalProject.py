from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait

driver = webdriver.Chrome(executable_path="c:\selenium browser drivers\chromedriver.exe")
driver.get("file:///C:/Final%20Project/Home.html")
driver.get("file:///C:/Final%20Project/Home.html").click()
driver.find_element_by_id("login_field").send_keys("username")
driver.find_element_by_id("password").send_keys("password")
driver.get("file:///C:/Final%20Project/Signup.html").click()
driver.find_element_by_id("username").send_keys("username")
driver.find_element_by_id("password").send_keys("password")
driver.find_element_by_id("name").send_keys("name")
driver.find_element_by_id("phone number").send_keys("phone number")
driver.find_element_by_id("date of birth").send_keys("date of birth")
driver.find_element_by_id("username").click()

