import hashlib
i = 0
while i < 10000:
    print(str(i) + " " + str(hashlib.sha256(i)))
print("done")