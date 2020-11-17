import datetime, urllib.request, json, time
data = None
playerdata = None
playerlist = None
playercount = None
lastplayerlist = None
joins = None
leaves = None
with urllib.request.urlopen("https://api.mcsrvstat.us/2/play.engineerium.eu") as url:
    data = json.loads(url.read().decode())
    #print(data)

    playerdata = data.get("players")
    #print(playerdata)
    playerlist = playerdata.get("list")
    playercount = playerdata.get("online")
    print(playerlist)
    print(playercount)
    joins = playerlist - lastplayerlist
    leaves = lastplayerlist - playerlist

    time = datetime.time()
    f = open("log.txt", "at")
    f.write()
    print(time + " joins: " + str(joins) + " leaves: " + str(leaves) + " count: " + str(playercount))
    lastplayerlist = playerlist