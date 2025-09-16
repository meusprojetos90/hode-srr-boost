# ===== Etapa 1: Build =====
FROM node:18-bullseye AS build

# Instala Bun
RUN curl -fsSL https://bun.sh/install | bash

# Adiciona Bun ao PATH
ENV PATH="/root/.bun/bin:$PATH"

# Cria diretório da aplicação
WORKDIR /app

# Copia package.json e bun.lockb (ou package-lock.json/yarn.lock)
COPY package*.json ./
COPY bun.lockb* ./

# Instala dependências
RUN bun install

# Copia o restante do código
COPY . .

# Build da aplicação
RUN bun run build

# ===== Etapa 2: Runtime =====
FROM caddy:2.7.4-alpine

# Copia build final
COPY --from=build /app/dist /srv

# Copia Caddyfile para configuração do servidor
COPY Caddyfile /etc/caddy/Caddyfile

# Porta padrão
EXPOSE 80

# Inicia Caddy
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
