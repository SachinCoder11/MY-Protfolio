import openpyxl, os

p = r"C:\Users\DELL\Desktop\Everything\CIRCOR_Application\PROJECT_EVIDENCE\04_Space_Mission_4324_Records.xlsx"
if os.path.exists(p):
    wb = openpyxl.load_workbook(p, data_only=True)
    print("Space Mission Sheets:", wb.sheetnames)
    for s in wb.sheetnames:
        ws = wb[s]
        print(f"Sheet {s}: max_row={ws.max_row}, max_col={ws.max_column}")

print("\nChecking aerospace_project_portfolio.html:")
p_html = r"C:\Users\DELL\Desktop\Everything\CIRCOR_Application\aerospace_project_portfolio.html"
if os.path.exists(p_html):
    with open(p_html, 'r', encoding='utf-8', errors='ignore') as f:
        print(f.read()[:2000])
