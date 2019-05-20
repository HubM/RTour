![logo](/Users/hub/Documents/hub/rtour/Code/docs/assets/logo.svg)



> RTour est une application consacrée aux riders. Elle leur permet de d'organiser un
> roadtrip avec d'autres utilisateurs. L'objectif est de favoriser l'échange et l'entraide, et de
> permettre de profiter ensemble de leur voyage. Mis en relation avec un rider local qui va
> leur faire découvrir les spots de sa ville, ils vont pouvoir partager des sessions et des bons
> moments autour de leur passion commune.



## Constat 

L'idée de réaliser une application dédiée spécifiquement à la mise en relations entre pratiquants de sport freestyle s'est faite suite à un constat personnel. En effet, pratiquant personnellement le BMX depuis environ 7 ans, j'ai moi-même plusieurs fois été confronté à ces différentes situations :

#### Point de vue de l'utilisateur

- Je m’installe dans une nouvelle ville, et comme beaucoup de personne dans ma situation, je ne connais pas de riders et je ne suis pas encore trop à l’aise avec les spots /ou skateparks de la ville. J'aimerais bien pouvoir rencontrer des riders prêts à me faire découvrir les spots et rouler avec moi.
- J'organise un roadtrip avec des amis, car j'aimerais pouvoir rouler d'autres spots lorsque j'ai quelques jours de vacances. Durant notre voyage, mais nous aimerions bien pouvoir rencontrer les riders locaux et partager avec eux une session sur leur spot local. 
- Je pratique le BMX depuis 5 ans dans ma ville, je roule toujours avec les mêmes personnes et j’aimerais bien rencontrer des nouveaux riders. De nature plutôt sociable et serviable, je suis prêt à aider l'intégration de nouveaux riders et les aider à s'accommoder aux spots de ma ville.
- En tant que rider, je dois entretenir mon équipement qui s'abîme vite au fur et à mesure des sessions. Mais le fait que je suis guide de Rtour me permet également d'obtenir des sponsoring de la part des magasins spécialisés partenaires et de réduire ma facture en terme de matériel.



## Philosophie

Bien que le projet s'inscrit dans un cadre scolaire (ECV Digitial), le projet a pour vocation de répondre à un besoin réel. En effet, le monde du bmx se base énormément sur la notion de "fraternité" où les différents riders partagent la même passion et aiment passer du temps ensemble pour pratiquer leur sport. Et c'est un peu dans cette notion de famille et de partage que j'aimerais créer Rtour. L'aspect financier n'est pas la préoccupation principale, même s'il pourrait être envisagé dans une version future (voir partie ***business model***).



## Fonctionnalités 

Le projet proposé n'étant qu'à l'état de prototype, j'ai imaginé pour une V1 la liste de fonctionnalités suivantes : 

