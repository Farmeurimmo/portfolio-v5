---
title: "Python Strategy Game – Queen & Rooks"
date: "2025-12-04"
excerpt: "Two-player strategy game developed in Python with Tkinter. Includes a square board, unique movement and capture rules, and a clean object-oriented architecture."
tags: ["Python", "Tkinter", "Game Development", "OOP"]
coverImage: "https://cdn.farmeurimmo.fr/img/projects/1algo-project-cover.png"
---

## Python Mini-Project – Strategy Game

Two-player strategy game developed in Python using the Tkinter interface. The goal is to capture opponent pieces based
on specific rules on a square board.

### Links

- [GitHub Page](https://github.com/Farmeurimmo/1ALGO-Project)

**Score obtained: 90/100**

### In a few images

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-start">
  <img src="https://cdn.farmeurimmo.fr/img/projects/1algo-project-cover.png" alt="Game in progress" style="min-width:300px;max-width:40%;height:auto;display:block" loading="lazy" />
  <img src="https://cdn.farmeurimmo.fr/img/projects/1algo-project-home.png" alt="Game start menu" style="min-width:300px;max-width:40%;height:auto;display:block" loading="lazy" />
</div>

### Game Rules

- Square board of size n x n (even, between 6 and 12, default 8).
- Each player has one queen and (n² / 4) - 1 rooks.
- Queen moves like in chess (orthogonal and diagonal, no capture).
- Rook moves orthogonally and can capture: if it and the queen form a diagonal of a rectangle, and an opponent's rook is
  on the opposite corner, it is captured.
- The queen cannot be captured.
- A player loses if only 2 or fewer pieces remain (including the queen).

### Features

- Board size selection (6 to 12, even only)
- Display of the board and pieces
- Indication of the current player
- Mouse-based valid piece selection only
- Movement and capture based on rules
- Automatic turn switching
- Victory detection
- End game screen with result and restart option
- Clear separation between logic and UI

### Technical Constraints

- Language: Python
- Mandatory GUI library: Tkinter
- Strict object-oriented architecture
- Encapsulation required
- No other GUI libraries allowed
- Failure to follow constraints results in project failure

### Bonus

- Display of possible moves
- Save/load game state
- Visual or sound animations
- Play against AI (random or basic strategy)
