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

def get_global_data():
    url = "https://coronavirus-19-api.herokuapp.com/all"

    res = requests.get(url).json()

    now = datetime.datetime.now()
    name = "src/data/"
    name += "global_" + str(now).split()[0].replace("-","")

    save_to_file(res, name)
    
if __name__ == "__main__":
    get_global_data()