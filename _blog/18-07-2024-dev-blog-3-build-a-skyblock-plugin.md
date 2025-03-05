---
id: 18-07-2024-dev-blog-3-build-a-skyblock-plugin
title: "Build a Skyblock Plugin (part 3): Inventory Sync System"
excerpt: "This article explores the Skyblock plugin's inventory synchronization system, detailing how player inventories are managed across servers."
coverImage: "https://cdn.farmeurimmo.fr/img/blog/18-07-2024-dev-blog-3-build-a-skyblock-plugin.jpeg"
date: "2024-07-18T11:00:00.000Z"
tags:
  - Minecraft
  - Spigot
  - Plugin Development
  - Skyblock
author:
  name: "Farmeurimmo"
  picture: "https://cdn.farmeurimmo.fr/img/logo.png"
---

# Dev Blog #3: Build a Skyblock Plugin (part 3): Inventory Sync System

In the last article, we talked about the island system. In this article, we will create the inventory sync system that
will permit to synchronize the inventory of the player between the servers.

## Considerations / Requirements

- Should be fast, resilient and reliable
- Optimized for performance
- Should be able to handle a large number of players
- Should be compatible with ItemAdder items
- The inventories should be stored on mysql for persistent storage and on redis for caching

## Inventory Sync System

There are many ways to synchronize the inventory of the player between the servers. The most common way is to use a
class utility that will handle the convert the item into json and store it in the database.

I could also use the ItemStack.serialize() method that will convert the item into a json map and store it in the
database.

All of that is not compatible with item adder items. Item adder items are items that have a custom model data and a
custom texture. They have a special thing inside that can't be serialized easily.

So I decided to go for a Base64 serialization. This will permit to store the item in a string format that can be
converted back to an item. This is compatible with item adder items.

**Disadvantages:**

- Generate huge strings
- Not human readable

**Advantages:**

- Compatible with item adder items
- Fast to serialize and deserialize
- No need to make a utility class with 500 if or getOrDefault

## Performance

To improve the performance, I will use a cache system: Redis for now with Jedis client.

When a player joins the server, the plugin will check if the player has an inventory in the cache. If not, it will
load the inventory from the database and store it in the cache.

On join, the thing that takes the most time is going back to the main server thread to ensure thread safety.
I tried full async, it was working but unsure about the thread safety. Nothing on the documentation about that.

Just in case, I go back to the main thread to apply inventory changes.
This causes between 10ms to 100ms of delay before the inventory is loaded.

How fast can it load an inventory? I did with a full inventory of random items and it took between 15ms to 50ms.
This is acceptable for me. I don't want to go below 10ms because it's not necessary and would lead to more complex
code.

## Experience, health, food and more

I decided to store everything in a json for the cache and in a table for the database.

To get experience (total experience the player has), I will use the calculateTotalExperiencePoints() method.
For the health and food, I will use the getHealth(), getFoodLevel(), getSaturation() methods.

I also have some custom stats that could be added in the future like current mana left, etc.

## Conclusion

We talked about the inventory sync system.
If you're interested in the code, I can make a more detailed article about it, just send me a
message on discord (Farmeurimmo), via the contact form or by email.

Next time, I will talk about the Cross Server auction system.