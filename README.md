<div align="center">

# Interface de Login Responsiva

[![CI](https://img.shields.io/github/actions/workflow/status/ESousa97/Login/ci.yml?style=flat&logo=github-actions&logoColor=white)](https://github.com/ESousa97/Login/actions/workflows/ci.yml)
[![Quality](https://img.shields.io/github/actions/workflow/status/ESousa97/Login/quality.yml?style=flat&logo=github-actions&logoColor=white&label=Quality)](https://github.com/ESousa97/Login/actions/workflows/quality.yml)
[![CodeQL](https://img.shields.io/github/actions/workflow/status/ESousa97/Login/codeql.yml?style=flat&logo=github-actions&logoColor=white&label=CodeQL)](https://github.com/ESousa97/Login/actions/workflows/codeql.yml)
[![Coverage](https://img.shields.io/codecov/c/gh/ESousa97/Login?style=flat&logo=codecov&logoColor=white)](https://codecov.io/gh/ESousa97/Login)
[![CodeFactor](https://img.shields.io/codefactor/grade/github/ESousa97/Login?style=flat&logo=codefactor&logoColor=white)](https://www.codefactor.io/repository/github/esousa97/login)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)
[![Status](https://img.shields.io/badge/Status-Archived-lightgrey.svg?style=flat&logo=archive&logoColor=white)](#)

**UI de login em HTML/CSS puro com glassmorphism, partículas animadas, página 404 personalizada e configuração pronta para Vercel e Apache.**

[Demo](https://login-indol-seven.vercel.app) · [Documentação](docs/README.md)

</div>

---

> **⚠️ Projeto Arquivado**
> Este projeto não recebe mais atualizações ou correções. O código permanece disponível como referência e pode ser utilizado livremente sob a licença MIT. Fique à vontade para fazer fork caso deseje continuar o desenvolvimento.

---

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Arquitetura](#arquitetura)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Começando](#começando)
  - [Pré-requisitos](#pré-requisitos)
  - [Instalação](#instalação)
  - [Uso Local](#uso-local)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Qualidade e Governança](#qualidade-e-governança)
- [Deploy](#deploy)
- [Licença](#licença)
- [Contato](#contato)

---

## Sobre o Projeto

Este projeto é uma interface de login responsiva desenvolvida com HTML e CSS puros, focada em experiência visual moderna. Utiliza glassmorphism, partículas animadas via CSS keyframes e animações de entrada com efeito 3D. Inclui página 404 personalizada e configuração de roteamento para Vercel e Apache.

O repositório prioriza:

- **Design visual moderno** — Glassmorphism com `backdrop-filter`, partículas flutuantes e gradientes animados
- **Animações CSS puras** — Keyframes acelerados por GPU para partículas, shimmer e transições 3D
- **Responsividade completa** — Layout adaptativo com media queries para mobile e desktop
- **Página 404 amigável** — Componente independente com estilização própria
- **Roteamento multi-plataforma** — `vercel.json` para Vercel e `.htaccess` para Apache
- **Automação de qualidade** — Lint (HTML + CSS), testes, cobertura e CI/CD

### Por que HTML/CSS puro?

O escopo do projeto — uma interface de login estática — não justifica overhead de frameworks. A abordagem demonstra o poder das tecnologias web nativas para criar experiências visuais ricas com glassmorphism, animações procedurais e interatividade leve via JavaScript vanilla.

---

## Funcionalidades

- **Login com glassmorphism** — Card com blur, transparência e bordas sutis
- **Partículas animadas** — 9 partículas flutuantes com delays escalonados via CSS
- **Animação de entrada 3D** — Login box com `slideInUp` e `rotateX` via cubic-bezier
- **Efeito shimmer** — Sweep luminoso no botão e inputs ao hover/focus
- **Login social** — Ícones SVG inline para Microsoft e Google
- **Página 404 personalizada** — Componente isolado com GIF e link de retorno
- **Responsivo** — Adaptação completa para telas de até 600px
- **Simulação de loading** — Estado de carregamento no botão com animação

---

## Tecnologias

### Core

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

### Ferramentas de Desenvolvimento

![Stylelint](https://img.shields.io/badge/Stylelint-263238?style=flat&logo=stylelint&logoColor=white)
![HTML Validate](https://img.shields.io/badge/HTML_Validate-E34F26?style=flat&logo=html5&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=prettier&logoColor=black)
![c8](https://img.shields.io/badge/c8-333333?style=flat&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat&logo=github-actions&logoColor=white)

**Requisitos mínimos:**

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Node.js 20+ (apenas para lint/test/build)

---

## Arquitetura

A aplicação é um site estático com HTML e CSS que entrega uma interface de login e uma página 404 personalizada. O roteamento é controlado por configurações de infraestrutura:

```
Usuário
  → Vercel / Apache (roteamento)
    → index.html (interface de login)
      → styles.css (estilização base)
      → inline CSS (glassmorphism, partículas, animações)
      → inline JS (simulação de loading, efeitos de partículas)
    → components/404.html (rotas não mapeadas)
      → components/404.css (estilização da 404)
      → Assets/Erro/404.gif (imagem de erro)
```

O `vercel.json` roteia `/` para `index.html` e qualquer outra rota para `components/404.html` com status 404. Em Apache, o `.htaccess` aplica o mesmo fallback.

> Para mais detalhes, consulte [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).

---

## Estrutura do Projeto

```
Login/
├── index.html                 # Interface de login principal
├── styles.css                 # Estilização base
├── components/
│   ├── 404.html               # Página 404 personalizada
│   └── 404.css                # Estilos da página 404
├── Assets/
│   └── Erro/
│       └── 404.gif            # Imagem de erro
├── scripts/
│   ├── build.js               # Script de build (gera dist/)
│   └── lib/
│       └── checks.js          # Utilitários para testes
├── tests/
│   └── smoke.test.js          # Smoke tests (Node.js test runner)
├── docs/
│   ├── README.md              # Índice da documentação
│   ├── ARCHITECTURE.md        # Documentação de arquitetura
│   └── DEVELOPMENT.md         # Guia de desenvolvimento
├── .github/
│   ├── workflows/
│   │   ├── ci.yml             # Pipeline de CI (lint + test + build)
│   │   ├── quality.yml        # Pipeline de qualidade (lint + format)
│   │   └── codeql.yml         # Análise de segurança
│   ├── dependabot.yml         # Atualizações mensais de dependências
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md      # Template de bug report
│   │   └── feature_request.md # Template de feature request
│   └── PULL_REQUEST_TEMPLATE.md
├── vercel.json                # Roteamento Vercel
├── .htaccess                  # Fallback 404 para Apache
├── package.json               # Dependências e scripts
├── CONTRIBUTING.md            # Guia de contribuição
├── SECURITY.md                # Política de segurança
├── CODE_OF_CONDUCT.md         # Código de conduta
├── CHANGELOG.md               # Histórico de mudanças
└── LICENSE                    # Licença MIT
```

---

## Começando

### Pré-requisitos

A aplicação é um site estático e roda diretamente no navegador. Para lint, testes e build:

```bash
node --version  # v20 ou superior (opcional, para lint/test/build)
npm --version   # v9 ou superior (opcional, para lint/test/build)
```

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/ESousa97/Login.git
cd Login
```

2. **Instale as dependências de desenvolvimento** (opcional)

```bash
npm install
```

### Uso Local

**Abrir diretamente no navegador:**

```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

**Com servidor local (recomendado para testar roteamento):**

```bash
npx serve .
```

Acesse: `http://localhost:3000/`

**Produção:** [login-indol-seven.vercel.app](https://login-indol-seven.vercel.app)

---

## Scripts Disponíveis

```bash
# Validar HTML e CSS
npm run lint

# Lint HTML apenas
npm run lint:html

# Lint CSS apenas
npm run lint:css

# Formatação Prettier
npm run format

# Verificar formatação
npm run format:check

# Smoke tests
npm test

# Testes com cobertura (c8)
npm run test:coverage

# Gerar dist/
npm run build
```

---

## Qualidade e Governança

O projeto adota práticas de governança para manter a qualidade do código:

- **CI** — Pipeline com lint, testes e build via GitHub Actions
- **Quality** — Pipeline separado com lint e verificação de formatação
- **Security** — Análise CodeQL semanal e em cada push/PR
- **Dependabot** — Atualizações mensais de dependências npm
- **Cobertura** — Relatórios via c8 integrados ao Codecov
- **Templates** — Modelos padronizados para Issues e Pull Requests

> Para diretrizes de contribuição, consulte [`CONTRIBUTING.md`](CONTRIBUTING.md). Para política de segurança, consulte [`SECURITY.md`](SECURITY.md).

---

## Deploy

### Vercel (Produção)

Deploy contínuo automatizado via integração GitHub. Cada push na branch `main` aciona novo build e deploy. O `vercel.json` configura roteamento e pasta de output:

```json
{
  "outputDirectory": "dist",
  "rewrites": [
    { "source": "/", "destination": "/index.html" },
    { "source": "/(.*)", "destination": "/components/404.html" }
  ]
}
```

### Apache

O `.htaccess` aplica o fallback 404:

```apache
ErrorDocument 404 /components/404.html
```

---

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License - você pode usar, copiar, modificar e distribuir este código.
```

---

## Contato

**José Enoque Costa de Sousa**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/enoque-sousa-bb89aa168/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github&logoColor=white)](https://github.com/ESousa97)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=flat&logo=todoist&logoColor=white)](https://enoquesousa.vercel.app)

---

<div align="center">

**[⬆ Voltar ao topo](#interface-de-login-responsiva)**

Feito com ❤️ por [José Enoque](https://github.com/ESousa97)

**Status do Projeto:** Archived — Sem novas atualizações

</div>
