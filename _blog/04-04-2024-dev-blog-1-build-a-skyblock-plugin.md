---
id: 04-04-2024-dev-blog-1-build-a-skyblock-plugin
title: "Build a Skyblock Plugin (Part 1): Introduction"
excerpt: "This article outlines the development of a Minecraft Skyblock plugin for Spigot servers, starting with project goals and context."
coverImage: "https://cdn.farmeurimmo.fr/img/blog/04-04-2024-dev-blog-1-build-a-skyblock-plugin.jpeg"
date: "2024-04-04T21:00:00.000Z"
author:
  name: "Farmeurimmo"
  picture: "https://cdn.farmeurimmo.fr/img/logo.png"
---

# Dev Blog #1: Build a Minecraft Skyblock Plugin

## What type of plugin am I building?

I'm building a Minecraft 1.20.4 Skyblock plugin. Skyblock is a popular game mode in Minecraft where players start on a
small island in the sky and have to expand it by gathering resources, building structures, and completing challenges.
The goal is to create a thriving island and become the richest player on the server.

That's what everyone wants, but I prefer something a little bit more like Hypixel’s Skyblock—not too complex but with
interesting features and mechanics.

## Considerations / Requirements

This plugin is for **Edmine Network**, a Minecraft server that I'm working on. Here are some considerations and
requirements for the plugin (some features are missing):

- Players should be able to create and manage their own islands.
- Islands should have a border that prevents players from falling off.
- Players should be able to invite others to their islands.
- Players should be able to visit other players' islands and interact with them.
- Islands should have a shop where players can buy and sell items.
- Players should be able to compete in challenges and earn rewards.
- Implements dungeons, custom items, and custom mobs to enhance the experience.
- Players should be able to level up their islands and unlock new features (size, generator, etc.).
- Players should be able to edit island ranks permissions via a GUI.

**Also, I need a Skyblock that can be played by at least 50 players at the same time.**

## Time to think about the architecture

Before I start coding, I need to think about the architecture of the plugin. Here are some questions I need to answer (I
didn't put all the questions):

- How will a Minecraft server in 1.20.4 handle 50 players at the same time?
- How will I store island data? In a database? In files?
- If I have custom mobs and a lot of features, how will I handle performance?
- How will I handle dungeons?

## What architecture did I choose?

I decided to use a **cross-server architecture**. For example, if I have 50 players on the server, I will have:

- **1 server** for the Skyblock spawn (only one because spawns are not that heavy).
- **3 servers** for the islands (because islands are resource-heavy).
- **2 servers** for dungeons (since combat may be heavy).

I also need **an inventory sync system**. If a player moves from **Island Server 1** to **Island Server 2**, their
inventory should remain the same. This is a bit complex but doable.

For dungeons, I haven't made final decisions yet.

For storing island data, I will use a **database** to store worlds and other information. I plan to use an updated
version of **SlimeWorldManager**, a plugin originally developed by Hypixel for 1.8 but maintained by the community for
newer versions.

🔗 [Advanced SlimeWorldManager](https://www.spigotmc.org/resources/advanced-slimeworldmanager.87209/)

For the database, I'll use **MySQL** for everything, along with a **Redis** server for caching. However, given Redis’
recent license changes, I might opt for an open-source fork.

## What about performance?

For performance optimization:

- I will **cache** islands, players, dungeons, mobs, and items.
- I will rely on **async tasks** to handle heavy operations.
- Every database/cache query will be **async**, using `CompletableFuture` and a callback system to ensure results are
  processed on the main thread.

## The End

That's it for this blog post. I've started coding the plugin, and I'll post the next blog update when I have something
substantial to show.

**Stay tuned!**
