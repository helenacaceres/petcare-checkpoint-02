const API_URL = "http://127.0.0.1:8000";

const formPet = document.getElementById("formPet");
const mensagem = document.getElementById("mensagem");
const listaPets = document.getElementById("listaPets");
const resultadoBusca = document.getElementById("resultadoBusca");

formPet.addEventListener("submit", async function (event) {
    event.preventDefault();

    const pet = {
        nome: document.getElementById("nome").value,
        especie: document.getElementById("especie").value,
        idade: Number(document.getElementById("idade").value),
        peso: Number(document.getElementById("peso").value),
        tutor: document.getElementById("tutor").value
    };

    try {
        const resposta = await fetch(`${API_URL}/pets`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pet)
        });

        const dados = await resposta.json();

        mensagem.textContent = `Pet cadastrado com sucesso! ID: ${dados.id}`;
        formPet.reset();
        listarPets();
    } catch (erro) {
        mensagem.textContent = "Erro ao cadastrar pet. Verifique se o backend está rodando.";
    }
});

async function listarPets() {
    try {
        const resposta = await fetch(`${API_URL}/pets`);
        const pets = await resposta.json();

        mostrarLista(pets);
    } catch (erro) {
        listaPets.innerHTML = "<li>Erro ao carregar a lista. Verifique se o backend está rodando.</li>";
    }
}

async function buscarPorId() {
    const id = document.getElementById("buscaId").value;

    if (!id) {
        resultadoBusca.textContent = "Digite um ID para buscar.";
        return;
    }

    try {
        const resposta = await fetch(`${API_URL}/pets/${id}`);

        if (resposta.status === 404) {
            resultadoBusca.textContent = "Pet não encontrado.";
            return;
        }

        const pet = await resposta.json();

        resultadoBusca.textContent =
            `ID: ${pet.id} | Nome: ${pet.nome} | Espécie: ${pet.especie} | Idade: ${pet.idade} | Peso: ${pet.peso}kg | Tutor: ${pet.tutor}`;
    } catch (erro) {
        resultadoBusca.textContent = "Erro na busca. Verifique se o backend está rodando.";
    }
}

async function filtrarPorEspecie() {
    const especie = document.getElementById("filtroEspecie").value;

    if (!especie) {
        listarPets();
        return;
    }

    try {
        const resposta = await fetch(`${API_URL}/pets?especie=${especie}`);
        const pets = await resposta.json();

        mostrarLista(pets);
    } catch (erro) {
        listaPets.innerHTML = "<li>Erro ao filtrar. Verifique se o backend está rodando.</li>";
    }
}

function mostrarLista(pets) {
    listaPets.innerHTML = "";

    if (pets.length === 0) {
        listaPets.innerHTML = "<li>Nenhum pet encontrado.</li>";
        return;
    }

    pets.forEach(function (pet) {
        const item = document.createElement("li");

        item.textContent =
            `ID: ${pet.id} | Nome: ${pet.nome} | Espécie: ${pet.especie} | Idade: ${pet.idade} | Peso: ${pet.peso}kg | Tutor: ${pet.tutor}`;

        listaPets.appendChild(item);
    });
}

listarPets();
