import requests
import json
import datetime

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
    
def get_all_countries():
    url = 'https://coronavirus-19-api.herokuapp.com/countries'
    countries = requests.get(url).json()
    return countries

def countries_to_file():
    countries = get_all_countries()
    for country in countries:
        if country["country"] == "USA":
            usa_dict = country
    now = datetime.datetime.now()
    name = "src/data/"
    name += "usa_" + str(now).split()[0].replace("-","")

    save_to_file(usa_dict, name)

if __name__ == "__main__":
    countries_to_file()