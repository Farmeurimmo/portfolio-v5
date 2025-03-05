---
id: 15-04-2024-dev-blog-2-build-a-skyblock-plugin
title: "Build a Skyblock Plugin (part 2): Island System"
excerpt: "This article delves into the Skyblock plugin's island system, focusing on cross-server compatibility, island distribution, and data management."
coverImage: "https://cdn.farmeurimmo.fr/img/blog/15-04-2024-dev-blog-2-build-a-skyblock-plugin.jpeg"
date: "2024-04-15T11:28:00.000Z"
tags:
  - Minecraft
  - Spigot
  - Plugin Development
  - Skyblock
author:
  name: "Farmeurimmo"
  picture: "https://cdn.farmeurimmo.fr/img/logo.png"
---

# Dev Blog #2: Build a Skyblock Plugin: Island System

In the last article, we have created the basic structure of our plugin.  
In this article, we will create the island system that is the core of the Skyblock plugin.

## Considerations / Requirements

For the cross-server support, I choose to use a cache system. I will use Redis for now with the Jedis client.  
The cache system will permit reducing the number of requests to the database, share data between servers, improve the
performance of the plugin, and allow using a message broker like Redis Pub/Sub for cross-server communication.

Also, I will use [Advanced Slimeworldmanager](https://www.spigotmc.org/resources/advanced-slimeworldmanager.87209/) for
world management. This plugin will allow creating, managing, and storing islands in the MySQL database.

## Island World System

Thanks to Advanced Slimeworldmanager, we can easily set up the island system.  
We just need to create a generic island world, save it in the database as read-only, and then clone it when a player
creates an island.

With this approach, we can have multiple types of islands, such as desert or jungle islands, without struggling with
FAWE (FastAsyncWorldEdit) or the WorldEdit API, which is not very easy to use. I have already created a Skyblock plugin
with this method and got accustomed to it.

Another benefit of ASWM (Advanced Slimeworldmanager) is that we can store our worlds in the database. This is very
useful for cross-server support.  
With its API, we can easily load, clone, save, and unload worlds like a normal world but much faster since it was
designed for small worlds.

I decided to name my worlds "islands_" followed by the UUID of the island. A clear name that is unique and easy to find
in the database.

The downside of ASWM is that it doesn't allow storing huge worlds like a survival world by default, as it wasn't
designed for that.  
However, for small worlds like islands, it's perfect. Also, MySQL servers by default don't allow storing huge blobs (
16MB by default), but we can change that in the configuration.  
For example, an island world with dimensions 250x250x320 has little chance of exceeding 16MB (though it's possible).

## Island Cross Server System

First, each island server sends a Pub/Sub message every 3 to 5 seconds. This allows the plugin to monitor the server
load.  
Then, on all servers, the plugin receives the message and stores it locally. The plugin will choose the server with the
lowest load to create the island.  
This approach allows distributing the load of islands across all servers and easily adding or removing servers.

Once a server is selected, it will send a Pub/Sub message to the chosen server to create or load the island. When
loaded, the remote server sends a confirmation message to the selected server, indicating the island is loaded, and the
player can join.

The next step is to implement a similar system for teleportation. We send the player to another server, and at the same
time, we send a Pub/Sub message to the server to teleport the player to the island or elsewhere.

## Island Functionalities

As you may know, you can invite, kick, ban, expel, promote, demote, etc., players on your island in any Skyblock plugin.

I implemented all these functionalities in my plugin. BUT, there's a small constraint: the player must be on the server
where the island is loaded to perform these actions (other servers have read-only data). This is to prevent data
conflicts.

I could have implemented it cross-server, but it would require a very large Pub/Sub system, making it very complex. I
opted to keep it simple and efficient.

So, when on the server where the island is loaded, you can perform all actions on your island. Then, a Pub/Sub message
tells the other servers to update the island data (which is read-only).

For example, if you change a player's rank, the other servers will know about it in under 3 seconds.

This leads to the issue of cooldowns. Imagine if players spam commands to change the rank of a player.  
To address this, I implemented a cooldown system and a queue system. For example, if a player changes another player's
rank, the plugin will wait a bit before sending the Pub/Sub message to allow for other changes. But critical changes (
like money, kick) are sent immediately, overriding whatever is in the queue.

With cross-server systems, we can encounter many problems like this, so we need to be very careful. You can easily make
mistakes without realizing it.

## Conclusion

I’ve discussed the main concepts of the island system. I won’t go into the code details here because for complex systems
like this, it’s better to first understand the overall structure before diving into the code. If you’re interested in
the code, I can write a more detailed article about it—just reach out to me via Discord (Farmeurimmo), contact form, or
email.

Next time, I’ll cover the Inventory Sync System for cross-server support.