- Possibilité de créer un profile et de se connecter (très basique, un système d'authentification plus élaboré sera à prévoir dans une version ultérieure).

- Possibilité de créer un roadtrip en respectant une configuration minimale d'informations nécessaires.

- Possibilité de voir les roadtrips et de faire une demande d'ajout.

- Possibilité d'accepter ou refuser un rider qui a fait une demande pour rejoindre mon roadtrip.

  

## Choix techniques

### Application

Le périmètre du projet donné par l'ECV s'intéressant principalement au domaine du mobile, plusieurs choix étaient envisageables : 

- Développer une application hybride avec une solution comme React Native pour qu'elle puisse être compilée en Swift/Objective-C (iOS) ou Java (Android). L'avantage est qu'elle sort une application native compilée avec une qualité meilleure que des solutions comme Ionic ou Phonegap. Cependant, compte tenu du fait qu'elle génère une application mobile, elle n'est disponible que sur smartphone.
- Développer une PWA (Progressive Web Application) qui pourra être consultée sur desktop et smartphone. L'intérêt est de pouvoir utiliser certaines parties de l'application en mode offline et d'utiliser le système de notifications push pour interagir avec l'utilisateur. Au niveau du rendu mobile, une icône vient s'installer sur le téléphone de l'utilisateur s'il le souhaite, donnant ainsi l'illusion d'une application mobile.



**Choix :** j'ai décidé de faire une application orientée mobile uniquement, car je voulais pouvoir utiliser des fonctionnalités propres à un usage mobile (invitation de contacts notamment). De plus, réaliser un projet en react native me permet de me former sur une technologie que je ne connaissais pas très bien (react) et de pouvoir me confronter à des problématiques différentes (développement mobile) de celles que je rencontre habituellement (développement 100 % web).



### Serveur

Mon application ayant une gestion de données à réaliser, il me faut un serveur pour pouvoir récupérer les données de ma base de données et les transmettre à l'application. Pour cela, j'ai deux possibilités : 

- Utiliser un système serverless comme Firebase ou AWS. Cette solution très pratique permet de pouvoir simplifier largement le développement puisque le serveur et les données sont automatiquement gérées par le service. Le risque principal est que si notre application nécessite une requête particulière et que ce cas de figure n'est pas possible dans le périmètre d'action du service, il faudra alors trouver une solution compliquée pour pouvoir parvenir à répondre au besoin.
- Créer mon propre serveur et gérer les aller/retours avec la base de données avec mes propres controlleurs. Le problème principal est le temps de développement qui est largement supérieur, mais le résultat est une solution optimisée et construite autour des besoins de l'application.



**Choix :** j'ai décidé de créer mon propre serveur, car je voulais pouvoir avoir la main complète sur l'ensemble des composants qui permettent à RTOUR de fonctionner. Travaillant essentiellement avec Javascript, j'ai utilisé Node.js avec le framework Express pour réaliser le serveur. La base de donnée, quant à elle, a été réalisée en noSQL à l'aide de MongoJS.

 

## Modèle économique

Même si l'objectif n'est pas d'inclure une dimension économique au projet, j'ai tout de même réfléchis à un moyen de financer l'application. Ma réflexion économique et globale s'est faite suite à la réalisation d'un [lean startup canvas](https://medium.com/creative-wallonia-engine/acc%C3%A9l%C3%A9rateur-de-startup-m%C3%A9thode-du-lean-canvas-visualisez-vos-hypoth%C3%A8ses-critiques-d77e5ade3f62). 



![RT-lean-canvas](/Users/hub/Documents/hub/rtour/Code/docs/assets/RT-lean-canvas.jpg)

Cette méthode de travail m'a permis de visualiser les différents aspects de mon concept/application. En simplifiant et formulant les arguments dans chaque case du tableau, on va directement à l'essentiel, et cette vision globale nous permet de réfléchir à un business plan. Mon modèle économique s'axe autour de deux sources de revenus :

- Les dons utilisateurs
- Les partenariats avec des magasins spécialisés



Les utilisateurs auraient donc la possibilité de pouvoir contribuer à la maintenance de l'application, mais ne représente qu'une partie utopique des revenus estimés.

Le véritable moyen de gagner de l'argent pourrait venir des magasins partenaires. En effet, je me suis mis à la place du rider qui, au milieu de son trip, a un problème sur son bmx, et doit changer une pièce en urgence. Il pourrait être intéressant de référencer les shops partenaires de l'application sur une carte, et ainsi de permettre au rider de trouver un magasin spécialisé pour racheter du matériel neuf. L'adhésion pour un shop à Rtour est de 250 € / an.

À l'avenir, si Rtour se développe et parvient à créer une communauté autour de l'application, on peut tout à fait imaginer transformer le produit. En effet, il pourrait devenir une extension vendue à des applications concurrentes de voyage désireuses de vouloir agrandir leur nombre d'utilisateurs (Airbnb, blablacar). 

Il est également possible d'envisager de décliner le concept de RTour (uniquement réservé aux pratiquants de bmx) à d'autres concepts (skate, surf, graffiti) et d'ainsi multiplier les communautés.