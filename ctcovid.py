import requests
from bs4 import BeautifulSoup
import datetime
import json


# converts dict to json
def to_json_string(list_dictionaries):
    """ converts dict to json """
    if list_dictionaries is None or list_dictionaries == []:
        return "[]"
    return json.dumps(list_dictionaries)

# saves json to json file
def save_to_file(LO_dict, name):
    """ write into a .json file """
    with open(name + ".json", "w") as f:
        f.write(to_json_string(LO_dict))
    print(f"Saved to {name}.json")
def get_covid_data():
    url = "https://portal.ct.gov/Coronavirus"

    res = requests.get(url)
    soup = BeautifulSoup(res.content, features="lxml")

    html = soup.find(class_="callout primary")

    county_list = html.find("li").find("ul").find_all("li")

    county_data = {
        "Fairfield":0,
        "Hartford":0,
        "Litchfield":0,
        "Middlesex":0,
        "New Haven":0,
        "New London":0,
        "Tolland":0,
        "Windham":0
    }

    for county in county_list:
        text = county.text.split(":")
        key = text[0][:-7]
        county_data[key] = int(text[1].strip())
    county_data


    now = datetime.datetime.now()
    name = "src/data/"
    name += "m" + str(now).split()[0].replace("-","")

    save_to_file(county_data, name)
    
if __name__ == "__main__":
    get_covid_data()
