#!/usr/bin/python
#
# Copyright 2012 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import json
import pprint
import sys
from apiclient.discovery import build

# For this example, the API key is provided as a command-line argument.
# api_key = sys.argv[1]

# The apiclient.discovery.build() function returns an instance of an API service
# object that can be used to make API calls. The object is constructed with
# methods specific to the books API. The arguments provided are:
#   name of the API ('books')
#   version of the API you are using ('v1')
#   API key
service = build('books', 'v1')

with open('book_data.json', 'r') as books_data:
    book_data = json.load(books_data) 

    count = 0
    for book_info in book_data:
      title = book_info['title']
      author = book_info['author']
      q = '{0}+inauthor:{1}'.format(title, author)

      request = service.volumes().list(source='public', q=q, maxResults=1)

      # The execute() function on the HttpRequest object actually calls the API.
      # It returns a Python object built from the JSON response. You can print this
      # object or refer to the Books API documentation to determine its structure.
      response = request.execute()
      # pprint.pprint(response)

      # Accessing the response like a dict object with an 'items' key returns a list
      # of item objects (books). The item object is a dict object with a 'volumeInfo'
      # key. The volumeInfo object is a dict with keys 'title' and 'authors'.
      # print 'Found %d books:' % len(response['items'])
      items = response.get('items')
      if not items:
        print q
        continue
      for book in items:
        try:
          page_count = book['volumeInfo']['pageCount']
        except:
          print q
          continue
        try:
          rating = book['volumeInfo']['averageRating']
        except:
          rating = None
        print '{0},{1},{2}'.format(book['volumeInfo']['title'], rating, book['volumeInfo']['pageCount'])
    print
