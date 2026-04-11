const carrinho = document.getElementById('carrinho');
const icone = document.getElementById('iconeCarrinho');
const lista = document.getElementById("listaCarrinho");

// abrir pelo ícone
icone.addEventListener('click', () => {
    carrinho.classList.add("ativo");
});

// fechar
function fecharCarrinho() {
    carrinho.classList.remove("ativo");
}

// adicionar produto
function adicionarCarrinho(nome, img) {

    carrinho.classList.add("ativo");

    const itens = document.querySelectorAll(".item");

    // 🔍 verifica se já existe
    for (let item of itens) {
        const titulo = item.querySelector("h3").innerText;

        if (titulo === nome) {
            // já existe → aumenta quantidade
            const span = item.querySelector("span");
            span.innerText = parseInt(span.innerText) + 1;

            verificarCarrinhoVazio();
            return; // 🔥 MUITO IMPORTANTE (para não duplicar)
        }
    }

    // 🆕 se NÃO existe → cria novo
    const item = document.createElement("div");
    item.classList.add("item");

    item.innerHTML = `
        <img src="${img}" width="50">
        <h3>${nome}</h3>

        <div class="quantidade">
            <button onclick="diminuir(this)">-</button>
            <span>1</span>
            <button onclick="aumentar(this)">+</button>
        </div>
    `;

    lista.appendChild(item);

    verificarCarrinhoVazio();
}

// aumentar
function aumentar(btn) {
    const span = btn.parentElement.querySelector("span");
    let valor = parseInt(span.innerText);
    span.innerText = valor + 1;
}

// diminuir
function diminuir(btn) {
    const item = btn.closest(".item");
    const span = item.querySelector("span");
    let valor = parseInt(span.innerText);

    if (valor > 1) {
        span.innerText = valor - 1;
    } else {
        item.remove();
        verificarCarrinhoVazio();
    }
}

// verificar vazio
function verificarCarrinhoVazio() {
    const msg = document.getElementById("vazioMsg");

    if (lista.children.length === 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
    }
}

const lupa = document.querySelector(".icon1");
const searchBox = document.querySelector(".search-box");
const input = document.getElementById("searchInput");

// abrir ao clicar na lupa
lupa.addEventListener("click", () => {
    searchBox.classList.toggle("active");
    input.focus();
});

// ao apertar ENTER
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        let valor = input.value.toLowerCase();

        if (valor.includes("café") || valor.includes("cappuccino") || valor.includes("Cafe")|| valor.includes("menu") || valor.includes("mocaccino") || valor.includes("Café com Leite")) {
            document.getElementById("Menu").scrollIntoView({
                behavior: "smooth"
            });
        } else if (valor.includes("sobre") || valor.includes("nós") || valor.includes("sobrenos") || valor.includes("nos")) {
            document.getElementById("Sobre").scrollIntoView({
                behavior: "smooth"
            });
        }
    }
});