# Q3 - Refatoração Prática

## Enunciado

Refatore o [`código`](./utils/main.js) utilizando boas práticas para torná-lo mais limpo, legível e de fácil manutenção.

## Passo 1: Refatoração do código

```javascript
class PrimeNumberGenerator {
  static generatePrimes(primeCount = 1000) {
    const primes = [2]; // Primeiro primo
    let candidate = 3; // Candidato a primo
    let order = 2; // Ordem do candidato
    const multiples = new Array(30).fill(0); // Armazenamento de múltiplos
    let square = 9; // Quadrado do candidato

    // Verificação de primalidade
    while (primes.length < primeCount) {
      let isPrime = false; // Começa como falso

      // Verificação de múltiplos
      while (!isPrime) {
        isPrime = true; // Começa como primo

        // Verificação de múltiplos
        if (candidate === square) {
          order++;
          square = primes[order] ** 2; // Atualiza quadrado
          multiples[order - 2] = candidate; // Atualiza armadilha
        }

        // Verificação de múltiplos
        for (let i = 2; i < order && isPrime; i++) {
          // Verifica se o candidato é múltiplo
          while (multiples[i] < candidate) {
            multiples[i] += 2 * primes[i]; // Atualiza armadilha
          }

          // Verifica se o candidato é múltiplo
          if (multiples[i] === candidate) {
            isPrime = false; // Não é primo
          }
        }

        // Verifica se o candidato é múltiplo
        if (!isPrime) {
          candidate += 2; // Avança para o próximo candidato
        }
      }

      // Adiciona ao array de primos
      primes.push(candidate);
      candidate += 2; // Avança para o próximo candidato
    }

    return primes; // Retorna os primos
  }

  // Imprime os primos de forma paginada
  static printPaginatedPrimes(primes, rowsPerPage = 50, columnsPerPage = 4) {
    const primesPerPage = rowsPerPage * columnsPerPage; // Lotação por página
    const totalPages = Math.ceil(primes.length / primesPerPage); // Total de páginas

    // Imprime cada página
    for (let page = 0; page < totalPages; page++) {
      console.log(`\n Página ${page + 1}`); // Header
      const pageStart = page * primesPerPage; // Início da página

      // Imprime linha por linha
      for (let row = 0; row < rowsPerPage; row++) {
        const rowValues = []; // Linha vazia
        const rowIndex = pageStart + row; // Índice da linha

        // Imprime coluna por coluna
        for (let col = 0; col < columnsPerPage; col++) {
          const primeIndex = rowIndex + col * rowsPerPage; // Índice da coluna
          if (primeIndex < primes.length) {
            // Evita ultrapassar o tamanho do array
            rowValues.push(primes[primeIndex]); // Adiciona ao array
          }
        }

        // Imprime linha
        if (rowValues.length > 0) {
          console.log(rowValues.join(" │ ")); // Separador de linha
        }
      }
    }
  }
}

// Executa o programa
const primes = PrimeNumberGenerator.generatePrimes(1000); // Gera 1000 primos
PrimeNumberGenerator.printPaginatedPrimes(primes); // Imprime os primos
```

## Conclusão

O código foi refatorado para melhorar a legibilidade, manutenção e escalabilidade.
