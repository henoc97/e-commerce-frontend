# Étape 1 : Construction
FROM node:18 AS builder

WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers du projet
COPY . .

# Construis le projet
RUN npm run build

# Étape 2 : Exécution
FROM node:18

WORKDIR /app

# Copie les fichiers nécessaires depuis l'étape de construction
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./
COPY --from=builder /app/public ./public

# Installe les dépendances de production
RUN npm install --only=production

# Expose le port que l'application utilise
EXPOSE 3000

# Démarre l'application
CMD ["npm", "start"]
