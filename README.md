# bot-discord-initialisation

Ce projet est un bot Discord simple construit avec la bibliothèque `discord.js`. Il se connecte à Discord en utilisant un token stocké dans un fichier `.env` et affiche un message dans la console lorsque le bot est prêt.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 16.6.0 ou supérieure)
- [npm](https://www.npmjs.com/get-npm)
- Un compte Discord avec un serveur où vous pouvez ajouter le bot
- Un bot Discord enregistré dans le [portail des développeurs Discord](https://discord.com/developers/applications)

## Installation

1. Clonez ce dépôt sur votre machine locale :

    ```bash
    git clone https://github.com/votre-utilisateur/nom-du-repo.git
    ```

2. Accédez au dossier du projet :

    ```bash
    cd nom-du-repo
    ```

3. Installez les dépendances nécessaires avec npm :

    ```bash
    npm install
    ```

4. Créez un fichier `.env` à la racine du projet et ajoutez-y votre token Discord :

    ```
    DISCORD_TOKEN=your-discord-bot-token
    ```

    Remplacez `your-discord-bot-token` par le token de votre bot Discord.

## Utilisation

Pour lancer le bot, exécutez la commande suivante :

```bash
node index.js
```

Si tout se passe bien, vous verrez un message dans la console indiquant que le bot est connecté :

Connecté en tant que: NomDuBot#1234


## Configuration des Intents

Le bot utilise des [Intents](https://discord.com/developers/docs/topics/gateway#gateway-intents) pour spécifier les événements qu'il souhaite recevoir. Dans ce projet, les intents sont configurés en utilisant `IntentsBitField`. Le nombre `53608447` correspond à une combinaison spécifique d'intents activés. Vous pouvez ajuster ces intents en fonction des fonctionnalités de votre bot.

## Déploiement

Pour déployer ce bot sur une plateforme d'hébergement (comme Heroku, Vercel, etc.), assurez-vous de définir la variable d'environnement `DISCORD_TOKEN` dans les paramètres de votre application.

## Contribuer

Les contributions sont les bienvenues ! Si vous avez des suggestions ou des améliorations, n'hésitez pas à soumettre une pull request.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
