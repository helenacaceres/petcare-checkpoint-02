# Prompts utilizados com IA generativa

## Prompt 1 — Planejamento do projeto

Preciso de ajuda em FastAPI e JavaScript. Preciso criar um projeto acadêmico com backend em FastAPI e frontend em HTML + JavaScript. O tema não pode ser filmes, séries, rede social ou lista de tarefas. Me ajude a escolher um tema simples, criativo e que permita implementar POST, GET para listar todos, GET por ID com erro 404 e GET com filtro por query parameter.

## Prompt 2 — Criação do backend

Crie um backend em FastAPI para um sistema de cadastro de pets de uma clínica veterinária. O modelo deve usar Pydantic com pelo menos 4 campos, o ID deve ser gerado automaticamente pelo backend, deve ter endpoint POST para cadastrar, endpoint GET /pets para listar, endpoint GET /pets/{id} com retorno 404 quando não existir, e endpoint GET /pets?especie=... para filtrar por espécie.

## Prompt 3 — Criação do frontend

Crie um frontend simples usando HTML e JavaScript separado em script.js. O frontend deve ter formulário de cadastro de pets, listagem de todos os pets, busca por ID e filtro por espécie. Todas as chamadas para o backend devem usar fetch().

## Prompt 4 — Correção de erro no filtro

O filtro por espécie não está funcionando corretamente. Quando acesso /pets?especie=gato, a API retorna todos os itens em vez de retornar apenas os pets da espécie escolhida. Analise a função GET /pets e corrija para que ela compare a espécie cadastrada com o parâmetro informado na URL.

## Prompt 5 — Preparação da entrega

Me ajude a organizar a entrega final em PDF com contextualização do projeto, link do GitHub, resumo das funcionalidades, endpoints utilizados e prompts usados com IA generativa.
