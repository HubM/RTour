> Ce document explique la gestion de projet que j'ai souhaité mettre en place pour la réalisation de mon projet RTour.



## Une approche agile

J'ai choisi de réaliser la gestion de projet de RTour en utilisant les méthodes agile, et plus précisément la méthode SCRUM. Contrairement à une gestion de projet plus traditionnel qui propose une approche plus séquentielle où le déroulement du projet est segmenté en parties (type **cycle en V** par exemple ), j'ai préféré utiliser une approche itérative où le découpage des tâches est regroupé dans des **sprints** d'une durée de deux semaines. 

J'ai mené mon travail avec une philosophie **POC (Proof of Concept) First** où l'objectif est avant tout de réaliser un prototype » simplifié au maximum qui ne contient que les fonctionnalités nécessaire à la création d'une première version stable et fonctionnelle. L'intérêt est, qu'en cas de problème majeur, j'ai une version présentable et testable devant le jury de fin d'année.

Le fait de travailler en utilisant des sprints de deux semaines permet de revenir rapidement sur du travail déjà réalisé afin d'améliorer la fonctionnalité existante. Ce cyle court et intératif permet également de mélanger les différents domaines (gestion de projet, design, UX/UI, développement front & back) et de  pouvoir ainsi avoir une amélioration continue et globale du projet.



## Aides

Utilisant déjà dans la société où je suis en alternance (*webians*), j'ai pu m'inspirer des pratiques utiliséés pour pouvoir profiter d'une méthodologie de travail optimisée qui m'a permi d'être plus organisé et productif que si j'avais réalisé l'application sans utiliser de méthode de gestion de projet

J'ai aussi profité des créneaux de cours dédiés à l'ECV. Avec les quelques sessions organisée chaque mois avec mes intervenants, j'ai pu bénéficier de leur expertise et obtenir des conseils dans les différents domaines (développement, UX/UI, gestion de projet).

Pour ma part, j'ai considéré mes intervenants comme des clients en orientant nos échanges pour qu'ils apportent un regard externe sur le projet, et qu'ils m'aident ainsi à définir les grands chantiers à mener. Leurs retours m'ont permis de définir des axes d'améliorations, de les découper en tâches et de les ajouter à mes sprints.



## Github comme outil

J'ai décidé d'utiliser la plateforme Github pour réaliser la gestion de mon projet. Elle offre la possibilité de créer des tâches (**issues**). Ces tâches sont ensuite ajouter à des sprints (**projets**) qui sont représentés comme des tableaux kanban et qui contiennent principalement 3 colonnes (**To Do**, **In Progress** et **Done**). 

Les issues étant représentées au sein d'un projet comme des **cards**, on a la possibilté de les déplacer en fonction du travail réalisé sur la tâche, et ainsi d'avoir en continue une vision globale de l'avancé d'un sprint.

![exempleGithubProject](https://hubm.github.io/RTour/assets/exemple-github-project.png)

*exemple projet Github*



Il est difficile d'estimer la durée de réalisation d'une issue lors de sa création. Afin d'essayer d'estimer au mieux la charge de travail contenue dans un sprint, j'ai décidé d'appliquer la méthode dite du "t-shirt sizing". Cette technique, provenant des méthodes agile, a pour objectif d'utiliser les tailles standards (XS, S, M, L, XL) de t-shirt afin d'appliquer à chaque taille une durée hypothétique. J'ai ainsi pu me baser sur la grille suivante : 

- Extra-small (XS) : 0.5 hour - 1 hour
- Small (S): 2 hours - 4 hours 
- Medium (M): 5 hours - 1day
- Large (L): 2 days - 4 days
- Extra-large (XL): 1 week-2 week



Cette grille a été retranscrie dans Github à l'aide des **Labels**. En effet, cette fonctionnalité a pour but de définir différentes catégories et de les associer à nos tâches. Ils donnent plus d'informations sur l'issue en spécifiant le type ou la catégorie de la tâche. Ils proposent également un sytème de filtrage pour avoir rapidement un détail des issues labelisés dans une catégorie.

![listLabels](https://hubm.github.io/RTour/assets/labels-list.png)

*Labels définis durant la V1*

 ![filteredIssue](https://hubm.github.io/RTour/assets/filtered-issues-list.png)

*Exemple de listing d'issue filtré par ceux avec le label **done***



Afin de suivre la logique de découper le développement des fonctionnalités en versions, Github nous propose d'utiliser les **Milestones**. Ils correspondent aux regroupements d'issues nécessaire à la réalisation de la version. Grâce à eux, il sera possible de lister facilement toutes les tâches réalisées pour une version. De plus, si l'on définit toutes les tâches au préalable, on aura la possibilité de suivre le pourcentage d'avancé de la version.



![exempleMilestone](https://hubm.github.io/RTour/assets/exemple-milestone-V1.png)

*Exemple milestone V1*





![exempleMilestoneWithIssues](https://hubm.github.io/RTour/assets/exemple-milestone-with-issues-V1.png)

*Exemple milestone V1 avec liste d'issues au statut ouvert*