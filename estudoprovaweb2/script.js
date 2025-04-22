const inputdocep = document.querySelector("#inputcep")
const respostacep = document.querySelector("#respostacep")
const form1 = document.querySelector("form")

form1.addEventListener("submit", async (event) => {

    event.preventDefault();

    const cep = inputdocep.value.replace("-", "");

    if (cep.length === 8) {

        try {
            const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const dados = await resposta.json();

            if (dados.erro !== "true") {
                respostacep.innerHTML =
                    `<p>${dados.logradouro}, ${dados.bairro} - ${dados.localidade},${dados.uf}.</p>`;
            } else {
                alert(`Erro ao obter dados ${cep}! `);
            }
        } catch (erro) {
            alert(`Erro ao obter dados ${cep}! `)
        }
    }

})
