import requests
i = 0
while i < 50001:
    r = requests.get('https://ping.kupeck.workers.dev/')
    if i % 50 == 0:
        print(r.text + " " + str(r.status_code) + " " + str(i))
    i = i + 1
print('Done!')