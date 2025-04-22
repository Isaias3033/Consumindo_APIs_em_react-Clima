# Previsão do Tempo Mobile

> Aplicativo móvel em React Native (Expo) para buscar e exibir a previsão do tempo de qualquer cidade usando a API do WeatherAPI.com.

---

## 🚀 Funcionalidades

- **Busca por cidade**: digite o nome de uma cidade e obtenha a previsão atual.
- **Buscas recentes**: acesse rapidamente suas últimas 5 cidades pesquisadas.
- **Loading e tratamento de erro**: indicador de carregamento com mensagem e tratamento de erros detalhado.
- **Cartão de clima aprimorado**: design moderno com exibição de ícone, temperatura, condição, umidade, vento, sensação térmica, cobertura de nuvens e pressão.
- **Interface responsiva**: adaptada para diferentes tamanhos de tela.
- **Navegação básica**: expo-router para estrutura de telas (mesmo que hoje seja apenas a Home).
- **Experiência de usuário melhorada**: teclado adaptativo, validação de entrada e feedback visual.

---

## 📁 Estrutura do Projeto

```
/<raiz-do-projeto>
├── components/
│   └── WeatherCard.tsx        # Componente aprimorado que renderiza o cartão com dados do clima
├── app/
│   ├── layout.tsx             # Layout root do expo-router
│   ├── page.tsx               # Página principal que importa o HomeScreen
│   └── index.tsx              # Tela principal (HomeScreen) com lógica de busca e estado
├── README.md                  # Documentação do projeto
├── package.json               # Dependências e scripts
└── tsconfig.json              # Configurações do TypeScript

```

- **components/WeatherCard.tsx**  
Componente redesenhado que recebe o objeto `data` da API e exibe:

  - Nome da cidade, região e país
  - Ícone do clima em tamanho maior
  - Temperatura em °C com formatação aprimorada
  - Texto da condição (nublado, ensolarado, etc.)
  - Layout em grid para informações extras: umidade, vento, sensação térmica, nuvens e pressão
  - Horário da última atualização dos dados
  - Design com sombras e melhor organização visual


- **layout.tsx**  
  Configura o stack de navegação do Expo Router.

  **page.tsx**
  Importa e renderiza o componente HomeScreen.



- **index.tsx** (HomeScreen)
  - TypeScript interfaces bem definidas para tipagem de dados
  - Hooks de estado: `city`, `weather`, `loading`, `error`
  - `fetchWeather()`: função aprimorada para buscar dados do clima
  - Tratamento de erros mais detalhado com mensagens específicas
  - Componente de buscas recentes com scrolling horizontal
  - Melhor feedback visual durante carregamento
  - Layout responsivo com KeyboardAvoidingView e ScrollView
  - Estilização aprimorada para melhor experiência visual


---

## 🔧 Tecnologias e Dependências

- [Expo](https://expo.dev/)  
- [React Native](https://reactnative.dev/)  
- [expo-router](https://expo.github.io/router/)  
- [Axios](https://github.com/axios/axios)  
- TypeScript

---

## ⚙️ Pré-requisitos

- Node.js (>= 14.x)
- npm ou Yarn
- CLI do Expo instalado globalmente:
  ```bash
  npm install -g expo-cli
  ```

---

## 📥 Instalação e Execução

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/Isaias3033/Consumindo_APIs_em_react-Clima.git
   cd Consumindo_APIs_em_react-Clima
   ```

2. **Instale as dependências**  
   ```bash
   npm install
   # ou
   yarn install
   ```
   
4. **Inicie o Metro Bundler**  
   ```bash
   npx expo start
   ```

5. **Execute no dispositivo ou emulador**  
   - Pressione `w` para Emular Web  
   - Pressione `i` para iOS Simulator  
   - Pressione `a` para Android Emulator  
   - Ou escaneie o QR code com o app Expo Go no seu celular.
   
---

## 🆕 Melhorias Implementadas

### Interface do Usuário

- Design moderno com cartão de clima aprimorado
- Feedback visual durante carregamento de dados
- Mensagens de erro mais descritivas e amigáveis
- Suporte a diferentes tamanhos de tela


### Funcionalidades

- Sistema de buscas recentes para acesso rápido
- Validação de entrada para evitar buscas vazias
- Formatação de dados para melhor legibilidade
- Tratamento de teclado para melhor experiência em dispositivos móveis


### Código

- Interfaces TypeScript bem definidas
- Melhor separação de responsabilidades
- Funções mais modulares e reutilizáveis
- Estilização mais organizada e consistente


---

> Desenvolvido com ❤️ por **Isaias Santana**  
> Para dúvidas ou contribuições, abra uma issue ou pull request neste repositório.
