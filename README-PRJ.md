Landing Page - Meu Portfólio
Este é um projeto de landing page criado com **React** para exibir meu portfólio como desenvolvedor(a). Ele é simples de configurar e executar em um ambiente local com Node.js.
---
Pré-requisitos
Certifique-se de ter os seguintes softwares instalados:
- **Node.js** (recomendado: versão 16 ou superior)
- **npm** (instalado automaticamente com o Node.js) ou **Yarn** (opcional)
- **WSL** (Windows Subsystem for Linux) com Ubuntu (se estiver usando o Windows)
---
Instalação
Passo 1: Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
Passo 2: Navegar para o Diretório do Projeto
```bash
cd nome-do-repositorio
```
Passo 3: Instalar as Dependências
- Usando npm:
```bash
npm install
```
- Ou usando Yarn:
```bash
yarn install
```
---
Configuração do Ambiente no WSL (para usuários de Windows)
Se você estiver usando **WSL + Ubuntu**, siga estas etapas para garantir que seu ambiente esteja configurado corretamente:
1. **Configurar o DNS no WSL**
   - Edite o arquivo de configuração de DNS:
     ```bash
     sudo nano /etc/resolv.conf
     ```
   - Adicione os servidores DNS:
     ```bash
     nameserver 8.8.8.8
     nameserver 8.8.4.4
     ```
   - Salve e saia (`Ctrl + O`, `Enter`, `Ctrl + X`).
2. **Impedir que o WSL sobrescreva o `resolv.conf`**
   - Edite ou crie o arquivo `/etc/wsl.conf`:
     ```bash
     sudo nano /etc/wsl.conf
     ```
   - Adicione o seguinte:
     ```ini
     [network]
     generateResolvConf = false
     ```
   - Salve e saia (`Ctrl + O`, `Enter`, `Ctrl + X`).
3. **Reinicie o WSL**
   ```bash
   wsl --shutdown
   ```
---
Executando o Projeto
1. **Iniciar o servidor de desenvolvimento**
   - Usando npm:
     ```bash
     npm start
     ```
   - Ou usando Yarn:
     ```bash
     yarn start
     ```
2. **Acesse a aplicação no navegador**:  
   O projeto será aberto automaticamente em `http://localhost:3000`. Se não abrir, acesse manualmente.
---
Scripts Disponíveis
No diretório do projeto, você pode executar os seguintes scripts:
- **`npm start`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Cria uma versão otimizada do projeto para produção.
- **`npm test`**: Inicia o test runner.
- **`npm run eject`**: Ejeta a configuração padrão do Create React App (cuidado: essa ação é irreversível).
---
Construindo para Produção
Para criar uma versão otimizada do projeto para produção:
```bash
npm run build
```
Os arquivos serão gerados na pasta `build`. Esses arquivos podem ser servidos por um servidor web.
---
Dependências Principais
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **React-DOM**: Manipulação do DOM em aplicações React.
- **React-Scripts**: Scripts e configuração padrão para projetos React.
---
Atualizações e Vulnerabilidades
Para corrigir possíveis vulnerabilidades, você pode executar:
```bash
npm audit fix --force
```
---
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com sugestões ou melhorias.
---
Licença
Este projeto é licenciado sob a [MIT License](https://opensource.org/licenses/MIT). Consulte o arquivo `LICENSE` para mais detalhes.
---
Contato
Se tiver dúvidas ou quiser entrar em contato, você pode me encontrar em:
- **Email**: samaramathildes@gmail.com
- **LinkedIn**: [LinkedIn](https://www.linkedin.com/in/nizshime)