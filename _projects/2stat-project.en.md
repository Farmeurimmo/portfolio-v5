---
title: "2STAT Project: Atmospheric Data Analysis"
date: "2026-06-18"
excerpt: "Time series analysis of greenhouse gases (CO₂, CH₄, N₂O, SF₆) using Python: visualization, seasonal decomposition, and regression models."
tags: [ "Python", "Pandas", "NumPy", "Scikit-learn", "SciPy", "Time Series", "Statistics" ]
coverImage: "https://cdn.farmeurimmo.fr/img/projects/2stat-project-cover.png"
---

## 2STAT Project

Time series analysis project based on atmospheric data from the Global Monitoring Laboratory.

Grade: **71.67**

### Context and requirements

The goal of this project was to analyze several greenhouse gas datasets in order to study their evolution over time.

The required steps included data cleaning, statistical analysis, trend and seasonality detection, and forecasting model
construction.

The entire work was implemented in a Python notebook.

### Main features

- Loading and exploring multiple datasets:
    - CO₂
    - CH₄
    - N₂O
    - SF₆
- Keeping only relevant variables (`month`, `average`)
- Time series visualization using scatter plots
- Identification of gases with seasonal patterns
- Moving average computation
- Time series decomposition:
    - additive model
    - multiplicative model
- Extraction and correction of seasonal components
- Trend estimation using linear regression
- Exponential regression modeling for comparison
- 24-month forecasting
- Yearly aggregation of data
- Long-term trend analysis

---

### One image

![Overview of the analyzed time series](https://cdn.farmeurimmo.fr/img/projects/2stat-project-cover.png)

---

### Datasets

- `ch4_mm_gl.csv` : methane
- `co2_mm_mlo.csv` : carbon dioxide
- `n2o_mm_gl.csv` : nitrous oxide
- `sf6_mm_gl.csv` : sulfur hexafluoride

Each dataset contains monthly atmospheric concentration measurements over several decades.

---

### Time series analysis

#### Preprocessing

1. Loading CSV files
2. Removing irrelevant columns
3. Building a time index
4. Creating monthly indicators

#### Decomposition

1. Moving average computation
2. Trend extraction
3. Seasonal component estimation
4. Seasonally adjusted series

---

### Modeling

#### Linear regression

- Global trend estimation
- Correlation computation
- Linear fit of corrected series

#### Exponential regression

- Log transformation of data
- Exponential model fitting
- Comparison with linear regression

---

### Forecasting

- 24-month forecasts for each gas
- Combination of trend and seasonal components
- Discussion of model limitations

---

### Annual analysis

- Aggregation by year
- Long-term trend study
- Linear and exponential regression on yearly data
- 2-year forecasting

---

### Technologies used

- Python 3
- Pandas
- NumPy
- Matplotlib / Seaborn
- Scikit-learn
- SciPy
- Jupyter Notebook

---

### Project structure

- `notebook.ipynb` : full analysis
- `data/` : CSV datasets
- `requirements.txt` : dependencies

---

### Achievements

- Full real-world time series analysis
- Identification of long-term trends
- Detection of seasonal behavior
- Comparison of statistical models
- Basic predictive modeling