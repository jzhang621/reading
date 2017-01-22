from amazonproduct import API

AWS_KEY = 'AKIAIDI3WDOADVTEEGTQ'
SECRET_KEY = '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'


def minidom_response_parser(fp):
    root = xml.dom.minidom.parse(fp)
    # parse errors
    for error in root.getElementsByTagName('Error'):
      code = error.getElementsByTagName('Code')[0].firstChild.nodeValue
      msg = error.getElementsByTagName('Message')[0].firstChild.nodeValue
      raise AWSError(code, msg)
      return root

api = API(locale='us')

for book in api.item_search('Books', Publisher='Galileo Press'):
    print '%s: "%s"' % (book.ItemAttributes.Author, book.ItemAttributes.Title)
