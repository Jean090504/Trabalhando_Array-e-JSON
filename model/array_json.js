/*******************************************************************************************************************************************
* Objetivo: Manipular dados utilizando Array e JSON
* Data: 05/03/2026
* Autor: Jean Costa
* Versão 1.0
********************************************************************************************************************************************/

/*
    []  -> Representa uma ARRAY
    {}  -> Representa um objeto do tipo JSON

    Array   -> Um objeto na memória que permite trabalhar com vários valores em um único objeto
    
    let nome = 'José'
    let nome2 = 'Maria'
    let nome3 = 'João'

        indice      0       1       2
    let nome = ['José', 'Maria', 'João']

    JSON    -> Um objeto na memória que permite trabalhar com CHAVE E VALOR

    let nome = 'Jean'
    let email = 'jeancosta@gmail.com'
    let telefone = '232132131'

    let cliente = {
                    "nome": "Matheus Pereira",
                    "cargo": "Desenvolvedor",
                    "salarioBase": 3200,
                    "id": 910
                }
*/

//Formas de criar um array
const listaNome = ['Jean', 'Larissa', 'Thiago', 'Maria', 'Flavio']
const listaCliente = []
const listaFornecedores = []

const exibirDados = () =>{
    /* //Exibe um objeto do tipo ARRAY em tabela
    console.table(listaNome)

    //Retorna o valor do array
    console.log(listaNome[2])

    //Retorna o tipo de dados de um indice do array
    console.log(typeof(listaNome[2])) 
    
    console.log(`O nome do cliente é: ${listaNome[0]}`) */

    console.log('******** WHILE ********')
    //Estrutura de repetição
    let i = 0
    while(i < listaNome.length){
        console.log(`O nome do cliente é: ${listaNome[i]}`)
        i++
    }

    console.log('******** FOR ********')
    for(let indice = 0; indice < listaNome.length ; indice++){
        console.log(`O nome do cliente é: ${listaNome[indice]}`)
    }

    //Percorre o array e para cada item do array ele te retorna o conteúdo do indice 
    console.log('******** FOR EACH ********')
    listaNome.forEach(function(cliente){
        console.log(`O nome do cliente é: ${cliente}`)

    })

    //Retorna o indice do elemento, e será preciso colocar dentro do objeto do array
    //Ex: listaNome[nomeCliente]
    //Praticamente igual ao FOR e WHILE
    console.log('******** FOR IN ********')
    for(nomeCliente in listaNome){
        console.log(`O nome do cliente é: ${listaNome[nomeCliente]}`)
    }

    //Percorre o array e retorna somente o conteúdo de cada indice, sendo muito parecido com o forEach
    console.log('******** FOR OF ********')
    for(cliente of listaNome){
        console.log(`O nome do cliente é: ${cliente}`)
    }


}

const manipularDados = () =>{
    listaCliente[0] = 'Jean'
    listaCliente[1] = 'Thiago'

    console.log(listaCliente)

    //Push -> Permite adicionar novos valores no array, sempre no final da lista
    listaFornecedores.push('Luiz da Silva')
    listaFornecedores.push('Jonatas Oliveira')
    listaFornecedores.push('Carlos Pereira')
    listaFornecedores.push('Jean Costa', 'Thiago Costa', 'Paulo Wagner')

    console.log(listaFornecedores)

    //Permite adicionar novos elementos no array sempre no INICIO da lista
    listaFornecedores.unshift("Ana Carolina")
    console.table(listaFornecedores)

    //Permite remover elementos do FINAL da lista
    listaFornecedores.pop()
    console.table(listaFornecedores)

    //Permite remover elementos do INICIO da lista
    listaFornecedores.shift()
    console.table(listaFornecedores)

    //Permite remover um elemento baseado no indice da lista
    // splice(indice, qtde de elementos)
    listaFornecedores.splice(2,1)
    console.table(listaFornecedores)

    // Nesse caso ele não exclui do array, porém consegue adicionar e manipular o local do indice que irá adicionar
    //Indice, 0 => significa que não será removido nada, novo conteúdo
    listaFornecedores.splice(4,0, 'Jonas Souza')
    console.table(listaFornecedores)
}

const removerItem = (nome) =>{

    //Retorna o indice de um elemento fazendo a busca pelo valor
    let indice = listaNome.indexOf(nome)
    if(indice != 1){
        listaNome.splice(indice,1)
        return true
    }else{
        return false
    }

    // for(indice in listaDeNomes){
    //     if(listaDeNomes[indice] == nome){
    //         listaDeNomes.splice(indice,1)
    //     }
    // }

}

const verificarItem = (nome) =>{
    //Verifica a exixtencia de um conteudo dentro de uma lista (true/false)
    return listaNome.includes(nome)
}

const quantidadeItens = (nome) =>{
    let cont = 0
    listaNome.forEach(function(item){
        if(String(item).toUpperCase() == String(nome).toUpperCase())
            cont +=1
    })
    return cont
}

