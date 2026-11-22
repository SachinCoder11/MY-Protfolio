import openpyxl, os

f1 = r"C:\Users\DELL\Desktop\Everything\CIRCOR_Application\PROJECT_EVIDENCE\01_Global_Trade_Analytics.xlsx"
f2 = os.path.join(r"C:\Users\DELL\Desktop", "Sachin'", "Data_Quality_Resume_Audit_Consolidated", "CORRECTED_PROJECT_COPIES", "01_Global_Trade_Analytics", "Global_Trade_Analytics_AUDITED.xlsx")

for name, path in [("CIRCOR copy", f1), ("AUDITED copy", f2)]:
    if os.path.exists(path):
        wb = openpyxl.load_workbook(path, data_only=False)
        print(f"\n=== {name} ({os.path.getsize(path)} bytes) ===")
        print("Sheets:", wb.sheetnames)
        for s in wb.sheetnames:
            ws = wb[s]
            # check formula count
            formula_count = 0
            for r in range(1, min(ws.max_row+1, 100)):
                for c in range(1, min(ws.max_column+1, 30)):
                    val = str(ws.cell(r, c).value or '')
                    if val.startswith('='):
                        formula_count += 1
            print(f"  {s}: rows={ws.max_row}, cols={ws.max_column}, sample formulas (first 100 rows)={formula_count}")
