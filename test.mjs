// Importar a classe CaixaDaLanchonete
import CaixaDaLanchonete from './src/caixa-da-lanchonete.js';

// Criar uma instância do CaixaDaLanchonete
const caixa = new CaixaDaLanchonete();

// Exemplo 1: Compra de café com chantily
const exemplo1 = caixa.calcularValorDaCompra('debito', ['cafe,1', 'chantily,1']);
console.log(exemplo1); // Deve imprimir "R$ 4,50"

// Exemplo 2: Compra de chantily sem café
const exemplo2 = caixa.calcularValorDaCompra('debito', ['chantily,1']);
console.log(exemplo2); // Deve imprimir "Item extra não pode ser pedido sem o principal"

// Exemplo 3: Compra de combo e dois cafés
const exemplo3 = caixa.calcularValorDaCompra('credito', ['combo1,1', 'cafe,2']);
console.log(exemplo3); // Deve imprimir "R$ 15,96"

// Usar node --experimental-modules test.mjs
