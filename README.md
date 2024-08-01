<pre style="font-size: 0.6rem;">

                              \\\\\\
                           \\\\\\\\\\\\
                          \\\\\\\\\\\\\\\
-------------,-|           |C>   // )\\\\|    .o88b. db   db  .d8b.  db    db  .d8b.  d888888b d888888b d88888b
           ,','|          /    || ,'/////|   d8P  Y8 88   88 d8' '8b 88    88 d8' '8b '~~88~~' '~~88~~' 88'    
---------,','  |         (,    ||   /////    8P      88ooo88 88ooo88 Y8    8P 88ooo88    88       88    88ooooo 
         ||    |          \\  ||||//''''|    8b      88~~~88 88~~~88 '8b  d8' 88~~~88    88       88    88~~~~~ 
         ||    |           |||||||     _|    Y8b  d8 88   88 88   88  '8bd8'  88   88    88       88    88.     
         ||    |______      ''''\____/ \      'Y88P' YP   YP YP   YP    YP    YP   YP    YP       YP    Y88888P
         ||    |     ,|         _/_____/ \
         ||  ,'    ,' |        /          |                 ___________________________________________
         ||,'    ,'   |       |         \  |              / \                                           \ 
_________|/    ,'     |      /           | |             |  |                                            | 
_____________,'      ,',_____|      |    | |              \ |      chavatte@duck.com                     | 
             |     ,','      |      |    | |                |                        chavatte.42web.io   | 
             |   ,','    ____|_____/    /  |                |    ________________________________________|___
             | ,','  __/ |             /   |                |  /                                            /
_____________|','   ///_/-------------/   |                 \_/____________________________________________/ 
              |===========,'                                                                                    
			  

</pre>

<div style="display: flex; align-items: center;">
  <img src="./src/images/imagem-destaque.png" alt="Imagem de Destaque" style="max-width: 100px; height: auto;">
  <img src="./src/images/logo-acessaBR.svg" alt="Logo do AcessaBR" style="margin-left: 20px;">
</div>
<h2 style="margin-top: 10px;">Guia de Acessibilidade em São Carlos-SP</h2>

O AcessaBR é um projeto web desenvolvido em React que visa promover a inclusão e acessibilidade em São Carlos-SP. A aplicação facilita o encontro entre pessoas com deficiência e estabelecimentos que oferecem recursos de acessibilidade, como rampas, elevadores, sinalização em braile, entre outros.

### Funcionalidades

* **Listagem de Locais Acessíveis:** Apresenta uma lista de locais na cidade que possuem recursos de acessibilidade, com informações detalhadas sobre cada um.
* **Filtros:** Permite filtrar os locais por categorias (parques, museus, mercados, etc.).
* **Ordenação:** Possibilita ordenar os locais por distância em relação à localização do usuário ou em ordem alfabética.
* **Geolocalização:** Utiliza a localização do usuário para calcular a distância dos locais e exibir os mais próximos primeiro.
* **Informações Detalhadas:** Cada local possui um card com foto, descrição, link para mais informações e ícones indicando os recursos de acessibilidade disponíveis.

### Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **React Router:** Roteamento para navegação entre as páginas da aplicação.
* **Swiper:** Biblioteca para criar o carrossel de locais.
* **Geolib:** Biblioteca para calcular distâncias geográficas.
* **Sass (SCSS):** Pré-processador CSS para facilitar a estilização.
* **Context API:** Gerenciamento de estados globais da aplicação (filtros, localização do usuário).

### Como Executar o Projeto

1. **Clone o repositório:**

   **Bash**

   ```
   git clone https://github.com/chavatte/acessabr.git
   ```

2. **Instale as dependências:**

   **Bash**

   ```
   cd acessabr
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento:**

   **Bash**

   ```
   yarn start
   ```

4. **Acesse a aplicação no navegador:**

   ```
   http://localhost:3000/SP/São%20Carlos
   ```

### Estrutura do Projeto

* **`src/api/places.json`:** Contém os dados dos locais acessíveis.
* **`src/components/`:** Contém os componentes reutilizáveis da aplicação.
* **`src/contexts/`:** Contém os contextos para gerenciar estados globais.
* **`src/pages/`:** Contém as páginas da aplicação.
* **`src/routes/`:** Define as rotas da aplicação.
* **`src/styles/`:** Contém os arquivos de estilo (Sass).

### Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema, tiver sugestões de melhorias ou quiser adicionar novos recursos, **sinta-se à vontade para abrir uma issue ou enviar um pull request.**

## Versão Online
O AcessaBR também está disponível online para testes e demonstração:

[AcessaBR - São Carlos](https://chavatte-acessabr.vercel.app/SP/S%C3%A3o%20Carlos)
