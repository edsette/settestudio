# Eduardo Sette - Portfólio Profissional

Portfólio profissional completo para freelancer desenvolvedor web, com sistema de tradução multi-idioma, tema escuro/claro, e otimização para SEO.

## 🚀 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Variáveis CSS, Grid, Flexbox, Animações
- **JavaScript ES6+** - Vanilla JS, Classes, Módulos
- **SEO Otimizado** - Meta tags, Schema.org, Open Graph
- **Multi-idioma** - 6 idiomas (PT, EN, ES, FR, DE, IT)
- **Responsivo** - Mobile-first design
- **Acessível** - WCAG compliant

## 📁 Estrutura de Pastas

```
eduardo_sette/
├── index.html                 # Página principal
├── sitemap.xml               # Mapa do site para SEO
├── robots.txt                # Regras para crawlers
├── README.md                 # Documentação
│
├── css/
│   ├── main.css             # Variáveis e estilos base
│   ├── components.css       # Componentes reutilizáveis
│   └── pages.css            # Estilos específicos de página
│
├── js/
│   ├── main.js              # Funcionalidades principais
│   └── translations.js      # Sistema de tradução
│
├── assets/
│   ├── images/              # Imagens do site
│   ├── icons/               # Ícones e favicons
│   ├── projects/            # Screenshots de projetos
│   └── profile/             # Foto de perfil
│
├── data/                    # Dados JSON (futuro CMS)
└── languages/               # Arquivos de tradução (futuro)
```

## 🎨 Paleta de Cores

### Cores Principais
- **Verde Oliva**: `#556B2F` (Primary)
- **Caqui**: `#C3B091` (Secondary)

### Cores Complementares
- **Creme**: `#F5F1E8` (Background Light)
- **Bege**: `#E8E2D5` (Background Secondary)
- **Preto**: `#2B2B2B` (Text Primary)
- **Branco**: `#FFFFFF` (Background Primary)

## ✨ Funcionalidades

### 1. **Sistema de Tradução**
- 6 idiomas suportados
- Detecção automática do idioma do navegador
- Persistência da preferência (localStorage)
- Troca dinâmica sem recarregar a página

### 2. **Tema Claro/Escuro**
- Detecção automática do sistema
- Botão para alternar manualmente
- Persistência da preferência (localStorage)
- Transições suaves entre temas

### 3. **Menu Responsivo**
- Hamburger menu para mobile
- Fechamento ao clicar em link
- Fechamento ao clicar fora
- Fechamento com tecla ESC

### 4. **Animações**
- Scroll animations com Intersection Observer
- Animações staggered para grids
- Hover effects em cards
- Transições suaves

### 5. **Componentes Interativos**
- FAQ Accordion
- Carrossel de depoimentos (com auto-play)
- Filtros de projetos
- Busca no blog
- Formulário de contato (WhatsApp/Email)

### 6. **SEO**
- Meta tags completas
- Open Graph tags
- Twitter Cards
- Schema.org markup
- Sitemap.xml
- Robots.txt
- URLs canônicas
- Estrutura semântica HTML5

### 7. **Performance**
- CSS otimizado com variáveis
- JavaScript modular e eficiente
- Lazy loading de imagens
- Monitoramento de performance
- Sem dependências externas

### 8. **Acessibilidade**
- Skip link para navegação
- ARIA labels
- Navegação por teclado
- Contraste adequado (WCAG)
- Focus visible states
- Suporte a prefers-reduced-motion

## 🎯 Seções do Site

1. **Hero** - Apresentação principal com CTA
2. **Sobre Mim** - História e especialidades
3. **Serviços** - 6 cards de serviços
4. **Processo** - Timeline com 6 etapas
5. **Tecnologias** - 8 tecnologias dominadas
6. **Projetos** - Galeria com filtros
7. **Depoimentos** - Carrossel elegante
8. **FAQ** - Perguntas frequentes em accordion
9. **Blog** - Grid de artigos com busca
10. **Contato** - Formulário + informações de contato
11. **Footer** - Links rápidos e redes sociais

## 🚀 Como Usar

### 1. Clone ou baixe o projeto
```bash
git clone [repository-url]
cd eduardo_sette
```

### 2. Personalize o conteúdo

#### Edite `index.html`:
- Altere nome, descrição e informações pessoais
- Adicione projetos reais na seção de projetos
- Insira depoimentos de clientes reais
- Atualize links de redes sociais
- Configure número do WhatsApp

#### Edite `js/translations.js`:
- Altere textos em todos os idiomas
- Adicione novos idiomas se necessário

#### Edite `css/main.css`:
- Personalize cores nas variáveis CSS
- Ajuste fontes e espaçamentos

### 3. Adicione imagens

