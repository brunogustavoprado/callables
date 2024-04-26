//########################### INICIO DE TODOS OS FILTROS LEADS ##############################//


//########### Abre a Aba de Filtros #############//
Cypress.Commands.add('AbaFiltros', () => {
    cy.log('Abrindo a aba de Filtros');
    cy.visit('https://homologacao.promobank.com.br/sistema/corpo.php?src=leads/index.php&noHtml=true')
})


//########### FITRO Categoria Pessoa #############//

Cypress.Commands.add('CategoriaPessoa', () => {

    cy.log('Abrindo a aba de Pessoas');

    cy.get('a[href="#step2"]').click()

    cy.log('Insere o Banco que o cliente recebe');

    cy.log('Insere o meio de pagamento do cliente');

    cy.get('select[name="cam_meio_pagamento"]').eq(0).select('Conta Corrente')

    cy.log('Insere o minimo de idade dos leads');

    cy.get('input[name="cam_prime_idade_min"]').type('18')

    cy.log('Insere o maximo de idade dos leads');

    cy.get('input[name="cam_prime_idade_max"]').type('68')

    cy.log('Insere o UF dos clientes');

    cy.get('select[name="cam_prime_uf"]').select('MT')

    cy.log('Insere o Estado dos clientes');

    cy.get('input[name="cam_prime_cidade"]').type('CUIABA')

    cy.log('Insere a data inical de despacho do beneficio dos clientes');

    cy.get('input[name="ddbi"]').type('2005-03-15')

    cy.log('Insere a data final do despacho beneficio clientes');

    cy.get('input[name="ddbf"]').type('2022-03-15')

    cy.log('Insere a data incio de beneficio dos clientes inicial');

    cy.get('input[name="dibi"]').type('2005-03-15')

    cy.log('Insere a data incio de beneficio dos clientes final');

    cy.get('input[name="dibf"]').type('2022-03-15')

})


//########### FITRO Categoria Emprestimo #############//

Cypress.Commands.add('CategoriaEmprestimo', () => {

    cy.log('Abrindo a aba de Emprestimo');

    cy.get('a[href="#step1"]').click()

    cy.log('Seleciona o tipo de campanha');

    cy.get('select[name="cam_prime_tipo"]').select('cust')

    cy.log('Insere a quantidade minima de parcelas pagas');

    cy.get('input[name="qntparci_min"]').type('1')

    cy.log('Insere a quantidade maxima de parcelas pagas');

    cy.get('input[name="qntparci_max"]').type('12')

    cy.log('Seleciona a quantidade de contratos (Nesse caso seleciona customizado)')

    cy.get('select[name="qntcontratos"]').select('Customizado')

    cy.log('Seleciona a quantidade de contratos inicial')

    cy.get('input[name="qntcontratosi"]').type('1')

    cy.log('Seleciona a quantidade de contratos final')

    cy.get('input[name="qntcontratosf"]').type('9')

    cy.log('Insere a quantidade de margem minima ')

    cy.get('input[name="cam_prime_margem_min"]').type('20.00')

    cy.log('Insere a quantidade de margem minima ')

    cy.get('input[name="cam_prime_margem_max"]').type('200.00')

    cy.log('Insere o valor de beneficio minima ')

    cy.get('input[name="vlbeneficio_min"]').type('1320.00')

    cy.log('Insere o valor de beneficio mixima ')

    cy.get('input[name="vlbeneficio_max"]').type('7786.00')

    cy.log('Insere o valor de parcela minima ')

    cy.get('input[name="cam_parcela_min"]').type('200.00')

    cy.log('Insere o valor de parcela maxima ')

    cy.get('input[name="cam_parcela_max"]').type('600.00')

    cy.log('Insere o valor de taxa minima ')

    cy.get('input[name="taxa_min"]').type('147')

    cy.log('Insere o valor de taxa maxima ')

    cy.get('input[name="taxa_max"]').type('180')

})


//########### FITRO Categoria RMC #############//

Cypress.Commands.add('CategoriaRMC', () => {

    cy.log('Abrindo a aba de RMC');

    cy.get('a[href="#step3"]').click()

    cy.log('Selecionando COM RMC');

    cy.get('select[name="rmc"]').select('Com RMC')

    cy.log('Selecionando COM RCC');

    cy.get('select[name="rcc"]').select('Com RCC')

})

Cypress.Commands.add('ConfigLeads2semanas', () => {
    cy.log('Abrindo a aba de Configurações');
    cy.get('a[href="#step4"]').click()
    cy.log('Selecionando a opção de Não retornar Leads Gerados nas ultimas 2 semanas');
    cy.get('select#inputRegra').select('6');
})

Cypress.Commands.add('ConfigLeadsPodeRetornar', () => {
    cy.log('Abrindo a aba de Configurações');
    cy.get('a[href="#step4"]').click()
    cy.log('Selecionando a opção de Pode retornar Leads Gerados');
    cy.get('select#inputRegra').select('5');
})


//########### FITRO QUANTIDADE #############//
Cypress.Commands.add('QuantidadeLeads', () => {
    cy.log('Abrindo a aba de Gerar os Leads');
    cy.get('a[href="#step5"]').click();
    cy.log('Limpa o nome pré definido');
    cy.get('input[name="gol_descricao"]').clear()
    cy.log('Insere um nome para a listagem');
    cy.get('input[name="gol_descricao"]').type('Geração Leads Automatizado')
    cy.log('Seleciona a quantidade de leads para ser gerado');
    cy.get('input[name="cam_quantidade"]').type('150')
})


//########################### FIM DE TODOS OS FILTROS LEADS ##############################//



//########### COMANDO GERAR OS LEADS #############//
Cypress.Commands.add('GerarOsLeads', () => {
    cy.log('Clicka no botão e gera os leads')
    cy.contains('button', 'Confirmar e gerar leads para central').click()
    cy.log('Caso seja encontrado clientes com os filtros é clickado em sucesso')
    cy.get('button[data-bb-handler="success"]').click()
})