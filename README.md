# Interface de Login Responsiva

[![CI](https://github.com/ESousa97/Login/actions/workflows/ci.yml/badge.svg)](https://github.com/ESousa97/Login/actions/workflows/ci.yml)
[![Quality](https://github.com/ESousa97/Login/actions/workflows/quality.yml/badge.svg)](https://github.com/ESousa97/Login/actions/workflows/quality.yml)
[![Coverage](https://codecov.io/gh/ESousa97/Login/branch/main/graph/badge.svg)](https://codecov.io/gh/ESousa97/Login)
[![CodeQL](https://github.com/ESousa97/Login/actions/workflows/codeql.yml/badge.svg)](https://github.com/ESousa97/Login/actions/workflows/codeql.yml)
[![CodeFactor](https://www.codefactor.io/repository/github/esousa97/login/badge)](https://www.codefactor.io/repository/github/esousa97/login)
[![License](https://img.shields.io/github/license/ESousa97/Login)](LICENSE)

> UI de login em HTML/CSS com animações modernas, página 404 personalizada e configuração pronta para Vercel.

## Demo

- https://login-indol-seven.vercel.app

## Destaques

- Layout responsivo com glassmorphism.
- Partículas animadas em CSS.
- Página 404 amigável.
- Roteamento configurado para Vercel e Apache.
- Automação de qualidade (lint/test/coverage).

## Estrutura

```
.
├── Assets/
├── components/
├── docs/
├── scripts/
├── tests/
├── index.html
├── styles.css
├── vercel.json
└── .htaccess
```

## Scripts

- `npm run lint`: valida HTML e CSS.
- `npm run format`: formata HTML/CSS/MD/JSON/YAML.
- `npm run test`: smoke tests.
- `npm run test:coverage`: cobertura com c8.
- `npm run build`: gera dist/.

## Qualidade e CI

- CI: lint + tests + build.
- Quality: lint + format check.
- Security: CodeQL.
- Dependabot: atualizações mensais de dependências.

## Deploy

- Vercel usa as regras definidas em vercel.json.
- Em Apache, .htaccess aplica o fallback 404.

## Documentação

- [docs/README.md](docs/README.md)

## Contribuição

Veja [CONTRIBUTING.md](CONTRIBUTING.md).

## Segurança

Veja [SECURITY.md](SECURITY.md).

## Licença

MIT. Consulte [LICENSE](LICENSE).

**Plataforma:** Implantado na **Vercel** com otimização para aplicações frontend.

**Processo de CI/CD:**

- Deploy totalmente automatizado via integração GitHub
- Cada `git push` para branch `main` aciona novo build e deploy
- Zero configuração necessária (detecção automática de projeto estático)

## Licença

MIT. Consulte [LICENSE](LICENSE).
{
