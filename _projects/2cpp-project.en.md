---
title: "C++ Project: Laying Grass"
date: "2025-11-13"
excerpt: "C++ implementation of the strategy game Laying Grass, inspired by The Devil's Plan. A command-line multiplayer game where players expand their territory using differently shaped grass tiles."
tags: [ "C++", "CLI", "Object-Oriented Programming", "Algorithms", "CMake", "Strategy Game" ]
coverImage: "https://cdn.farmeurimmo.fr/img/projects/2cpp-project-cover.png"
---

## Laying Grass

A turn-based strategy game inspired by the "Laying Grass" challenge from the Netflix reality show *The Devil's Plan*.

The objective is to create the largest possible square territory by placing differently shaped grass tiles on a shared
board.

Grade : **94.60**

### Context and Requirements

The project had to be completed by a group of two students within two weeks.

The application had to provide a complete implementation of the game while respecting all the provided rules. A
graphical interface was not required, and a command-line interface (CLI) was considered sufficient.

### Main Features

- Playable with 2 to 9 players.
- Each player chooses a name and a color.
- Automatic generation of a board size of:
    - 20 × 20 cells for 2 to 4 players;
    - 30 × 30 cells for 5 to 9 players.
- Management of 96 different tile shapes in a random order.
- Tile placement with support for rotations and flips.
- Tile exchange coupon system.
- Validation of placement rules:
    - tiles must connect to the player's territory;
    - tiles cannot overlap;
    - tiles cannot touch another player's territory.
- Turn management and nine rounds of gameplay.
- Automatic winner determination based on the size of the largest square territory.

### Bonus System

The board contains several types of special squares distributed randomly:

- Exchange square:
    - grants an additional tile exchange coupon.
- Stone square:
    - allows the player to place a stone on any empty cell;
    - no grass tile can be placed on this position until the stone is removed.
- Robbery square:
    - allows the player to take one tile from another player's territory and add it to their own.

Stone and robbery bonuses must be used immediately after being acquired.

### In one image

![Example of a game with 2 players](https://cdn.farmeurimmo.fr/img/projects/2cpp-project-cover.png)

### Project Structure

The project is organized into several modules:

- `src/` : contains all source files.
- `src/core/` : contains the core game logic and models.
- `src/managers/` : contains the managers responsible for the different systems.
- `src/utils/` : contains utility functions and helpers.
- `tiles/` : contains the tile assets and definitions.
- `build/` : contains the generated build files.
- `CMakeLists.txt` : configuration file used by CMake.

### Main Classes

- `Player` : manages player information and territory.
- `Tile` : represents a grass tile and its shape.
- `Board` : manages the game board and tile placements.
- `TilesManager` : loads, stores, and distributes the available tiles.

### Algorithms and Game Logic

#### Main Game Loop

Each game session follows these steps:

1. Initialize players and the board.
2. Place the starting tiles.
3. Execute nine rounds of gameplay.
4. Manage bonuses and coupons.
5. Calculate the final scores.
6. Determine the winner.

#### Tile Placement

When a player receives a tile:

1. Validate the target position.
2. Verify that the tile is connected to the player's territory.
3. Ensure there is no collision with existing tiles.
4. Place the tile and update the territory.

If the tile cannot be legally placed anywhere on the board, it is discarded and the player skips their turn.

#### Scoring

At the end of the game:

- the size of the largest fully covered square territory is calculated for each player;
- in case of a tie, the total number of occupied cells is used as a tiebreaker.

### Command-Line Interface

The application is entirely based on a CLI:

- rendering of the game board;
- display of upcoming tiles;
- display of the current player's information;
- secure input handling for actions and coordinates;
- colored rendering using ANSI escape codes.

### Error Handling

The application handles several edge cases:

- missing or invalid tile files;
- invalid user inputs;
- illegal tile placements;
- situations where a player cannot place a tile;
- board boundaries and collision detection.

### Technologies Used

- C++23
- Object-Oriented Programming
- CMake
- Command-Line Interface (CLI)
- ANSI Escape Codes
- Dynamic data structures and grid-based search algorithms