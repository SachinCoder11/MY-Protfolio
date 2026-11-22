import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import os

xlsx_path = r"C:\Users\DELL\Desktop\Everything\CIRCOR_Application\PROJECT_EVIDENCE\04_Space_Mission_4324_Records.xlsx"
df = pd.read_excel(xlsx_path)
print("Columns:", df.columns)
print("Shape:", df.shape)

# Set clean styling
plt.style.use('seaborn-v0_8-whitegrid' if 'seaborn-v0_8-whitegrid' in plt.style.available else 'default')
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 5.5), dpi=150)

# 1. Sparsity Audit: Missing vs Reported Cost
cost_col = [c for c in df.columns if 'cost' in c.lower() or 'price' in c.lower()][0]
valid_costs = pd.to_numeric(df[cost_col].astype(str).str.replace('$', '').str.replace(',', '').str.strip(), errors='coerce')
has_cost = valid_costs.notna() & (valid_costs > 0)
missing_count = (~has_cost).sum()
reported_count = has_cost.sum()

# Pie/Donut Chart for Sparsity
wedges, texts, autotexts = ax1.pie(
    [reported_count, missing_count],
    labels=['Reported Launch Cost\n(964 records | 22.3%)', 'Missing / Unreported Cost\n(3,360 records | 77.7%)'],
    autopct='%1.1f%%',
    startangle=140,
    colors=['#059669', '#cbd5e1'],
    textprops={'fontsize': 10, 'weight': 'bold'},
    wedgeprops={'edgecolor': 'white', 'linewidth': 2}
)
for autotext in autotexts:
    autotext.set_color('white')
    autotext.set_weight('bold')
ax1.set_title("Historical Mission Cost Reporting Sparsity\n(4,324 Total Aerospace Missions: 1957–2020)", fontsize=11, fontweight='bold', pad=12)

# 2. Imputation Distortion vs Ground Truth Distribution
costs = valid_costs[has_cost]
q1, q3 = costs.quantile([0.25, 0.75])
median_val = costs.median()
mean_val = costs.mean()

# Boxplot / Violin representation of cost bands
bplot = ax2.boxplot(
    [costs],
    vert=False,
    patch_artist=True,
    boxprops=dict(facecolor='#0284c7', color='#0369a1', alpha=0.7),
    medianprops=dict(color='#dc2626', linewidth=2.5),
    whiskerprops=dict(color='#0369a1', linewidth=1.5),
    capprops=dict(color='#0369a1', linewidth=1.5),
    flierprops=dict(marker='o', color='#dc2626', alpha=0.5, markersize=4)
)
ax2.set_xscale('log')
ax2.set_title("Ground Truth Cost Distribution vs. Imputation Distortion\nExtreme Skewness: Median $50.0M vs. Mean $153.8M (Max $5,000M)", fontsize=11, fontweight='bold', pad=12)
ax2.set_xlabel("Launch Cost in Millions USD (Logarithmic Scale)", fontsize=10, fontweight='bold')
ax2.set_yticks([1])
ax2.set_yticklabels(["Reported Missions\n(N=964)"], fontsize=10, fontweight='bold')

# Annotate median and mean lines
ax2.axvline(median_val, color='#059669', linestyle='--', linewidth=2, label=f'Median: ${median_val:.1f}M (Statistically Robust)')
ax2.axvline(mean_val, color='#dc2626', linestyle=':', linewidth=2, label=f'Naive Mean: ${mean_val:.1f}M (+207% Distorted)')
ax2.axvline(5000, color='#d97706', linestyle='-.', linewidth=1.5, label='Saturn V Apollo Cluster ($5,000M Artifact)')
ax2.legend(loc='lower right', fontsize=9, framealpha=0.95)

plt.tight_layout()
out_img = r"C:\Users\DELL\Desktop\SUPPORT\public\images\space_mission_imputation_audit.png"
plt.savefig(out_img, dpi=200)
print("Saved Space Mission chart:", out_img, os.path.getsize(out_img), "bytes")
