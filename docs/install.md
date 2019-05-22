> Ce document explique les prérequis nécessaire, la structure et le processus d'installation pour pouvoir tester Rtour en local
>





## Prérequis 

Pour pouvoir installer le projet sur mon environnement, vous devez avoir au minimum avoir installé :

- [node](https://nodejs.org/en/) (serveur)
- [npm](https://www.npmjs.com/get-npm) (gestionnaire de paquets)
- [expo](https://docs.expo.io/versions/latest/workflow/expo-cli/) (commande qui lance le projet) 



#### Utiliser l'application

Pour utiliser l'application sur votre machine, il faut que vous ayez : 

-  un téléphone android. Si vous souhaitez emuler l'application par câble, il vous faudra débloquer le mode [développeur](https://www.androidpit.fr/comment-activer-options-developpeurs-android). Sinon,  vous pouvez télécharger l'application [expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en) pour compiler RTour sur votre device via l'application expo directement.
- un émulateur simulant un téléphone sur votre ordinateur
  - pour émuler un téléphone android, il faudra que vous installiez [android studio](https://developer.android.com/studio) et les sdk nécessaire.	
  - pour émuler un iphone (mac uniquement), il faudra [xcode](https://developer.apple.com/xcode/) pour pouvoir utiliser le logiciel simulator fournit avec.



#### Serveur en local

Si vous souhaitez utiliser le serveur en local, il faudra créer la base de donnée (mongo). Vous pouvez installer mongo en suivant ce [tutoriel](https://treehouse.github.io/installation-guides/mac/mongo-mac.html). 

Une fois l'installation terminée, ouvrez un terminal et tapez la commande ci-dessous : 

`mongod`

Elle permet au [deamon](https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/) (processus mongo permettant de communiquer avec le gestionnaire de bases) de fonctionner.

Pour créer la base de donnée, et visionner les différentes collections, je vous conseille d'utiliser le logiciel [mongoDB Compass](https://www.mongodb.com/products/compass).

#### 

##### Tutoriel mongoDB Compass

1 - Ouvrir le logiciel et clicker sur connect

![compass-launcher](https://hubm.github.io/RTour/assets/compass-launcher.png)



2 - Clicker sur le bouton *create database* et mettre *rtour* comme database name, puis valider

![compass-create-db](https://hubm.github.io/RTour/assets/compass-create-db.png)



3 - It's OK ! 



## Structure 

Le projet est composé de deux dossiers principaux : 

- **r-api**

  Il s'agit de la partie serveur de l'application. Bien que cette partie soit hébergée sur un serveur distant (raspberry pi), il est possible de faire tourner l'application en local.

  - **api.js** : contient les routes du serveur, et qui les met en relation avec les fonction des controlleurs associés.
  - **app.js** : initialise le serveur express express et  utilise l'ensemble des composants nécessaire à le faire tourner
  - **database.js** : contient une fonction permettant la connexion à la base de donnée
  - **index.js** : point d'entrée de la partie serveur, script éxécuter par la commande npm lorsqu'on lance le serveur
  - **controllers/** : dossier qui contient les controllers qui  : 
    - manipulent les données qui sont envoyés au serveur
    - requêtent la base mongo
    - renvoient des réponses/données à l'application

  - **services/** : dossier qui contient des fonctions indépendantes pouvant être appeler dans les controllers.
  - **settings/index.js** : contient la chaîne de connexion mongo pour la base de donnée

- **r-app**

  Il s'agit du dcode de l'application react native, qui contient tout les éléments nécessaire à la construire et la faire fonctionner.

  - **components/** : dossier qui contient l'ensemble des composants permettant de créer l'interface de l'application
    - **helpers/** : ensemble des composants, fonctions et styles réutilisable dans les templates 
    - **template/** : ensemble des modules/views de l'application respectant ce schéma :
      - **index.tsx** : fichier contenant le code jsx du module 
      - **_style.tsx** : fichier de style propre au composant
      - **_api.tsx** : fichier contenant les appels aux routes du serveur (réalisé sous forme de promesse javascript)
      - **_components** (facultatif) : dossier contenant des sous-composants appelés dans le module.
  
  - **router/index.tsx** : contient les routes utilisées par l'application pour pouvoir naviguer entre les views.
  - **services/** : dossier qui contient des fonctions indépendantes pouvant être appeler dans la logique des composants si nécessaire. 
  
  - **router/** : dossier contient le store principal et les sous-stores nécessaire pour pouvoir communiquer l'état de l'application entre les différents composants qui en ont besoin.



## Installation



#### Installer le serveur

- Aller dans **r-api** et lancer la commande `npm install`



##### Utiliser un serveur local

- Aller dans **r-app** et créer le dossiers **settings/** contenant un fichier **index.js** :

  ```module.exports = {
  module.exports = {
    apiKey: "AIzaSyCiHryd9UzwHp3gjCz-_RvKl3Aj9vbpaY8",
    apiUrl: "http:/votre-ip-local:3000/api/v1"
  }
  ```



##### Utiliser le serveur hébergé

- Aller dans **r-app** et créer le dossiers **settings/** contenant un fichier **index.js** :

  ```module.exports = {
  module.exports = {
    apiKey: "AIzaSyCiHryd9UzwHp3gjCz-_RvKl3Aj9vbpaY8",
    apiUrl: "http:/rtour.onthewifi.com/api/v1"
  }
  ```



- Une fois l'installation terminée, lancer la commande `npm start` pour lancer le serveur





#### Installer l'application

- Aller dans r-app et lancer la commande `npm install`

- Une fois l'installation terminée, lancer la commande `npm start`, celle-ci va lancer ouvrir une fenêtre dans votre navigateur par défaut, et commencer à construire le "metro bundler". Il faut attendre qu'il soit installer et qu'un QR Code apparaisse  (voir image).

  

  ![expo-browser-init](https://hubm.github.io/RTour/assets/expo-browser-init.png)

  

- Lorsque le chargement est finit, vous êtes prêt à lancer l'application. En fonction de votre configuration choisie (émulateur ou device), vous pouvez clicker sur les boutons correspondants: 

  - **device** : (scanner le QR Code dans l'application **Expo** ou clicker sur run on Android device/emulator)
  - **emulateur** : clicker sur run on Android device/emulator ou run on iOs simulator

  Une barre de chargment devrait apparaître le temps du build de votre application. Attendez le temps nécessaire et vous pourrez utiliser RTour ! 😉