import datetime
import pandas as pd
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
    
def get_table():
    url = "https://portal.ct.gov/Coronavirus"
    df = pd.read_html(url, skiprows=1)[0] # gets df from table

    new_header = df.iloc[0] # grab the first row for the header
    df = df[1:] # take the data less the header row
    df.columns = new_header # set the header row as the df header
    df.set_index('County', inplace=True) # sets County column as index

    county_dict = df.to_dict() # set to dict
    county_dict = county_dict["Positive Cases"] #Get dict inside Psitive Cases

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
    # handle formating
    for county, count in county_dict.items():
        if county != "Total":
            county = county[:-7] # get rid of " county" in the key
        county_data[county] = int(count)

    now = datetime.datetime.now() # get date
    name = "src/data/" # add directory
    name += "m" + str(now).split()[0].replace("-","") # create name using date

    save_to_file(county_data, name) # save to file
    
if __name__ == "__main__":
    get_table()
