---
id: 27-08-2024-dev-blog-4-build-a-skyblock-plugin
title: "Build a Skyblock Plugin (part 4): Cross server auctions"
excerpt: "This article explores the Skyblock plugin's auction system, detailing how players can sell and buy items across servers."
coverImage: "https://cdn.farmeurimmo.fr/img/blog/27-08-2024-dev-blog-4-build-a-skyblock-plugin.jpeg"
date: "2024-08-27T11:00:00.000Z"
tags:
  - Minecraft
  - Spigot
  - Plugin Development
  - Skyblock
author:
  name: "Farmeurimmo"
  picture: "https://cdn.farmeurimmo.fr/img/logo.png"
---

# Dev Blog #4: Build a Skyblock Plugin (part 4): Cross server auctions

In the last article, we talked about the inventory synchronization between the servers.
In this article, we will talk about the cross server auctions.

## Considerations / Requirements

- Once an item is sold, if you try to buy 2ms after it, you won't be able to
- Transactional system
- Should be compatible with ItemAdder items
- Present on all servers

## Cross server auctions

I already done an auction system in the past. So I knew how to make the inventory system fast and reliable.
The only challenge was to handle the cross server part.

What happens if a player tries to buy an item on server 1 and the item is on server 2?
What happens if a player buy an item on server 1 and another one on server 2 while the seller is removing the item?

For storage, I used Redis for caching and MySQL for persistent storage. I reused my class of the Inventory Sync System
to store the items in the database.

### The solution

As always, my solution is to use a pubs/subs system with Redis.

When a player puts an item on the auction house, the plugin will send a message to the Redis channel to notify all the
servers that an item has been put on the auction house.
When a player buys an item, the plugin will send a message to the Redis channel with the current timestamp and the
item id.

With my transactional system, I can ensure that the item is not bought twice because the timestamp is unique and if
the timestamp of another attempt is lower than the current one, the transaction will be canceled for the highest
timestamp.
The player with the lower timestamp always wins :D.

Plus there is a small delay to let the transaction be processed.

Then we just have to notify all the servers that the item has been bought and remove it from the auction house.

### I know I didn't talk about player money..

Users are not always loaded on the server so it is a little bit more complex than the auction system itself.

If the player is on the server when the transaction happens, no problems, but if the player is on another server,
we need to send a pubsub to that server to modify the money of the player.

If offline, we need to load the user from the database, modify the money and save it back.

## Speed ?

Of course, there is some delay between the click and the item appearing in the inventory.
But in under 5s you can have the item in your inventory.

## Conclusion

Nothing too complicated, when I first thought about it, I was like "It is going to be tough, but it is doable".
But in the end, it was pretty easy to do.

If you're interested in the code, I can make a more detailed article about it, just send me a message on discord (
Farmeurimmo), via the contact form or by email.

Next time, I will maybe talk about cross server teleportation with coordinates and fast server switching.
(For example, you want to go to the pvp warp or you got tpa to another server)