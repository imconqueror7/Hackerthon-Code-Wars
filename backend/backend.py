import requests
# import pandas as pd

# df = pd.read_excel("C:\\Users\\Sachin Kumar\\Desktop\\Hackerthon\\demo\\Hackerthon-Code-Wars\\backend\\websites.xlsx")

# for index,websites in df.iterrows():
#     print(index, websites["Names"])
#     response =requests.get(websites["Name"])


# url = input("Enter the Url")
response =requests.get("http://google.com")
print(response.status_code)
