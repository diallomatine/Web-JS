Authors :
=========

`Diallo Aissatou-Lamarana & Diallo Abdoul-Matine`

**************************************************************************************************

Présentation et Objectifs du Projet
===================================

**************************************************************************************************
Ce projet a pour but la réalisation du jeu vidéo "starship" dans une version simple. 
Il consiste à détruire des soucoupes volantes sortant par la droite du canvas du jeu par un vaisseau 
émettant des tirs. Les déplacements du vaisseau situé à gauche sont contrôlés par le joueur.

**************************************************************************************************

Comment récupérer le Projet
===========================

**************************************************************************************************
Pour la récupération du projet, veuillez cloner ce dépôt en tapant cette commande :

**git clone https://gitlab-etu.fil.univ-lille1.fr/dialloai/diallo_diallo_projectjs.git**

dans un terminal et récupérer le dossier correspondant au nom **fichiers-starship**.

**************************************************************************************************

Utilisation
===========

**************************************************************************************************
Dans un **Terminal**, en vous plaçant à la racine du projet, 
tapez cette commande : **npm install**

qui permet l'installation de toutes les dépendances décrites dans package.json.

Puis au même endroit du terminal, tapez la commande : **npm run build**

pour l'exécution des commandes spécifiées dans build. Ceci vous créera le dossier *dist* et contiendra 
les dossiers correspondants aux différents loader (ici dossier *images* pour 
les images et *scripts* pour le fichier **bundle.js**) ainsi que le fichier **index.html** 
nécessaire à l'exécution de l'application sur le navigateur.
**************************************************************************************************

Exécution du projet
===================

**************************************************************************************************
Ouvrez le fichier **index.html** se trouvant dans le dossier *dist* via le navigateur **Firefox** .

**NB** : dans le navigateur *Firefox*, veuillez placer dans la page de configuration *about:config*,
 la propriété *security.fileuri.strict_origin_policy* à **true**.

**************************************************************************************************
Quelques Remarques
==================

**************************************************************************************************
*L'appel de la methode stop() dans start() c'est pour éviter que les soucoupes se deplacent très très vite.*

*Toutes les questions ont été abordées.*
