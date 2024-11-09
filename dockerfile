# Étape 1 : Construire l'application Angular
FROM node:20 AS builder
WORKDIR /app

# Copier les fichiers de configuration de npm
COPY package*.json ./

# Installer Angular CLI
RUN npm install -g @angular/cli

# Installer les dépendances du projet
RUN npm install

# Copier tout le code du projet Angular
COPY . .

# Construire l'application Angular pour la production
RUN ng build --configuration production

# Étape 2 : Configurer un serveur Nginx pour servir l'application construite
FROM nginx:alpine
COPY --from=builder /app/dist/frontfoyerproject /usr/share/nginx/html

EXPOSE 8420
CMD ["nginx", "-g", "daemon off;"]
