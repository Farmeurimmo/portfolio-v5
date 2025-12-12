---
title: "Reaper Sanction"
date: "2025-12-04"
excerpt: "Reaper Sanction is a Minecraft plugin that integrates a sanction system and customizable GUIs for punishing server players. The GUIs are configurable and the sanctions are customizable."
tags: [ "Spigot", "Java", "Minecraft", "Plugin" ]
coverImage: "https://cdn.farmeurimmo.fr/img/projects/89580.png"
---

# ReaperSanction — sanction plugin via editable GUIs

ReaperSanction is a Minecraft plugin providing a full-featured sanction system with customizable GUIs for
efficient player management.

## Good points

- GUI-oriented sanction plugin for Java Minecraft servers
- Compatible with Spigot, Paper, BungeeCord, Velocity
- From 1.8 to the latest game versions
- Supports MYSQL, YAML
- Editable messages
- Customizable sanctions
- Customizable GUIs

## Links

- [Spigot Page](https://www.spigotmc.org/resources/reapersanction.89580/)
- [GitHub Page](https://github.com/Farmeurimmo/ReaperSanction)
- [Support Server](https://discord.gg/8ZfTt3v3XJ)

## The plugin in a few pictures

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-start">
  <img src="https://cdn.farmeurimmo.fr/img/projects/rs2.png" alt="GUI mute" style="width:220px;height:auto;display:block" loading="lazy" />
  <img src="https://cdn.farmeurimmo.fr/img/projects/rs3.png" alt="Ban screen" style="width:220px;height:auto;display:block" loading="lazy" />
  <img src="https://cdn.farmeurimmo.fr/img/projects/rs4.png" alt="Sanctions history" style="width:220px;height:auto;display:block" loading="lazy" />
  <img src="https://cdn.farmeurimmo.fr/img/projects/rs1.png" alt="Menu config" style="width:220px;height:auto;display:block" loading="lazy" />
</div>

## In development

- Better report system (recovery, views, etc.)
- Vanish rework
- API for developers
- Staff mod

## Wiki

### Installation

1. Download the latest version of the plugin
2. Place the file in the plugins folder of your servers
3. Restart the servers
4. Configure the plugin via the configuration files if needed
5. Be careful: the GUIs must be configured on Spigot servers

### Commands

() = optional, [] = required

| Command  | Usage                                                         | Permission              | Description                                                                          |
|----------|---------------------------------------------------------------|-------------------------|--------------------------------------------------------------------------------------|
| rs       | /rs [player]                                                  | reapersanction.rs       | Opens the sanction menu for the player                                               |
| ban      | /ban [player] (reason)                                        | reapersanction.ban      | Permanently bans a player                                                            |
| tempban  | /tempban [player] [time with sec/min/hour/day/year] (reason)  | reapersanction.tempban  | Temporarily bans a player                                                            |
| unban    | /unban [player]                                               | reapersanction.unban    | Unbans a player                                                                      |
| kick     | /kick [player] (reason)                                       | reapersanction.kick     | Kicks a player from the server                                                       |
| mute     | /mute [player] (reason)                                       | reapersanction.mute     | Mutes a player                                                                       |
| tempmute | /tempmute [player] [time with sec/min/hour/day/year] (reason) | reapersanction.tempmute | Temporarily mutes a player                                                           |
| unmute   | /unmute [player]                                              | reapersanction.unmute   | Unmutes a player                                                                     |
| banip    | /banip [ip or player] (reason)                                | reapersanction.banip    | Bans an IP or a player                                                               |
| report   | /report [player]                                              | reapersanction.report   | Opens the report menu configured with your reasons                                   |
| history  | /history [player]                                             | reapersanction.history  | Opens the player's sanction history menu                                             |
| rsadmin  | /rsadmin [rl/reload/infos/migratedb]                          | reapersanction.admin    | Reloads configs, retrieves plugin information, gets information to migrate to MYSQL. |
| vanish   | /vanish                                                       | reapersanction.vanish   | Activates/Deactivates vanish                                                         |

### Custom GUIs

See below the list of customizable menus with their exact names in the config.

#### How the GUIs and messages files work

The config is read on server startup and when you use the /rsadmin rl command. You can edit the
config and use the command to reload it. The config may not order the GUIs in the same order you want; you can change
the order of the GUIs, this will not affect the plugin.

#### Location

The inventories file is located at: plugins/ReaperSanction/Inventories.yml
The messages file is located at: plugins/ReaperSanction/Messages.yml

#### GUI Customization

```yaml
MAIN: # <-- This is the main gui
  name: §4ReaperSanction # <-- The name of the gui
  size: 27 # <-- The size of the gui (9, 18, 27, 36, 45, 54)
  # Slots start at 0 and end at size - 1,
  # If you place an item in a slot outside of the gui size, it can cause errors
  isFill: true
  # If isFill is true, the gui will be filled with a glass pane
  # The option to customize the glass pane will be added in the future
  items: # <-- The items of the gui
    '8': # <-- The slot of the item
      type: ANVIL # <-- The type of the item
      amount: 1 # <-- The amount of the item
      display: §6What§cEver§1You§bWant # <-- The display name of the item
      lore: # <-- The lore of the item
        '0': Hi # <-- The line of the lore, you have to start at 0, incrementing by 1 and write like it is
        '1': Custom lore
        '2': With custom actions
      actions: # <-- The actions of the item
        '0': EXT->SAY HELLO %player%  # <- Similar to lore, you have to start at 0, incrementing by 1
        # More explanation about how and what is available below.
    '16': # Here is another item
      type: PAPER
      amount: 1
      display: §cEnd
      actions:
        '0': INT->GUI->END->%player%
```

#### Actions

##### EXT Options

EXT actions will force the player to execute the command. For example, if we have "EXT->SAY HELLO %player%",
the player will execute: "/say HELLO %player%". %player% represents the player's name.

##### INT Options

INT actions will pass instructions to the plugin. For example, if we have "INT->TEMPBAN->%player%->7day->
Fly", the plugin will temporarily ban the player for 7 days for "Fly".

INT actions can have optional arguments. For example, we can remove the reason for the action. If we have
"INT->TEMPBAN->%player%->7day", the plugin will temporarily ban the player for 7 days with the default reason.

##### INT actions options

The INT options are the possible actions the plugin can perform without executing a command. The list of possible
actions is below.

| Name     | Arguments                      | Description                                                        |
|----------|--------------------------------|--------------------------------------------------------------------|
| tempban  | ->%PLAYER%->duration(->reason) | Temporarily bans a player                                          |
| ban      | ->%PLAYER%(->reason)           | Bans a player                                                      |
| kick     | ->%PLAYER%(->reason)           | Kicks a player                                                     |
| mute     | ->%PLAYER%(->reason)           | Mutes a player                                                     |
| tempmute | ->%PLAYER%->duration(->reason) | Temporarily mutes a player                                         |
| unban    | ->%PLAYER%                     | Unbans a player                                                    |
| unmute   | ->%PLAYER%                     | Unmutes a player                                                   |
| banip    | ->%PLAYER%(->reason)           | Bans an IP or a player                                             |
| unbanip  | ->%PLAYER%                     | Unbans an IP or a player                                           |
| gui      | ->%GUI%->%PLAYER%              | Opens a GUI (Not supported by sanction history, see GUI_DYN)       |
| gui_dyn  | ->%GUI%->%PLAYER%              | Opens a dynamic GUI (It was made to open the sanction history GUI) |
| close    | ->%PLAYER%                     | Closes the GUI                                                     |
| report   | ->%REASON%->%PLAYER%           | Reports a player                                                   |

