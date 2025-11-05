# landing-page-astro

Projeto: Elaine Duarte Quipráta — uma landing page construída com Astro (SSG/SSR leve) pensada para desempenho, SEO e facilidade de deploy.


## Tecnologias principais
- Astro
- Node.js (recomendado >= 18)
- Gerenciador de pacotes: npm / pnpm / yarn
- CSS: TailwindCSS ou CSS Modules (opcional)
- Ferramentas recomendadas: ESLint, Prettier, TypeScript (opcional)

## Requisitos
- Node.js >= 18
- Git (opcional, para controle de versão)
- Conta em serviço de hospedagem (Vercel / Netlify / Cloudflare Pages / GitHub Pages) para deploy

## Instalação (rápido)
1. Clone o repositório (se aplicável)
    ```bash
    git clone https://github.com/marcostuliodev/landing-page-astro
    cd landing-page-astro
    ```
2. Instale dependências
    ```bash
    npm install
    ```

## Scripts úteis (exemplos de package.json)
```json
{
  "scripts": {
     "dev": "astro dev",
     "build": "astro build",
     "preview": "astro preview",
     "format": "prettier --write .",
     "lint": "eslint . --ext .js,.ts,.jsx,.tsx,.astro",
     "typecheck": "tsc --noEmit"
  }
}
```

- npm run dev — ambiente de desenvolvimento (hot-reload)
- npm run build — gera a versão final (dist/)
- npm run preview — serve a build localmente para testes

## Estrutura típica do projeto
- package.json
- astro.config.mjs
- public/ — ativos estáticos (imagens, favicon)
- src/
  - pages/ — rotas e páginas (.astro, .mdx)
  - layouts/ — layouts compartilhados
  - components/ — componentes UI reutilizáveis
  - styles/ — arquivos CSS / Tailwind
  - data/ — conteúdo local (JSON / md)
- tsconfig.json (se usar TypeScript)
- tailwind.config.cjs (se usar Tailwind)

## Padrões e recomendações
- Manter páginas simples, com foco em performance: usar imagens otimizadas e carregamento lazy.
- Cabeçalhos SEO: title, meta description, Open Graph e Twitter Cards em cada página.
- Acessibilidade: usar tags semânticas, atributos alt em imagens e contraste adequado.
- Performance: usar imagem responsiva (<picture>, srcset) e minimizar scripts de terceiros.

## Deploy
Opções comuns:
- Vercel: integração direta, auto-detecta Astro
- Netlify: configurar build command `npm run build` e publish `dist/`
- Cloudflare Pages: suporta builds com Node
- GitHub Pages: usar adapter ou deploy manual do conteúdo estático em dist/

Exemplo (Netlify):
- Build command: `npm run build`
- Publish directory: `dist`

## Exemplos de otimização
- Ativar imagem otimizada via Integrations ou componentes de imagem.
- Concatenar e minimizar CSS no build.
- Usar caching e headers adequados no servidor.

## Debug e troubleshooting
- Erros de dependência: remover node_modules e package-lock.json e reinstalar.
- Build falhando: rodar `npm run dev` para logs mais detalhados e verificar versão do Node.
- Dependências nativas: conferir compatibilidade com versão do Node.

## Contribuição
- Abrir issue para bugs ou features.
- Criar branches com nomes claros: `feature/<nome>` ou `fix/<nome>`.
- Fazer PRs pequenos e documentados.
- Testar localmente antes de enviar PR.

