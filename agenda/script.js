function adicionarContato() {
    const nomeInput = document.getElementById('nome');
    const telefoneInput = document.getElementById('telefone');
    const tabelaContatos = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];

    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();

    if (nome && telefone) {
        const novaLinha = tabelaContatos.insertRow();

        const colunaNome = novaLinha.insertCell();
        const colunaTelefone = novaLinha.insertCell();

        colunaNome.textContent = nome;
        colunaTelefone.textContent = telefone;

        // Limpa o formulário após adicionar o contato
        nomeInput.value = '';
        telefoneInput.value = '';
    } else {
        alert('Por favor, preencha nome e telefone.');
    }
}