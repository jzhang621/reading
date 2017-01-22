from __future__ import print_function
import httplib2
import os
import json

from datetime import datetime
import time

from apiclient import discovery
from oauth2client import client
from oauth2client import tools
from oauth2client.file import Storage

try:
    import argparse
    flags = argparse.ArgumentParser(parents=[tools.argparser]).parse_args()
except ImportError:
    flags = None

# If modifying these scopes, delete your previously saved credentials
# at ~/.credentials/sheets.googleapis.com-python-quickstart.json
SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly'
CLIENT_SECRET_FILE = 'client_secret.json'
APPLICATION_NAME = 'Google Sheets API Python Quickstart'


def get_credentials():
    """Gets valid user credentials from storage.

    If nothing has been stored, or if the stored credentials are invalid,
    the OAuth2 flow is completed to obtain the new credentials.

    Returns:
        Credentials, the obtained credential.
    """
    home_dir = os.path.expanduser('~')
    credential_dir = os.path.join(home_dir, '.credentials')
    if not os.path.exists(credential_dir):
        os.makedirs(credential_dir)
    credential_path = os.path.join(credential_dir,
                                   'sheets.googleapis.com-python-quickstart.json')

    store = Storage(credential_path)
    credentials = store.get()
    if not credentials or credentials.invalid:
        flow = client.flow_from_clientsecrets(CLIENT_SECRET_FILE, SCOPES)
        flow.user_agent = APPLICATION_NAME
        if flags:
            credentials = tools.run_flow(flow, store, flags)
        else: # Needed only for compatibility with Python 2.6
            credentials = tools.run(flow, store)
        print('Storing credentials to ' + credential_path)
    return credentials

def main():
    """Shows basic usage of the Sheets API.

    Creates a Sheets API service object and prints the names and majors of
    students in a sample spreadsheet:
    https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
    """
    credentials = get_credentials()
    http = credentials.authorize(httplib2.Http())
    discoveryUrl = ('https://sheets.googleapis.com/$discovery/rest?'
                    'version=v4')
    service = discovery.build('sheets', 'v4', http=http,
                              discoveryServiceUrl=discoveryUrl)

    spreadsheetId = '1y4_X5dZAxK8FeyqKAoo-MRXCcV8Wi2Ejwz2_BCaqRDw'
    rangeName = 'Book List!1:41'
    result = service.spreadsheets().values().get(
        spreadsheetId=spreadsheetId, range=rangeName).execute()
    values = result.get('values', [])

    # parse_and_write_values(values)
    parse_and_write_dates(values)


def parse_and_write_values(values):

    header = values[0]

    all_book_data = []

    for book_data in values[1:]:
        bd = {}
        for i in range(len(header)):
            field_name = header[i].lower()
            try:
                value = book_data[i]
            except IndexError:
                value = None
          
            if field_name == 'start date' or field_name == 'end date':
              if value:
                date_val = value + '/2016'
                date_val = datetime.strptime(date_val, '%m/%d/%y')
                value = int(time.mktime(date_val.timetuple()))

            bd[field_name] = value
        all_book_data.append(bd)

    write_book_data_to_file('book_data.json', all_book_data)

def parse_and_write_dates(values):

    header = values[0]
    relevant_fields = [0, 5, 8, 9]

    all_book_data = []

    for book_data in values[1:]:
        bd = {}
        try:
            book_data[8]
        except IndexError:
            continue

        for i in relevant_fields:
            field_name = header[i].lower().replace(' ', '')
            value = book_data[i]

            if field_name == 'startdate' or field_name == 'enddate':
                if value == '1/4':
                  date_val = value + '/2017'
                else:
                  date_val = value + '/2016'
                date_val = datetime.strptime(date_val, '%m/%d/%Y')
                value = int(time.mktime(date_val.timetuple()))

            bd[field_name] = value
        all_book_data.append(bd)
    
    print(all_book_data)
    write_book_data_to_file('times.json', all_book_data)


def write_book_data_to_file(file_name, values):

    with open(file_name, 'w') as book_data:
        json.dump(values, book_data)


if __name__ == '__main__':
    main()