Coloque suas imagens nas pastas:
```
assets/
├── images/
│   └── og-image.jpg          # Imagem para redes sociais (1200x630px)
├── profile/
│   └── photo.jpg             # Foto profissional (500x500px)
└── projects/
    ├── project1.jpg          # Screenshots dos projetos
    ├── project2.jpg
    └── ...
```

### 4. Configure domínio

Atualize os domínios em:
- `index.html` - Meta tags e links
- `sitemap.xml` - URLs
- `robots.txt` - Sitemap URL

### 5. Deploy

#### Netlify (Recomendado)
1. Conecte seu repositório
2. Configure domínio customizado
3. Deploy automático

#### Vercel
```bash
npm i -g vercel
vercel
```

#### GitHub Pages
1. Vá em Settings > Pages
2. Selecione branch main
3. Salve

#### Servidor tradicional
- Faça upload via FTP
- Configure .htaccess para URLs amigáveis

## 📝 Personalização

### Cores
Edite as variáveis CSS em `css/main.css`:
```css
:root {
    --color-primary: #556B2F;        /* Verde Oliva */
    --color-secondary: #C3B091;      /* Caqui */
    --color-bg-primary: #FFFFFF;     /* Branco */
    /* ... */
}
```

### Idiomas
Adicione novas traduções em `js/translations.js`:
```javascript
const translations = {
    pt: { "chave": "texto em português" },
    en: { "chave": "text in english" },
    // ...
};
```

### Projetos
Adicione projetos em `index.html`:
```html
<article class="project-card" data-category="landing">
    <div class="project-card__image">
        <img src="assets/projects/projeto.jpg" alt="Nome do Projeto">
    </div>
    <div class="project-card__content">
        <h3 class="project-card__title">Nome do Projeto</h3>
        <p class="project-card__description">Descrição</p>
    </div>
</article>
```

## 🔧 Configurações

### WhatsApp
Atualize o número em `js/main.js`:
```javascript
const phoneNumber = '5511999999999'; // Seu número
```

### Email
Atualize o email em `index.html`:
```html
<a href="mailto:seu@email.com">seu@email.com</a>
```

### Redes Sociais
Atualize os links no footer:
- GitHub
- LinkedIn
- WhatsApp

## 📊 SEO

### Meta Tags Incluídas
- Title tag otimizada
- Meta description
- Meta keywords
- Open Graph (Facebook)
- Twitter Cards
- Schema.org (JSON-LD)
- Canonical URL
- Robots meta

### Performance
- CSS minificado (recomendado para produção)
- JavaScript otimizado
- Sem jQuery ou bibliotecas pesadas
- Fontes do Google com preconnect
- Lazy loading de imagens

### Acessibilidade
- Estrutura semântica HTML5
- ARIA labels
- Skip link
- Navegação por teclado
- Contraste WCAG AA
- Focus visible states

## 🎨 Design

### Inspirações
- **Webflow** - Animações suaves
- **Framer** - Micro-interações
- **Linear** - Design clean
- **Stripe** - Gradientes modernos
- **Vercel** - Minimalismo

### Características
- Muito espaço em branco
- Bordas suaves (border-radius)
- Animações discretas
- Glassmorphism leve
- Efeitos modernos
- Visual premium

## 📱 Responsividade

### Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

### Recursos Responsivos
- Menu hamburger
- Grid adaptativo
- Imagens flexíveis
- Tipografia fluida
- Touch-friendly

## 🌐 Navegadores Suportados

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

## 📦 Dependências

**Nenhuma!** O projeto usa apenas:
- HTML5
- CSS3 (com variáveis)
- JavaScript ES6+ puro
- Google Fonts (Inter)

## 🔒 Segurança

- Sanitização de inputs
- Proteção contra XSS
- HTTPS recomendado
- CSP headers (configurar no servidor)

## 📈 Analytics (Opcional)

Adicione Google Analytics ou outras ferramentas:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🚀 Performance

### Meta
- Lighthouse Score: 95+
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Cumulative Layout Shift: < 0.1

### Otimizações Implementadas
- CSS crítico inline
- JavaScript assíncrono
- Fontes com preconnect
- Lazy loading
- Sem bloqueios de renderização

## 📝 Licença

Este projeto é de uso exclusivo de Eduardo Sette.

## 👨‍💻 Autor

**Eduardo Sette**
- Website: https://eduardosette.com.br
- Email: contato@eduardosette.com.br
- GitHub: [@eduardosette](https://github.com/eduardosette)
- LinkedIn: [/in/eduardosette](https://linkedin.com/in/eduardosette)

## 🙏 Agradecimentos

Design e desenvolvimento inspirado em agências premium europeias, mantendo simplicidade, velocidade e foco em conversão.

---

**Desenvolvido com ❤️ por Eduardo Sette**