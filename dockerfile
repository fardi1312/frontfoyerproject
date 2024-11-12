# Étape 1 : Construire l'application Angular
FROM node:20 AS builder
WORKDIR /app

<<<<<<< HEAD
# Copiez les fichiers de configuration d'installation
# Assurez-vous que package.json et package-lock.json sont présents dans le même répertoire que ce Dockerfile
COPY package*.json ./

# Installer Angular CLI localement
=======
# Copier les fichiers de configuration de npm
COPY package*.json ./

# Installer Angular CLI
>>>>>>> b610e4b08f3449be193cac1e386f3f904b8a94d9
RUN npm install -g @angular/cli

# Installer les dépendances du projet
RUN npm install

<<<<<<< HEAD
# Copiez tout le reste du code de l'application
=======
# Copier tout le code du projet Angular
>>>>>>> b610e4b08f3449be193cac1e386f3f904b8a94d9
COPY . .

# Construire l'application Angular pour la production
RUN ng build --configuration production

# Étape 2 : Configurer un serveur Nginx pour servir l'application construite
FROM nginx:alpine
# Copiez les fichiers construits depuis l'étape builder vers le serveur Nginx
COPY --from=builder /app/dist/frontfoyerproject /usr/share/nginx/html

<<<<<<< HEAD
# Exposez le port sur lequel Nginx va écouter
=======
>>>>>>> b610e4b08f3449be193cac1e386f3f904b8a94d9
EXPOSE 8420

# Démarrer le serveur Nginx
CMD ["nginx", "-g", "daemon off;"]
