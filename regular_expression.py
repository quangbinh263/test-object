import re

message = """
Toll Free:866-964-2867
Local:713-574-5287
International:00+1-713-574-5287
Fax (Billing):(281) 476 - 7800
Fax (Abuse):(281) 476 - 7801 """

phoneNumRegex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')
mo = phoneNumRegex.search(message)
print(mo.group(1))