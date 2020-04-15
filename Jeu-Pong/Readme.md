# AUTEURS

Diallo Abdoul Matine


# Pong

une version simplifiée de l'historique jeu "Pong", mais dans une version "réseau" puisque les joueurs pourront se trouver sur deux ordinateurs différents.

#OBJECTIF

Utilisation du module express de node.js avec les router, controllers et le côté réseau avec le module socket.io


## UTILISATION

* Récupérer le projet par:
**$ git clone https://gitlab-etu.fil.univ-lille1.fr/dialloai/diallo_diallo_projectjs.git**
* Se placer au dossier racine du projet par la commande

**$ cd diallo_diallo_projectjs/ServerPong**
* ensuite installer les modules nodes utilisés dans ce projet par:
**$ npm install**



## EXECUTION DU JEU

* Lancer le serveur en tapant la commande suivante:
**$  nodemon**
et lancer l'url suivante dans le navigateur : localhost:3000

## LE JEU - GAME

* Vous trouverez toutes les infos utiles au jeu en cliquant sur le lien **rules**
* Vous trouverez les noms des auteurs du jeu et la version du jeu en cliquant sur le lien **about**
* Pour jouer au jeu, il vous suffira de cliquer sur le lien **jouer**

## NB

* La gestion de rafraîchissement de la page pour ne pas perdre
la connexion en cours n'a pas été géré. Du coup quand vous rafraîchissez la page en cours de jeu, vous serez obliger de redémarrer le serveur pour continuer à jouer.
Lors des collisions de la balle avec l'une de paddle,on a utilisé la fonction setTimeout pour retarder l'envoi de nouvelle coordonnées de la balle à l'autre joueur, vu que dans toutes les pages des clients, la gestion des collisions est géré même sans adversaire.

* Pour les route on n'a pas fait de controller dans le dossier controller, vu que chaque route n'avait qu'une seule fonction à exécuter, du coup on préféré le faire directement dans le fichier représente la route. Par contre pour le socket on n'a fait son contrôleur pour bien le gérer.

* On n'a diminué la vitesse de déplacement de la balle de 8 à 6,
pour pouvoir jouer seul sur un ordi, bien sure avec 2 clients différents.

## PARTIE NON FAITE
La gestion du score et la synchronisation des coordonnées de la balle entre les 2 clients lors des 1/4 de déplacement de la balle.

Par consequent la synchronisation peut n'est pas être parfaite de temps en temps.
