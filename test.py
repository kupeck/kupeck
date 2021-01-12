alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
i = 0
n = 0
while n < 25:
    i = i + 1
    if i > 25:
        n = n + 1
        i = 0
    print(alphabet[n] + " " + alphabet[i])
print ("Done!")