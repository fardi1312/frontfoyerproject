# Étape 1 : Construire l'application Angular
FROM node:20 AS builder 
WORKDIR /app

# Copiez les fichiers de configuration d'installation
COPY package*.json ./

# Installer Angular CLI localement
RUN npm install -g @angular/cli 

# Installer les dépendances de l'application
RUN npm install

# Copiez le reste du code de l'application
COPY . .

# Construire l'application Angular
RUN ng build --configuration production

# Étape 2 : Configurer le serveur web pour servir l'application
FROM nginx:alpine
COPY --from=builder /app/dist/frontfoyerproject /usr/share/nginx/html
EXPOSE 8420
CMD ["nginx", "-g", "daemon off;"]
