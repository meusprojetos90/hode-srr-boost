# ----------------------------
# Etapa 1: Build do projeto
# ----------------------------
FROM node:20-alpine AS builder

# Diretório de trabalho
WORKDIR /app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install --frozen-lockfile

# Copiar o restante do código
COPY . .

# Build do projeto (ajuste se for Flutter web, Node backend ou outro)
RUN npm run build

# ----------------------------
# Etapa 2: Container final
# ----------------------------
FROM node:20-alpine

WORKDIR /app

# Copiar dependências do builder
COPY --from=builder /app/node_modules ./node_modules

# Copiar build final
COPY --from=builder /app ./

# Expõe porta do app
EXPOSE 3000

# Comando para iniciar o app
CMD ["npm", "start"]
