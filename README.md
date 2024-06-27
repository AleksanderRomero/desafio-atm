# Desafio Técnico: Caixa Eletrônico API
# Aleksander Romero

## Descrição
Esta API simula o funcionamento de um caixa eletrônico. Ela recebe um valor de saque desejado e retorna a quantidade de cédulas de cada valor necessárias para compor esse saque, utilizando a menor quantidade de cédulas possível. As cédulas consideradas são: 100, 50, 20, 10, 5 e 2.

## Como Executar

### Pré-requisitos
Certifique-se de ter o Node.js e o npm instalados em sua máquina.

### Passo a Passo

1. Clone o repositório:
```
git clone https://github.com/AleksanderRomero/desafio-atm
```

2. Navegue até o diretório do projeto:
```
cd desafio-atm
```

3. Instale as dependências:
```
npm install
```

4. Execute a aplicação:
```
npm start
```

### Teste o endpoint
Utilize o cURL, Postman ou outra ferramenta para fazer requisições ao endpoint `/api/saque`.

## Testes

Para executar os testes, utilize o seguinte comando:
```
npm test
```

### Testes Incluídos
- Testes de Sucesso: Verifica se a API retorna a quantidade correta de cédulas para um valor de saque válido.
- Testes de Erro: Verifica se a API retorna erros apropriados para valores de saque inválidos ou entradas inválidas.

## Desafios

- Implementar uma lógica eficiente para calcular a menor quantidade de cédulas.
- Garantir que a API lide adequadamente com entradas inválidas.

## Requisitos

1. **Algoritmo para saque**: A lógica deve ser capaz de calcular a quantidade mínima de cédulas necessárias para um valor de saque dado.
2. **Endpoint para saque**:
  - **Entrada**: Valor do saque desejado (inteiro positivo).
  - **Saída**: Quantidade de cédulas de cada valor.

## Formato do Endpoint

- **URL**: `/api/saque`
- **Método**: POST
- **Entrada** (JSON):
```json
{
  "valor": 380
}
```
- **Saída** (JSON):
```json
{
  "100": 3,
  "50": 1,
  "20": 1,
  "10": 1,
  "5": 0,
  "2": 0
}
```

## Exemplos de Uso

- **Requisição**:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"valor": 380}' http://localhost:5000/api/saque
```
- **Resposta**:
```json
{
  "100": 3,
  "50": 1,
  "20": 1,
  "10": 1,
  "5": 0,
  "2": 0
}
```

## Considerações Finais

Este projeto foi desenvolvido para simular um caixa eletrônico simples. A lógica foi otimizada para garantir a menor quantidade de cédulas possíveis para qualquer valor de saque permitido. Quaisquer dúvidas ou problemas, por favor, abra uma issue no repositório.

# desafio-atm
