# Microfrontends com Docker + Vite

Este repositório usa Docker para encapsular o ambiente Node.js v22 e facilitar o desenvolvimento de aplicações Vite **sem precisar instalar o Node localmente**.

## 📦 Estrutura

- `aula/`: contém o `Dockerfile` e `docker-compose.yml` para criar o ambiente de desenvolvimento.
- `referencial/`: exemplos de microfrontends usando iframes e import maps.

## 🚀 Como usar

### 1. Subir o ambiente

Execute na raiz do projeto:

```bash
cd aula
docker-compose up --build
```

> Isso criará o container com o Node 22 e deixará pronto para uso interativo em outro terminal.

### 2. Entrar no container

Em outro terminal, rode:

```bash
docker exec -it node-mfe bash
```

Agora você pode executar qualquer comando `npm`, `npx` ou `node` dentro do ambiente isolado.

### 3. Criar um novo app Vite

Ainda dentro do container:

```bash
npm create vite@latest nome-do-app
cd nome-do-app
npm install
```

### 4. Configurar o script `dev`

Para garantir que o Vite funcione corretamente dentro do Docker, **edite o `package.json`** do app criado e ajuste o script `dev`:

```json
"scripts": {
  "dev": "vite --host --port 800X"
}
```

- Sempre inclua `--host` para que o Vite escute corretamente no Docker.
- Use uma porta **entre 8000 e 8004**, já que essas são as portas mapeadas no `docker-compose.yml`.

Por exemplo, para um app novo:

```json
"dev": "vite --host --port 8002"
```

### 5. Rodar a aplicação

Ainda dentro do container, execute:

```bash
npm run dev
```

Acesse no navegador:

```
http://localhost:8002
```

## 🔁 Lembretes

- Só há portas mapeadas até `8004`. Se precisar de mais apps simultâneos, adicione novas portas ao `docker-compose.yml`.
- Use sempre `--host` no script `dev` para que o Vite fique acessível fora do container.
- Não instale Node localmente – tudo roda isolado dentro do container.

## Estilos em MF

- Cada MF pode ter seu proprio design system e estilos
- O maior desafio e evitar globais entre os MFs
- Iframes isolam estilos por padrao, evita o vazamento de CSS
- Se não usar Iframes prefira
  - Shadown DOM para escopo isolado
  - Prefisos de classes para evitas colisões
- Evite dependencias globais como bootstrap.css no shell

## Cuidados ao usar import maps

- Import maps carregam modulos globais, o que pode gerar dependencias indesejadas
- Se dois MFs importam a mesma lib, podem acabar compartilhando uma versão errada
- Uma mudanca no import map do shell pode quebrar um MF sem aviso
- Evite expor pacotes internos que não deveriam ser compartilhados entre MFs
- Sempre versione as libs no import map para evitar incompatibilidades

## Seguranca na comunicação entre Iframes

- Iframes isolam execução, impedinto acesso direto ao código de outros MFs
- Use window.postMessage() para trocar dados com segurança
- Sempre valide a origem da mensagem (event.origin) antes de processar
- Não confie em mensagens externas sem validação
- Evite enviar dados sensíveis

## Segurança no uso de import maps

- Import maps permitem definir caminhos para módulos remotos
- Um atacante pode tentar substituir um módulo se houver brechas na CDN
- Sempre carregue módulos de origens confiáveis
- Defina um Content Security Policy (CSP) para restringir a execução de scripts remotos
- Não exponha APIs sensíveis nos módulos compartilhados pelo Import Maps
- Mantenha um controle de versão para evitar que mudanças no Import Maps quebrem a aplicação

## 💡 Dica

Você pode criar um alias ou script para facilitar o acesso ao container:

```bash
alias devbox="docker exec -it node-terminal bash"
```


