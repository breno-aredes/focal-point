# Focal-Point - Teste Técnico Legaplan

Este projeto é uma aplicação de lista de tarefas com funcionalidades para adicionar, excluir e marcar tarefas como concluídas.

## Tecnologias Utilizadas:

- **Next.js**: Framework utilizado para a criação da aplicação React.
- **React**: Biblioteca JavaScript para construção de interfaces.
- **SCSS**: Utilizado para a estilização dos componentes.
- **React Icons**: Biblioteca de ícones utilizada na interface.
- **TypeScript**: Linguagem de programação usada para adicionar tipagem estática ao código.
- **React-modal**: Biblioteca utilizada para a criação e gerenciamento de modais, permitindo uma experiência de usuário dinâmica ao exibir conteúdos como formulários e confirmações em uma janela sobreposta à interface principal.

## Funcionalidades:

- Adicionar novas tarefas.
- Excluir tarefas existentes.
- Marcar tarefas como concluídas.

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos:

- **Node.js** instalado
- **npm** gerenciador de pacotes

### Passos:

1.  Clone o repositório:

```bash
git clone git@github.com:breno-aredes/focal-point.git
```

2.  Navegue até o diretório do projeto:

```bash
cd focal-point
```

3.  Instale as dependências:

```bash
npm install
```

4.  Execute o projeto:

```bash
npm run dev
```

5.  Abra o navegador e acesse:

```bash
http://localhost:3000
```

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `app/`: paginas do aplicativo
- `components/`: Contém os componentes como `Header`, `Main`, `Modal`, `Button` e `CheckBox`.
- `styles/`: Arquivos SCSS usados para estilização.
- `types/`: Definições de tipos do TypeScript para os componentes.
- `assets/`: imagens

## Considerações Finais:

- Este projeto foi desenvolvido como parte de um teste técnico.
- O foco principal é a implementação de funcionalidades básicas de uma To-Do List.
- As instruções foram ajustadas para refletir a estrutura do projeto e os comandos mais comuns para rodar a aplicação.
- Foram adicionadas mensagens personalizadas para os casos em que não houver tarefas ou quando todas as tarefas estiverem concluídas.
- Foi implementada a persistência de dados com o uso de local storage, permitindo que as tarefas sejam mantidas entre sessões.
- A funcionalidade de inserção do nome do usuário não foi implementada para manter o escopo alinhado com o que foi solicitado.
