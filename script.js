var telaExibindo = false;


function adicionarAtividade(event) {
    event.preventDefault();

    var titulo = document.getElementById("titulo").value;
    var descricao = document.getElementById("descricao").value;
    var dataFimPrevista = document.getElementById("data-fim-prevista").value;

    var atividadeDiv = document.createElement("div");
    atividadeDiv.classList.add("atividade");

    var tituloElement = document.createElement("h4");
    tituloElement.textContent = titulo;
    tituloElement.classList.add("atividade-titulo");

    var detalhesDiv = document.createElement("div");
    detalhesDiv.classList.add("detalhes");
    detalhesDiv.style.display = "none";

    var descricaoElement = document.createElement("p");
    descricaoElement.textContent = descricao;

    var dataFimPrevistaElement = document.createElement("p");
    dataFimPrevistaElement.textContent = "Data Prevista de Conclusão: " + dataFimPrevista;

    detalhesDiv.appendChild(descricaoElement);
    detalhesDiv.appendChild(dataFimPrevistaElement);

    atividadeDiv.appendChild(tituloElement);
    atividadeDiv.appendChild(detalhesDiv);

    var painelAtividades = document.querySelector(".painel-atividades");
    painelAtividades.appendChild(atividadeDiv);

    tituloElement.addEventListener("click", function() {
        if (detalhesDiv.style.display === "none") {} else {
            detalhesDiv.style.display = "none";
        }
    });

    function exibirDetalhes(titulo, descricao, dataFimPrevista) {
        var modal = document.createElement("div");
        modal.classList.add("modal");

        var closeButton = document.createElement("span");
        closeButton.innerHTML = "&times;";
        closeButton.classList.add("close-btn");
        closeButton.onclick = function() {
            telaExibindo = false;
            modal.remove();
        };

        var tituloElement = document.createElement("h3");
        tituloElement.textContent = titulo;

        var descricaoElement = document.createElement("p");
        descricaoElement.textContent = descricao;

        var dataFimPrevistaElement = document.createElement("p");
        dataFimPrevistaElement.textContent = "Data Prevista de Conclusão: " + dataFimPrevista;

        modal.appendChild(closeButton);
        modal.appendChild(tituloElement);
        modal.appendChild(descricaoElement);
        modal.appendChild(dataFimPrevistaElement);

        document.body.appendChild(modal);
    }
    tituloElement.addEventListener("click", function() {
        if (telaExibindo == false) {
            exibirDetalhes(titulo, descricao, dataFimPrevista);
            telaExibindo = true;
        } else {

        }

    });

}