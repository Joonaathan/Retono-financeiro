// Mostra apenas a aba selecionada
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.style.display = 'block';
  }

  const buttons = document.querySelectorAll('.categorias button');
  buttons.forEach(btn => btn.classList.remove('ativo'));

  const activeButton = Array.from(buttons).find(btn =>
    btn.textContent.toLowerCase().includes(tabId)
  );
  if (activeButton) {
    activeButton.classList.add('ativo');
  }
}

// Inicia com a aba "fones"
document.addEventListener('DOMContentLoaded', () => {
  showTab('fones');
});

// Contador de compras
function addCompra(produto) {
  const span = document.getElementById(produto);
  let count = parseInt(span.textContent);
  count++;
  span.textContent = count;
}
function mostrarLoginAdmin() {
  document.getElementById('admin-login').style.display = 'block';
}

function verificarSenha() {
  const senha = document.getElementById('senha-admin').value;
  if (senha === '3333') {
    document.getElementById('admin-login').style.display = 'none';
    document.getElementById('area-admin').style.display = 'block';

    // Atualiza os contadores no admin
    document.getElementById('admin-fone').textContent = document.getElementById('fone').textContent;
    document.getElementById('admin-smart').textContent = document.getElementById('smart').textContent;
    document.getElementById('admin-lamp').textContent = document.getElementById('lamp').textContent;
  } else {
    alert("Senha incorreta!");
  }
}

function esconderAdmin() {
  document.getElementById('area-admin').style.display = 'none';
}