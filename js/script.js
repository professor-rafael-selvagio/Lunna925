// script.js - Código principal com a lógica de interface

// 🔄 Carrega nomes dos produtos do carrinho (não os objetos)
let carrinhoNomes = JSON.parse(localStorage.getItem('carrinho')) || [];

// Exibir produtos na página
function exibirProdutos() {
  const container = document.getElementById('produtos');
  container.innerHTML = '';

  produtos.forEach(produto => {
    const div = document.createElement('div');
    div.classList.add('produto');

    div.innerHTML = `
      <div class="produto-card">
        <div class="produto-imagem-container">
          <img src="img/${produto.foto}" alt="${produto.nome}" class="produto-imagem">
          <div class="produto-overlay">
            <button id="add-${produto.nome}" class="btn-adicionar">
              <span class="icone-carrinho">🛒</span>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        
        <div class="produto-info">
          <h3 class="produto-nome">${produto.nome}</h3>
          <div class="produto-detalhes">
            <span class="produto-preco">${produto.valor_venda}</span>
            ${produto.tamanhos ? `<span class="produto-tamanhos">Tamanhos: ${produto.tamanhos.join(', ')}</span>` : ''}
          </div>
          <span class="produto-categoria">${produto.categoria}</span>
        </div>
      </div>
    `;


    // Adiciona evento ao botão
    div.querySelector('button').onclick = () => adicionarAoCarrinho(produto.nome);
    container.appendChild(div);
  });
}

// Função para mostrar notificação com cor específica
function mostrarNotificacao(mensagem, tipo = 'info') {
  const notificacao = document.getElementById('notificacao');
  const mensagemNotificacao = document.getElementById('mensagemNotificacao');
  
  // Remover todas as classes de cor anteriores
  notificacao.classList.remove('notificacao-sucesso', 'notificacao-erro', 'notificacao-info');
  
  // Adicionar a classe baseada no tipo
  switch(tipo) {
    case 'sucesso':
      notificacao.classList.add('notificacao-sucesso');
      break;
    case 'erro':
      notificacao.classList.add('notificacao-erro');
      break;
    default:
      notificacao.classList.add('notificacao-info');
  }
  
  mensagemNotificacao.textContent = mensagem;
  notificacao.classList.add('mostrar');
  
  // Remove a notificação após 3 segundos
  setTimeout(() => {
    notificacao.classList.remove('mostrar');
  }, 3000);
}

// Função para adicionar ao carrinho
function adicionarAoCarrinho(nomeProduto) {
  if (!carrinhoNomes.includes(nomeProduto)) {
    carrinhoNomes.push(nomeProduto);
    localStorage.setItem('carrinho', JSON.stringify(carrinhoNomes));
    
    // Mostrar notificação verde de sucesso
    mostrarNotificacao(`${nomeProduto} adicionado ao carrinho!`, 'sucesso');
  } else {
    // Mostrar notificação azul de alerta
    mostrarNotificacao('Este produto já está no seu carrinho!', 'info');
  }

  atualizarCarrinho();
}

// Função para remover produto do carrinho
function removerProduto(index) {
  const nomeProduto = carrinhoNomes[index];
  carrinhoNomes.splice(index, 1);
  localStorage.setItem('carrinho', JSON.stringify(carrinhoNomes));
  atualizarCarrinho();
  
  // Mostrar notificação vermelha de remoção
  mostrarNotificacao(`${nomeProduto} removido do carrinho.`, 'erro');
}

function atualizarCarrinho() {
  const lista = document.getElementById('carrinho');
  lista.innerHTML = '';

  if (carrinhoNomes.length === 0) {
    lista.innerHTML = '<p>Carrinho vazio</p>';
  } else {
    carrinhoNomes.forEach((nome, index) => {
      const produto = produtos.find(p => p.nome === nome);
      const li = document.createElement('li');
      li.textContent = `${produto.nome} - ${produto.valor_venda}`;

      const botao = document.createElement('button');
      botao.textContent = 'Remover';
      botao.onclick = () => removerProduto(index);

      li.appendChild(botao);
      lista.appendChild(li);
    });
  }

  const total = carrinhoNomes.reduce((soma, nome) => {
    const prod = produtos.find(p => p.nome === nome);
    const preco = parseFloat(prod.valor_venda.replace('R$', '').replace(',', '.'));
    return soma + preco;
  }, 0);

  document.getElementById('total').textContent = `Total: R$${total.toFixed(2)}`;
  
  // Atualizar contador no ícone do carrinho (opcional)
  const botaoCarrinho = document.getElementById('botaoCarrinho');
  if (botaoCarrinho) {
    botaoCarrinho.setAttribute('data-count', carrinhoNomes.length);
  }
}

