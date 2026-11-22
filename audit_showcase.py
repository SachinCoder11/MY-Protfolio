import os

print("=== PROJECT 1: EXCEL FILES ===")
p1_candidates = [
    r"C:\Users\DELL\Desktop\Everything\CIRCOR_Application\PROJECT_EVIDENCE\01_Global_Trade_Analytics.xlsx",
    os.path.join(r"C:\Users\DELL\Desktop", "Sachin'", "Data_Quality_Resume_Audit_Consolidated", "CORRECTED_PROJECT_COPIES", "01_Global_Trade_Analytics", "Global_Trade_Analytics_AUDITED.xlsx"),
    r"C:\Users\DELL\Desktop\Everything\CIRCOR_Application\PROJECT_EVIDENCE\01_Global_Trade_Dashboard_Preview.png"
]
for p in p1_candidates:
    exists = os.path.exists(p)
    size = os.path.getsize(p) if exists else 0
    print(p, "EXISTS:", exists, f"({size} bytes)" if exists else "")

print("\n=== PROJECT 2: FINANCE FILES ===")
p2_dir = r"C:\Users\DELL\Desktop\Finance\output\analysis"
if os.path.exists(p2_dir):
    for f in os.listdir(p2_dir):
        fp = os.path.join(p2_dir, f)
        print(f, os.path.getsize(fp), "bytes")

print("\n=== PROJECT 3: SPACE MISSION FILES ===")
space_matches = []
for root, dirs, files in os.walk(r"C:\Users\DELL\Desktop"):
    if any(ignore in root.lower() for ignore in ['node_modules', '.git', '.gemini', 'dist']):
        continue
    for f in files:
        if any(term in f.lower() for term in ['space', 'mission']):
            space_matches.append(os.path.join(root, f))
for m in space_matches:
    print(m, os.path.getsize(m), "bytes")
