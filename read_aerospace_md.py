import os

p_md = r"C:\Users\DELL\Desktop\Everything\CIRCOR_Application\AEROSPACE_PROJECT_PORTFOLIO.md"
if os.path.exists(p_md):
    with open(p_md, 'r', encoding='utf-8', errors='ignore') as f:
        print(f.read())
