from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pet(BaseModel):
    nome: str
    especie: str
    idade: int
    peso: float
    tutor: str

pets = []
proximo_id = 1

@app.get("/")
def inicio():
    return {"mensagem": "API PetCare funcionando"}

@app.post("/pets")
def cadastrar_pet(pet: Pet):
    global proximo_id

    novo_pet = {
        "id": proximo_id,
        "nome": pet.nome,
        "especie": pet.especie,
        "idade": pet.idade,
        "peso": pet.peso,
        "tutor": pet.tutor
    }

    pets.append(novo_pet)
    proximo_id += 1

    return novo_pet

@app.get("/pets")
def listar_pets(especie: str | None = Query(default=None)):
    if especie:
        pets_filtrados = [
            pet for pet in pets
            if pet["especie"].lower() == especie.lower()
        ]
        return pets_filtrados

    return pets

@app.get("/pets/{pet_id}")
def buscar_pet_por_id(pet_id: int):
    for pet in pets:
        if pet["id"] == pet_id:
            return pet

    raise HTTPException(status_code=404, detail="Pet não encontrado")
