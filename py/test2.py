import requests
i = 0
while i < 50001:
    r = requests.get('https://ping.kupeck.workers.dev/')
    print(r.text + " " + str(r.status_code) + " " + str(i))
    i = i + 1
print('Done!')