---
title: "Reaper Sanction"
date: "2025-12-04"
excerpt: "Reaper Sanction est un plugin Minecraft qui intègre un système de sanction et des GUIs personnalisables pour punir les joueurs d'un serveur. Les GUIs sont configurables et les sanctions sont personnalisables."
tags: [ "Spigot", "Java", "Minecraft", "Plugin" ]
coverImage: "https://cdn.farmeurimmo.fr/img/projects/89580.png"
---

# ReaperSanction, plugin de sanction via des GUIs modifiables

ReaperSanction est un plugin Minecraft fournissant un système de sanction complet avec des GUIs personnalisables pour
une gestion efficace des joueurs.

## Bons points

- Plugin de sanction orienté GUI pour les serveurs Java Minecraft
- Compatible avec Spigot, Paper, BungeeCord, Velocity
- De la 1.8 aux dernières versions du jeu.
- Supporte MYSQL, YAML
- Messages modifiables
- Sanctions personnalisables
- GUIs personnalisables

## Liens

- [Page spigot](https://www.spigotmc.org/resources/reapersanction.89580/)
- [Page GitHub](https://github.com/Farmeurimmo/ReaperSanction)
- [Serveur de support](https://discord.gg/8ZfTt3v3XJ)

## Le plugin en quelques images

<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:flex-start">
  <img src="https://cdn.farmeurimmo.fr/img/projects/rs2.png" alt="GUI mute" style="width:220px;height:auto;display:block" loading="lazy" />
  <img src="https://cdn.farmeurimmo.fr/img/projects/rs3.png" alt="Ban screen" style="width:220px;height:auto;display:block" loading="lazy" />
  <img src="https://cdn.farmeurimmo.fr/img/projects/rs4.png" alt="Sanctions history" style="width:220px;height:auto;display:block" loading="lazy" />
  <img src="https://cdn.farmeurimmo.fr/img/projects/rs1.png" alt="Menu config" style="width:220px;height:auto;display:block" loading="lazy" />
</div>

## En développement

- Meilleur système de rapport (récupération, vues, etc.)
- Refonte du vanish
- API pour les développeurs
- Mod staff

## Wiki

### Installation

1. Téléchargez la dernière version du plugin
2. Placez le fichier dans les dossiers plugins de vos serveurs
3. Redémarrez les serveurs
4. Configurez le plugin via les fichiers de configuration si nécessaire
5. Attention, les guis doivent être configurés sur les serveurs spigot.

### Commandes

() = optionnel, [] = requis

| Commande | Utilisation                                                    | Permission              | Description                                                                                                 |
|----------|----------------------------------------------------------------|-------------------------|-------------------------------------------------------------------------------------------------------------|
| rs       | /rs [joueur]                                                   | reapersanction.rs       | Ouvre le menu de sanction pour le joueur                                                                    |
| ban      | /ban [joueur] (raison)                                         | reapersanction.ban      | Bannit définitivement un joueur                                                                             |
| tempban  | /tempban [joueur] [temps avec sec/min/hour/day/year] (raison)  | reapersanction.tempban  | Bannit temporairement un joueur                                                                             |
| unban    | /unban [joueur]                                                | reapersanction.unban    | Débannit un joueur                                                                                          |
| kick     | /kick [joueur] (raison)                                        | reapersanction.kick     | Expulse un joueur du serveur                                                                                |
| mute     | /mute [joueur] (raison)                                        | reapersanction.mute     | Rend un joueur muet                                                                                         |
| tempmute | /tempmute [joueur] [temps avec sec/min/hour/day/year] (raison) | reapersanction.tempmute | Rend temporairement muet un joueur                                                                          |
| unmute   | /unmute [joueur]                                               | reapersanction.unmute   | Redonne la parole à un joueur                                                                               |
| banip    | /banip [ip ou joueur] (raison)                                 | reapersanction.banip    | Bannit une IP ou un joueur                                                                                  |
| report   | /report [joueur]                                               | reapersanction.report   | Ouvre le menu de rapport configuré avec vos raisons                                                         |
| history  | /history [joueur]                                              | reapersanction.history  | Ouvre le menu de l'historique des sanctions du joueur                                                       |
| rsadmin  | /rsadmin [rl/reload/infos/migratedb]                           | reapersanction.admin    | Recharge les configs, récupère les informations du plugin, obtient les informations pour migrer vers MYSQL. |
| vanish   | /vanish                                                        | reapersanction.vanish   | Active/Désactive le vanish                                                                                  |

### GUIs personnalisés

Voir ci-dessous la liste des menus personnalisables avec leurs noms exacts dans la config.

#### Comment fonctionnent les fichiers GUIs et messages

La config est lue au démarrage du serveur et lorsque vous utilisez la commande /rsadmin rl. Vous pouvez modifier la
config et utiliser la commande pour la recharger. La config peut ne pas ordonner les GUIs dans le même ordre que vous le
souhaitez. Vous pouvez changer l'ordre des GUIs, cela n'affectera pas le plugin.

#### Emplacement

Le fichier des inventaires se trouve dans : plugins/ReaperSanction/Inventories.yml
Le fichier des messages se trouve dans : plugins/ReaperSanction/Messages.yml

#### Personnalisation des GUIs

```yaml
MAIN: # <-- C'est le gui principal
  name: §4ReaperSanction # <-- Le nom du gui
  size: 27 # <-- La taille du gui (9, 18, 27, 36, 45, 54)
  # Les slots commencent à 0 et se terminent à size - 1,
  # Si vous placez un item dans un slot en dehors de la taille du gui, cela peut provoquer des erreurs
  isFill: true
  # Si isFill est vrai, le gui sera rempli d'une vitre
  # L'option pour personnaliser la vitre sera ajoutée dans le futur
  items: # <-- Les items du gui
    '8': # <-- Le slot de l'item
      type: ANVIL # <-- Le type de l'item
      amount: 1 # <-- La quantité de l'item
      display: §6Ce§cQue§1Vous§bVoulez # <-- Le nom d'affichage de l'item
      lore: # <-- Le lore de l'item
        '0': Salut # <-- La ligne du lore, vous devez commencer à 0, incrémenter de 1 et écrire comme ça
        '1': Lore personnalisé
        '2': Avec des actions personnalisées
      actions: # <-- Les actions de l'item
        '0': EXT->SAY HELLO %player%  # <- Similaire au lore, vous devez commencer à 0, incrémenter de 1
        # Plus d'explications sur comment et ce qui est disponible ci-dessous.
    '16': # Voici un autre item
      type: PAPER
      amount: 1
      display: §cFin
      actions:
        '0': INT->GUI->END->%player%
```

#### Actions

##### Options EXT

Les actions EXT forceront le joueur à exécuter la commande. Par exemple, si nous avons "EXT->SAY HELLO %player%", le
joueur exécutera : "/say HELLO %player%". %player% représente le nom du joueur.

##### Options INT

Les actions INT transmettront des instructions au plugin. Par exemple, si nous avons "INT->TEMPBAN->%player%->7day->
Fly", le plugin bannira temporairement le joueur pour 7 jours pour "Fly".

Les actions INT peuvent avoir des arguments optionnels. Par exemple, nous pouvons supprimer la raison de l'action. Si
nous avons "INT->TEMPBAN->%player%->7day", le plugin bannira temporairement le joueur pour 7 jours avec la raison par
défaut.

##### Options des actions INT

Les options INT sont les actions possibles que le plugin peut effectuer sans exécuter de commande. La liste des actions
possibles est ci-dessous.

| Nom      | Arguments                      | Description                                                                             |
|----------|--------------------------------|-----------------------------------------------------------------------------------------|
| tempban  | ->%PLAYER%->duration(->reason) | Bannit temporairement un joueur                                                         |
| ban      | ->%PLAYER%(->reason)           | Bannit un joueur                                                                        |
| kick     | ->%PLAYER%(->reason)           | Expulse un joueur                                                                       |
| mute     | ->%PLAYER%(->reason)           | Rend un joueur muet                                                                     |
| tempmute | ->%PLAYER%->duration(->reason) | Rend temporairement muet un joueur                                                      |
| unban    | ->%PLAYER%                     | Débannit un joueur                                                                      |
| unmute   | ->%PLAYER%                     | Redonne la parole à un joueur                                                           |
| banip    | ->%PLAYER%(->reason)           | Bannit une IP ou un joueur                                                              |
| unbanip  | ->%PLAYER%                     | Débannit une IP ou un joueur                                                            |
| gui      | ->%GUI%->%PLAYER%              | Ouvre un GUI (Non supporté par l'historique des sanctions, voir GUI_DYN)                |
| gui_dyn  | ->%GUI%->%PLAYER%              | Ouvre un GUI dynamique (Il a été fait pour ouvrir le GUI de l'historique des sanctions) |
| close    | ->%PLAYER%                     | Ferme le GUI                                                                            |
| report   | ->%REASON%->%PLAYER%           | Signale un joueur                                                                       |

