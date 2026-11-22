import urllib.request, json

def check_repo(name):
    url = f"https://api.github.com/repos/SachinCoder11/{name}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req) as res:
            data = json.loads(res.read().decode('utf-8'))
            print(f"Repo {name}: html_url={data['html_url']}, description={data['description']}, size={data['size']}, pushed_at={data['pushed_at']}")
    except Exception as e:
        print(f"Error checking {name}: {e}")

check_repo("Finance")
check_repo("Automated_Financial_Intelligence_Pipeline")
check_repo("Space_Mission_EDA_Project")