function filtrarProdutos() {
  const termoBusca = document.getElementById('busca').value.toLowerCase();
  const tipoSelecionado = document.getElementById('filtroTipo').value;

  // Exibir botão de limpar quando houver texto
  const clearBtn = document.getElementById('clear-search');
  if (termoBusca) {
    clearBtn.style.display = 'block';
  } else {
    clearBtn.style.display = 'none';
  }

  const container = document.getElementById('produtos');
  container.innerHTML = '';

  // Filtrar produtos
  const produtosFiltrados = produtos.filter(produto => {
    const nomeMatch = produto.nome.toLowerCase().includes(termoBusca);
    const tipoMatch = !tipoSelecionado || produto.categoria === tipoSelecionado;
    return nomeMatch && tipoMatch;
  });
  
  // Exibir produtos filtrados
  produtosFiltrados.forEach(produto => {
    const div = document.createElement('div');
    div.classList.add('produto');

    div.innerHTML = `
      <div class="produto-card">
        <div class="produto-imagem-container">
          <img src="img/${produto.foto}" alt="${produto.nome}" class="produto-imagem">
          <div class="produto-overlay">
            <button id="add-${produto.nome}" class="btn-adicionar">
              <span class="icone-carrinho">🛒</span>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        
        <div class="produto-info">
          <h3 class="produto-nome">${produto.nome}</h3>
          <div class="produto-detalhes">
            <span class="produto-preco">${produto.valor_venda}</span>
            ${produto.tamanhos ? `<span class="produto-tamanhos">Tamanhos: ${produto.tamanhos.join(', ')}</span>` : ''}
          </div>
          <span class="produto-categoria">${produto.categoria}</span>
        </div>
      </div>
    `;

    div.querySelector('.btn-adicionar').onclick = () => adicionarAoCarrinho(produto.nome);
    container.appendChild(div);
  });
  
  // Atualizar texto de resultado
  atualizarResultadoBusca(produtosFiltrados.length, termoBusca, tipoSelecionado);
}

// Função para mostrar resultado da busca
function atualizarResultadoBusca(quantidade, termo, tipo) {
  const mensagemEl = document.getElementById('resultado-busca');
  
  if (quantidade === 0) {
    mensagemEl.textContent = 'Nenhum produto encontrado';
    return;
  }
  
  let mensagem = `Encontrado${quantidade > 1 ? 's' : ''} ${quantidade} produto${quantidade > 1 ? 's' : ''}`;
  
  // Adicionar termos de filtro à mensagem
  if (termo && tipo) {
    const tipoTexto = document.querySelector(`#filtroTipo option[value="${tipo}"]`).textContent;
    mensagem += ` de "${tipoTexto}" contendo "${termo}"`;
  } else if (termo) {
    mensagem += ` contendo "${termo}"`;
  } else if (tipo) {
    const tipoTexto = document.querySelector(`#filtroTipo option[value="${tipo}"]`).textContent;
    mensagem += ` de "${tipoTexto}"`;
  }
  
  mensagemEl.textContent = mensagem;
}

function abrirModal() {
  document.getElementById('modalCarrinho').style.display = 'block';
}

function fecharModal() {
  document.getElementById('modalCarrinho').style.display = 'none';
}

// Função para finalizar compra
function finalizarCompra() {
  if (carrinhoNomes.length === 0) {
    mostrarNotificacao('Seu carrinho está vazio!', 'info');
    return;
  }

  const mensagem = carrinhoNomes.map(nome => {
    const p = produtos.find(prod => prod.nome === nome);
    return `${p.nome} - ${p.valor_venda}`;
  }).join('\n');

  const total = carrinhoNomes.reduce((soma, nome) => {
    const prod = produtos.find(p => p.nome === nome);
    return soma + parseFloat(prod.valor_venda.replace('R$', '').replace(',', '.'));
  }, 0);

  const texto = `Olá, gostaria de comprar:\n${mensagem}\nTotal: R$${total.toFixed(2)}\n\nPor favor, entre em contato.`;

  const url = `https://wa.me/5516991263281?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
  
  // Limpar o carrinho após finalizar compra
  carrinhoNomes = [];
  localStorage.setItem('carrinho', JSON.stringify(carrinhoNomes));
  atualizarCarrinho();
  
  fecharModal();
  mostrarNotificacao('Compra finalizada com sucesso!', 'sucesso');
}

// Inicializar ao carregar a página
window.onload = () => {
  exibirProdutos();
  atualizarCarrinho();
};

function atualizarCarrinho() {
  const lista = document.getElementById('carrinho');
  const carrinhoVazio = document.getElementById('carrinhoVazio');
  lista.innerHTML = '';

  if (carrinhoNomes.length === 0) {
    if (carrinhoVazio) carrinhoVazio.style.display = 'flex';
    lista.style.display = 'none';
  } else {
    if (carrinhoVazio) carrinhoVazio.style.display = 'none';
    lista.style.display = 'block';
    
    carrinhoNomes.forEach((nome, index) => {
      const produto = produtos.find(p => p.nome === nome);
      
      const li = document.createElement('li');
      
      // Criar estrutura de item com imagem
      li.innerHTML = `
        <div class="item-info">
          <img src="img/${produto.foto}" alt="${produto.nome}" class="item-imagem">
          <div class="item-detalhes">
            <h4 class="item-nome">${produto.nome}</h4>
            <p class="item-preco">${produto.valor_venda}</p>
          </div>
        </div>
        <div class="item-acoes">
          <button class="btn-remover">Remover</button>
        </div>
      `;
      
      // Adiciona evento ao botão remover
      li.querySelector('.btn-remover').onclick = () => removerProduto(index);
      
      lista.appendChild(li);
    });
  }

  const total = carrinhoNomes.reduce((soma, nome) => {
    const prod = produtos.find(p => p.nome === nome);
    const preco = parseFloat(prod.valor_venda.replace('R$', '').replace(',', '.'));
    return soma + preco;
  }, 0);

  document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
  
  // Atualizar contador no ícone do carrinho
  const botaoCarrinho = document.getElementById('botaoCarrinho');
  if (botaoCarrinho) {
    botaoCarrinho.setAttribute('data-count', carrinhoNomes.length);
  }
}

function limparBusca() {
  document.getElementById('busca').value = '';
  filtrarProdutos();
}