const criandoDadosJSON = () =>{
    let aluno = {
                    "nome": "Jean",
                    "ra": 123456,
                    "telefone": "119534531",
                    "email": "jean@gmail.com"
                }
    
    // Adiciona um novo atributo ao JSON
    aluno.sexo = "Masculino"

    //Exibe o objeto completo
    console.log(aluno)

    //Exibe apenas o objeto nome
    console.log(aluno.nome)

    delete aluno.telefone
    console.log(aluno)
}

const cadastroProdutos = () =>{
    let cores = [
        {"id": 1, "nome_cor": "Branca"},
        {"id": 2, "nome_cor": "Preta"},
        {"id": 3, "nome_cor": "Azul"},
        {"id": 4, "nome_cor": "Rosa"},
        {"id": 5, "nome_cor": "Cinza"}
    ]

    let marcas = [
        {"id": 1, "nome_marca": "Apple",        "telefone": "156151516", "email": "apple@gmail.com"},
        {"id": 2, "nome_marca": "LG",           "telefone": "456546515", "email": "lg@gmail.com"},
        {"id": 3, "nome_marca": "Dell",         "telefone": "511651226", "email": "dell@gmail.com"},
        {"id": 4, "nome_marca": "Razer",        "telefone": "759747562", "email": "razer@gmail.com"},
        {"id": 5, "nome_marca": "Logitech",     "telefone": "852814194", "email": "logitech@gmail.com"},
        {"id": 6, "nome_marca": "Positivo",     "telefone": "026424756", "email": "positivo@gmail.com"},
        {"id": 7, "nome_marca": "Multilaser",   "telefone": "123544548", "email": "multilaser@gmail.com"}
    ]

    let produtos = [ 
        {
        "id": 1, 
        "nome_produto": "Monitor", 
        "descricao": "27 Polegadas", 
        "marca": [marcas[2].nome_marca],
        "quantidade_disponivel": 20,
        "cor": [cores[4], cores[1]],
        "valor": 800.50
        },
        {
        "id": 2, 
        "nome_produto": "Fone", 
        "descricao": "Fone sem fio de arco", 
        "marca": [marcas[5].nome_marca],
        "quantidade_disponivel": 5,
        "cor": [cores[0], cores[4]],
        "valor": 250
        },
        {
            "id": 3, 
            "nome_produto": "Teclado", 
            "descricao": "Teclado Mecânico RGB", 
            "marca": [marcas[4].nome_marca],
            "quantidade_disponivel": 200,
            "cor": cores,
            "valor": 150
        },
        {
            "id": 4, 
            "nome_produto": "Mouse", 
            "descricao": "Mouse sem fio", 
            "marca": [marcas[0].nome_marca, marcas[4].nome_marca, marcas[6].nome_marca],
            "quantidade_disponivel": 500,
            "cor": [cores[0], cores[1], cores[4]],
            "valor": 100
        }
    ]

    //Percorre o objeto de produto para trazer os dados de cada produto
    produtos.forEach((itemProdutos) => {
        console.log(`\nProduto: ${itemProdutos.nome_produto}`)
        console.log(`\nDescrição: ${itemProdutos.descricao}`)
        console.log(`\nQuantidade disponível: ${itemProdutos.quantidade_disponivel} \n`)

        console.log('---------------------------')
        
        //Percorre o objeto de marca dentro de cada produto, para trazer as marcas
        itemProdutos.marca.forEach((itemMarca) => {
            console.log(`Marca: ${itemMarca}`)
        })

        console.log('---------------------------')

        //Percorre o objeto cor dentro de cada produto, para trazer as cores
        itemProdutos.cor.forEach((itemCor) => {
            console.log(`Cor disponível: ${itemCor.nome_cor}`)
        })

        console.log('---------------------------')

        console.log(`Valor do produto: ${itemProdutos.valor}`)

        console.log('---------------------------')
    })

    //Pesquisando um produto pelo nome
    let nome = 'Monitor'
    console.log(`Produto encontrado: `)

    produtos.forEach((itemProduto) =>{
        if(String(itemProduto.nome_produto).toLocaleUpperCase() == String(nome).toLocaleUpperCase()){
            console.log(itemProduto)
        }

    })

    //Pesquisando produtos pela cor
    let corBusca = 'Branca'
    console.log(`\n--- Pesquisando produtos com a cor: ${corBusca} ---`)
    let status = false

    
    produtos.forEach((itemProduto) =>{
        itemProduto.cor.forEach((itemCor) =>{
            if (String(itemCor.nome_cor).toUpperCase() == String(corBusca).toUpperCase()) {
                console.log(itemProduto)
                status = true
            }
        })
    })

    if(!status)
        console.log('Nenhum produto encontrado com essa cor.')
    

}

cadastroProdutos()




