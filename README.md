# Previsão do Tempo Mobile

> Aplicativo móvel em React Native (Expo) para buscar e exibir a previsão do tempo de qualquer cidade usando a API do WeatherAPI.com.

---

## 🚀 Funcionalidades

- **Busca por cidade**: digite o nome de uma cidade e obtenha a previsão atual.
- **Loading e tratamento de erro**: indicador de carregamento e mensagem de erro caso a requisição falhe.
- **Cartão de clima**: exibe ícone, temperatura, condição, umidade, vento, sensação térmica, cobertura de nuvens e pressão.
- **Navegação básica**: expo-router para estrutura de telas (mesmo que hoje seja apenas a Home).

---

## 📁 Estrutura do Projeto

```
/<raiz-do-projeto>
├── components/
│   └── WeatherCard.tsx        # Componente que renderiza o cartão com dados do clima
├── app/
│   └── layout.tsx             # Layout root do expo-router
│   └── index.tsx              # Tela principal (HomeScreen)
├── README.md                  # Documentação do projeto
├── package.json               # Dependências e scripts
└── tsconfig.json              # Configurações do TypeScript
```

- **components/WeatherCard.tsx**  
  Recebe o objeto `data` da API e exibe:
  - Nome da cidade e região
  - Ícone do clima
  - Temperatura em °C
  - Texto da condição (nublado, ensolarado, etc.)
  - Informações extras: umidade, vento, sensação térmica, nuvens e pressão.

- **app/layout.tsx**  
  Configura o stack de navegação do Expo Router.

- **app/index.tsx** (HomeScreen)  
  - Hooks de estado: `city`, `weather`, `loading`, `error`
  - `fetchWeather()`: faz `GET` na API WeatherAPI.com via Axios
  - Renderiza `<ActivityIndicator />` durante o fetch, texto de erro e `<WeatherCard />` com os dados.

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

3. **Configurar a chave de API**  
   - Abra `app/index.tsx` e substitua o valor de `API_KEY` pela sua chave do WeatherAPI.com.
   - **(Opcional)** para não expor a chave no código, utilize variáveis de ambiente e alguma lib como `react-native-dotenv`.

4. **Inicie o Metro Bundler**  
   ```bash
   expo start
   ```

5. **Execute no dispositivo ou emulador**  
   - Pressione `i` para iOS Simulator  
   - Pressione `a` para Android Emulator  
   - Ou escaneie o QR code com o app Expo Go no seu celular.

---

## 📝 Boas Práticas

- Teste endpoints no Postman ou Insomnia antes de integrar.
- Centralize chamadas HTTP em um serviço (Ex.: `services/api.ts`).
- Use hooks personalizados (`useFetch`, `useWeather`) para isolar lógica de busca.
- Considere usar bibliotecas de gerenciamento de estado de dados (`react-query`, `SWR`) para cache e refetch automático.

---

## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

> Desenvolvido com ❤️ por **Seu Nome**  
> Para dúvidas ou contribuições, abra uma issue ou pull request neste repositório.
