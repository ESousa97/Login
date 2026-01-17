# Arquitetura

## Visão geral

Este projeto é um site estático com HTML e CSS que entrega uma interface de login e uma página 404 personalizada. O roteamento é controlado por configurações de infraestrutura (Vercel) e, para ambientes Apache, por .htaccess.

## Componentes principais

- **index.html**: interface de login, responsiva e animada.
- **components/404.html**: página 404 customizada.
- **components/404.css**: estilos da página 404.
- **Assets/**: imagens e ícones.
- **vercel.json**: regras de roteamento na Vercel.
- **.htaccess**: fallback para Apache.

## Fluxo de entrega

1. Usuário acessa o domínio.
2. Vercel serve index.html na rota raiz.
3. Rotas não mapeadas retornam components/404.html com status 404.
4. Assets são carregados via CDN.
