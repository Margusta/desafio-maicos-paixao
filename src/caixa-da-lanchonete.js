class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {

        const configuracoes = require ('./configuracoes.json');
    console.log(configuracoes.name);
    console.log(configuracoes.version);
    console.log(configuracoes.type);
    
        const cardapio = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };

        const taxaCredito = 0.03;
        const descontoDinheiro = 0.05;

        const itensPrincipais = [];
        const itensExtras = [];

        for (const item of itens) {
            const [codigo, quantidade] = item.split(',');
            if (cardapio[codigo] === undefined) {
                return "Item inválido!";
            }

            if (codigo !== 'chantily' && codigo !== 'queijo') {
                const itemPrincipal = codigo === 'cafe' ? 'cafe' : 'sanduiche';
                if (!itensPrincipais.includes(itemPrincipal)) {
                    return "Item extra não pode ser pedido sem o principal";
                }
                itensExtras.push({ codigo, quantidade: parseInt(quantidade) });
            } else {
                itensPrincipais.push(codigo);
            }
        }
        let valorTotal = 0;
        for (const item of itensPrincipais) {
            valorTotal += cardapio[item];
        }
        for (const item of itensExtras) {
            valorTotal += cardapio[item.codigo] * item.quantidade;
        }
        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= (1 - descontoDinheiro);
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= (1 + taxaCredito);
        } else if (metodoDePagamento !== 'debito') {
            return "Forma de pagamento inválida!";
        }
        return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
    }
}
export default CaixaDaLanchonete;
