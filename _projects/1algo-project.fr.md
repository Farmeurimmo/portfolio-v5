---
title: "Jeu de stratégie en Python – Reine & Tours"
date: "2025-12-04"
excerpt: "Jeu de stratégie à deux joueurs développé en Python avec Tkinter. Comprend un plateau carré, des règles de mouvement et de capture uniques, et une architecture orientée objet propre."
tags: [ "Python", "Tkinter", "Développement de jeux", "POO" ]
coverImage: "https://cdn.farmeurimmo.fr/img/projects/1algo-project-cover.png"
---

## Mini-projet Python – Jeu de stratégie

Jeu de stratégie à deux joueurs développé en Python à l'aide de l'interface Tkinter. L'objectif est de capturer les
pièces de l'adversaire en fonction de règles spécifiques sur un plateau carré.

### Liens

- [Page GitHub](https://github.com/Farmeurimmo/1ALGO-Project)

**Score obtenu : 90/100**

### En quelques images

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-start">
  <img src="https://cdn.farmeurimmo.fr/img/projects/1algo-project-cover.png" alt="Partie en cours" style="min-width:300px;max-width:40%;height:auto;display:block" loading="lazy" />
  <img src="https://cdn.farmeurimmo.fr/img/projects/1algo-project-home.png" alt="Menu de démarrage de partie" style="min-width:300px;max-width:40%;height:auto;display:block" loading="lazy" />
</div>

### Règles du jeu

- Plateau carré de taille n x n (pair, entre 6 et 12, par défaut 8).
- Chaque joueur a une reine et (n² / 4) - 1 tours.
- La reine se déplace comme aux échecs (orthogonal et diagonal, pas de capture).
- La tour se déplace orthogonalement et peut capturer : si elle et la reine forment une diagonale d'un rectangle, et
  qu'une tour adverse se trouve sur le coin opposé, elle est capturée.
- La reine ne peut pas être capturée.
- Un joueur perd s'il ne lui reste que 2 pièces ou moins (y compris la reine).

### Fonctionnalités

- Sélection de la taille du plateau (6 à 12, pair uniquement)
- Affichage du plateau et des pièces
- Indication du joueur actuel
- Sélection de pièce valide uniquement à la souris
- Mouvement et capture basés sur les règles
- Changement de tour automatique
- Détection de la victoire
- Écran de fin de partie avec résultat et option de redémarrage
- Séparation claire entre la logique et l'interface utilisateur

### Contraintes techniques

- Langue : Python
- Bibliothèque GUI obligatoire : Tkinter
- Architecture orientée objet stricte
- Encapsulation requise
- Aucune autre bibliothèque GUI autorisée
- Le non-respect des contraintes entraîne l'échec du projet

### Bonus

- Affichage des coups possibles
- Sauvegarder/charger l'état du jeu
- Animations visuelles ou sonores
- Jouer contre une IA (stratégie aléatoire ou basique)
