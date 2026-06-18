---
title: "Projet C++ : Laying Grass"
date: "2025-11-13"
excerpt: "Implémentation en C++ du jeu de stratégie Laying Grass, inspiré de l'émission The Devil's Plan. Jeu en ligne de commande où plusieurs joueurs étendent leur territoire à l'aide de tuiles de différentes formes."
tags: [ "C++", "CLI", "Programmation orientée objet", "Algorithmes", "CMake", "Jeu de stratégie" ]
coverImage: "https://cdn.farmeurimmo.fr/img/projects/2cpp-project-cover.png"
---

## Laying Grass

Jeu de stratégie en tour par tour inspiré de l'épreuve « Laying Grass » de l'émission Netflix *The Devil's Plan*.

L'objectif est de créer le plus grand territoire carré possible en plaçant des tuiles de formes variées sur une grille
partagée entre plusieurs joueurs.

Note : **94.60**

### Contexte et exigences

Le projet devait être réalisé en groupe de deux étudiants sur une durée de deux semaines.

L'application devait proposer une implémentation complète du jeu en respectant l'ensemble des règles fournies, sans
interface graphique obligatoire. Une interface en ligne de commande (CLI) était suffisante.

### Fonctionnalités principales

- Jeu jouable de 2 à 9 joueurs.
- Attribution d'un nom et d'une couleur à chaque joueur.
- Génération d'une grille de jeu de :
    - 20 × 20 cases pour 2 à 4 joueurs ;
    - 30 × 30 cases pour 5 à 9 joueurs.
- Gestion de 96 tuiles de formes différentes dans un ordre aléatoire.
- Placement de tuiles avec rotations et retournements autorisés.
- Gestion des coupons d'échange de tuiles.
- Validation des règles de placement :
    - connexion obligatoire au territoire du joueur ;
    - impossibilité de chevaucher une autre tuile ;
    - impossibilité de toucher le territoire d'un autre joueur.
- Gestion des tours et des neuf manches de jeu.
- Détermination automatique du vainqueur selon la taille du plus grand carré formé.

### Système de bonus

La grille contient plusieurs types de cases spéciales réparties aléatoirement :

- Case d'échange :
    - octroie un coupon d'échange supplémentaire.
- Case pierre :
    - permet de placer un bloc de pierre sur une case vide ;
    - aucune tuile ne peut être placée sur cette case tant que la pierre n'est pas retirée.
- Case vol :
    - permet de récupérer une tuile appartenant à un autre joueur et de l'intégrer à son propre territoire.

Les bonus de type pierre et vol doivent être utilisés immédiatement après leur acquisition.

### En une image

![Exemple de partie avec 2 joueurs](https://cdn.farmeurimmo.fr/img/projects/2cpp-project-cover.png)

### Architecture du projet

Le projet est organisé en plusieurs modules :

- `src/` : ensemble des fichiers sources.
- `src/core/` : logique principale du jeu et modèles.
- `src/managers/` : gestionnaires des différentes fonctionnalités.
- `src/utils/` : fonctions utilitaires.
- `tiles/` : ressources contenant les différentes formes de tuiles.
- `build/` : fichiers générés lors de la compilation.
- `CMakeLists.txt` : configuration de la compilation avec CMake.

### Principales classes

- `Player` : gestion des informations et du territoire d'un joueur.
- `Tile` : représentation d'une tuile et de sa forme.
- `Board` : gestion de la grille et des placements.
- `TilesManager` : chargement, stockage et distribution des tuiles.

### Algorithmes et logique de jeu

#### Boucle principale

Chaque partie suit le déroulement suivant :

1. Initialisation des joueurs et du plateau.
2. Distribution des positions de départ.
3. Exécution de neuf manches.
4. Gestion des bonus et des coupons.
5. Calcul des scores.
6. Désignation du vainqueur.

#### Placement des tuiles

Lorsqu'un joueur reçoit une tuile :

1. Vérification de la validité de la position.
2. Vérification de la connexion avec son territoire.
3. Vérification de l'absence de collision.
4. Placement de la tuile et mise à jour du territoire.

Si aucune position valide n'est possible, la tuile est défaussée et le joueur passe son tour.

#### Calcul du score

À la fin de la partie :

- la taille du plus grand carré entièrement recouvert par le territoire du joueur est calculée ;
- en cas d'égalité, le nombre total de cases occupées est utilisé pour départager les joueurs.

### Interface en ligne de commande

L'application repose entièrement sur une interface CLI :

- affichage du plateau de jeu ;
- affichage des prochaines tuiles disponibles ;
- affichage des informations du joueur actif ;
- saisie sécurisée des actions et des coordonnées ;
- rendu des tuiles et des territoires à l'aide de couleurs ANSI.

### Gestion des erreurs

L'application gère différents cas particuliers :

- fichiers de tuiles manquants ou invalides ;
- saisies utilisateur incorrectes ;
- tentatives de placement non conformes aux règles ;
- impossibilité de jouer une tuile ;
- gestion des limites de la grille et des collisions.

### Technologies utilisées

- C++23
- Programmation orientée objet
- CMake
- Interface en ligne de commande (CLI)
- ANSI Escape Codes pour les couleurs
- Structures de données dynamiques et algorithmes de recherche sur grille