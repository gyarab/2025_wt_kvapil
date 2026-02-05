import httpx
from colorama import just_fix_windows_console, Fore, Back, Style
just_fix_windows_console()

res = httpx.get('https://www.cnb.cz/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt')

print("server odpověděl:", res.status_code)
lines = res.text.split('\n')
print(Back.BLUE + "Kruzy pro den:", Style.BRIGHT + lines[0].split(" ")[0] + Style.RESET_ALL)

line_euro = ""
for line in lines:
    if "EUR" in line:
        line_euro = line
        break

rate_eur_str = line_euro.split('|')[-1].replace(',' , '.')
rate_eur = float(rate_eur_str)

rate_czk = 1 / rate_eur

print("Kurz eura je", Fore.GREEN + f"{rate_eur:.2f}" + "CZK" + Style.RESET_ALL)

curency = input("Na jakou měnu chceš převést? (CZK/EUR)? ")

# Validate currency input
valid_currencies = ["CZK", "EUR"]
while curency.upper() not in valid_currencies:
    print("Neplatná měna. Zadej pouze CZK nebo EUR.")
    curency = input("Na jakou měnu chceš převést? (CZK/EUR)? ")

if curency.upper() == "EUR":
    value_in = input("Kolik máš eur? ")

    try:
        value_in = float(value_in)
    except ValueError:
        print("Lze zadat pouze číslo")
        exit(1)

    if (value_in < 0):
        print("Nelze konvertovat záporné")
        exit(1)

    value_out = value_in * rate_eur

    print(f" {value_in}€ je {value_out:.2f}CZK")
elif curency.upper() == "CZK":
    value_in = input("Kolik máš korun? ")

    try:
        value_in = float(value_in)
    except ValueError:
        print("Lze zadat pouze číslo")
        exit(1)

    if (value_in < 0):
        print("Nelze konvertovat záporné")
        exit(1)

    value_out = value_in * rate_czk

    print(f" {value_in}CZK je {value_out:.2f}€")