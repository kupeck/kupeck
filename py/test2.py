import requests
i = 2103
while i < 3001:
    r = requests.get('https://ping.kupeck.workers.dev/')
    print(r.text + " " + str(r.status_code) + " " + str(i))
    i = i + 1
print('Done!')