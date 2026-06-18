---
title: "Projet 2STAT : Analyse de données atmosphériques"
date: "2026-06-18"
excerpt: "Analyse de séries temporelles de gaz à effet de serre (CO₂, CH₄, N₂O, SF₆) avec Python : visualisation, décomposition saisonnière et modèles de régression."
tags: [ "Python", "Pandas", "NumPy", "Scikit-learn", "SciPy", "Séries temporelles", "Statistiques" ]
coverImage: "https://cdn.farmeurimmo.fr/img/projects/2stat-project-cover.png"
---

## Projet 2STAT

Projet d’analyse de séries temporelles basé sur des données atmosphériques issues du Global Monitoring Laboratory.

Note : **71.67**

### Contexte et exigences

Le projet consistait à analyser plusieurs jeux de données de gaz à effet de serre afin d’étudier leur évolution dans le
temps.

Les étapes demandées incluaient le nettoyage des données, l’analyse statistique, la mise en évidence de tendances et de
saisonnalités, ainsi que la construction de modèles de prévision.

L’ensemble du travail a été réalisé sous forme de notebook Python.

### Fonctionnalités principales

- Chargement et exploration de plusieurs jeux de données :
    - CO₂
    - CH₄
    - N₂O
    - SF₆
- Conservation des variables utiles (`month`, `average`)
- Visualisation des séries temporelles sous forme de nuages de points
- Identification des gaz présentant une saisonnalité
- Calcul de moyennes mobiles
- Décomposition des séries temporelles :
    - modèle additif
    - modèle multiplicatif
- Extraction et correction des composantes saisonnières
- Calcul de tendances via régression linéaire
- Modélisation exponentielle pour comparaison
- Prévisions sur 24 mois
- Agrégation annuelle des données
- Analyse des tendances à long terme

---

### En une image

![Aperçu des séries temporelles étudiées](https://cdn.farmeurimmo.fr/img/projects/2stat-project-cover.png)

---

### Données étudiées

- `ch4_mm_gl.csv` : méthane
- `co2_mm_mlo.csv` : dioxyde de carbone
- `n2o_mm_gl.csv` : protoxyde d’azote
- `sf6_mm_gl.csv` : hexafluorure de soufre

Chaque dataset contient des mesures mensuelles de concentration sur plusieurs décennies.

---

### Analyse des séries temporelles

#### Prétraitement

1. Chargement des fichiers CSV
2. Suppression des colonnes non pertinentes
3. Indexation temporelle
4. Création d’indicateurs mensuels

#### Décomposition des séries

1. Calcul de moyennes mobiles
2. Extraction de la tendance
3. Calcul de la composante saisonnière
4. Séries corrigées des variations saisonnières

---

### Modélisation

#### Régression linéaire

- Estimation de la tendance globale
- Calcul du coefficient de corrélation
- Ajustement d’une droite de régression

#### Régression exponentielle

- Linéarisation via logarithme
- Ajustement du modèle exponentiel
- Comparaison avec le modèle linéaire

---

### Prévisions

- Prévisions sur 24 mois pour chaque gaz
- Combinaison de la tendance et de la saisonnalité
- Analyse des limites des modèles

---

### Analyse annuelle

- Agrégation des données par année
- Étude des tendances long terme
- Régression linéaire et exponentielle sur données annuelles
- Prévisions sur 2 ans

---

### Technologies utilisées

- Python 3
- Pandas
- NumPy
- Matplotlib / Seaborn
- Scikit-learn
- SciPy
- Jupyter Notebook

---

### Structure du projet

- `notebook.ipynb` : analyse complète
- `data/` : jeux de données CSV
- `requirements.txt` : dépendances Python

---

### Objectifs atteints

- Analyse complète de séries temporelles réelles
- Mise en évidence de tendances globales
- Identification de comportements saisonniers
- Comparaison de modèles statistiques
- Construction de modèles prédictifs simples