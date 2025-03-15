# Q5 - ORM vs Query Builder

## Enunciado

Compare o uso de um ORM (como Prisma ou Sequelize) com um Query Builder (como Knex). Quais são as vantagens e desvantagens de cada abordagem?

## Passo 1: Análise comparativa (ORM vs Query Builder)

### 1. Tabela comparativa (Foco e Abstração)

|               | ORM (Prisma/Sequelize)                    | Query Builder (Knex)                             |
| ------------- | ----------------------------------------- | ------------------------------------------------ |
| **Abstração** | Alto nível (mapeamento objeto-relacional) | Médio nível (construção programática de queries) |
| **Foco**      | Modelos de dados como objetos             | Geração dinâmica de SQL                          |

---

### 2. Vantagens

### ORM (Prisma/Sequelize)

- Produtividade Acelerada:

  - Operações CRUD pré-definidas

  - Relacionamentos automáticos

  - Migrações integradas

- Segurança:

  - Prevenção de SQL Injection nativa

  - Validação de tipos automática

- Manutenção:

  - Schema centralizado

  - Atualizações em cascata

### Query Builder (Knex)

- Flexibilidade:

  - Controle total sobre queries

  - Combinação com SQL raw fácil

- Performance:

  - Otimização manual de queries

  - Menos overhead de abstração

- Portabilidade:

  - Suporte multi-banco eficiente

  - Transições entre DBs mais suaves

### 3. Desvantagens

### ORM

- Complexidade:

  - Curva de aprendizado íngreme

  - Excesso em relacionamentos complexos

- Performance:

  - N+1 queries em relacionamentos

  - Dificuldade em otimizações avançadas

- Limitações:

  - Dificuldade com operações bulk complexas

  - SQL muito customizado requer "escape hatches"

### Query Builder

- Boilerplate:

  - Mais código para relações 1:N/N:N

  - Validação manual de dados

- Manutenção:

  - Schemas dispersos

  - Migrações não nativas (requer pacotes extras)

- Segurança:

  - Risco maior de SQL Injection se mal utilizado

  - Tipagem menos rigorosa

## Conclusão

Concluímos que a escolha entre ORM e Query Builder depende dos requisitos específicos do projeto. Ambos têm suas vantagens e desvantagens, e a escolha deve ser baseada na complexidade do projeto, na equipe e nas necessidades específicas do negócio.
