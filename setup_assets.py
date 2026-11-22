import shutil, os

os.makedirs(r"C:\Users\DELL\Desktop\SUPPORT\public\images", exist_ok=True)

# 1. Excel project
src_excel = os.path.join(r"C:\Users\DELL\Desktop", "Sachin'", "Data_Quality_Resume_Audit_Consolidated", "CORRECTED_PROJECT_COPIES", "01_Global_Trade_Analytics", "Global_Trade_Analytics_AUDITED.xlsx")
dest_excel = r"C:\Users\DELL\Desktop\SUPPORT\public\Global_Trade_Analytics_Executive_Portfolio.xlsx"
shutil.copy2(src_excel, dest_excel)
print("Excel deliverable copied:", os.path.getsize(dest_excel), "bytes")

# 1b. Excel preview image
src_preview = r"C:\Users\DELL\Desktop\Everything\CIRCOR_Application\PROJECT_EVIDENCE\01_Global_Trade_Dashboard_Preview.png"
dest_preview = r"C:\Users\DELL\Desktop\SUPPORT\public\images\01_Global_Trade_Dashboard_Preview.png"
if os.path.exists(src_preview):
    shutil.copy2(src_preview, dest_preview)
    print("Excel preview image copied:", os.path.getsize(dest_preview), "bytes")

# 2. Finance images
finance_dir = r"C:\Users\DELL\Desktop\Finance\output\analysis"
for img in ["profit_margin_distribution.png", "finance_cost_burden.png", "financial_correlation_matrix.png"]:
    sp = os.path.join(finance_dir, img)
    dp = os.path.join(r"C:\Users\DELL\Desktop\SUPPORT\public\images", img)
    if os.path.exists(sp):
        shutil.copy2(sp, dp)
        print(f"Finance {img} copied:", os.path.getsize(dp), "bytes")
