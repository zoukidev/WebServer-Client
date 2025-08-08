# WebServer Client

Un micro site statique développé en JavaScript avec Vite, React, Redux et TailwindCSS, conçu pour être simple, léger et facilement extensible.

## Serveur associé

- [C# WebServer](https://github.com/zoukidev/WebServer)

## Prérequis

- [Node.js](https://nodejs.org/) (version 18 ou supérieure recommandée)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Un serveur API compatible (voir le projet serveur ci-dessus)

## Installation

Clone le dépôt puis installe les dépendances :

```sh
git clone https://github.com/zoukidev/WebServer-client.git
cd WebServer-client
npm install
```

## Configuration

Crée un fichier `.env` à la racine du projet (déjà présent par défaut) et configure l’URL de l’API :

```
VITE_API_ENDPOINT=http://localhost:5067
```

Adapte l’URL selon l’adresse de ton serveur.

## Lancement du projet

Pour démarrer le serveur de développement :

```sh
npm run dev
```

Pour construire le projet en production :

```sh
npm run build
```


## Structure du projet

```
.
├── public/                # Fichiers statiques
├── src/
│   ├── assets/            # Images et ressources
│   ├── components/        # Composants React réutilisables
│   ├── pages/             # Pages principales de l’application
│   ├── redux/             # Actions et reducers Redux
│   ├── services/          # Services pour les appels API
│   ├── store.js           # Configuration du store Redux
│   ├── routes.jsx         # Définition des routes
│   └── main.jsx           # Point d’entrée principal
├── .env                   # Variables d’environnement
├── package.json           # Dépendances et scripts
└── ...
```

## Technologies utilisées

<img width="64" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
<img width="64" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original-wordmark.svg" />
<img width="64" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" />
<img width="64" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
<img width="128" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg" />

- **React** : UI réactive et composants modulaires
- **Redux Toolkit** : gestion d’état centralisée
- **React Router** : navigation côté client
- **Vite** : bundler rapide pour le développement moderne
- **TailwindCSS** : framework CSS utilitaire

## Fonctionnalités

- Authentification (login, inscription, profil)
- Gestion des utilisateurs
- Navigation protégée selon l’état de connexion
- UI responsive et moderne

---