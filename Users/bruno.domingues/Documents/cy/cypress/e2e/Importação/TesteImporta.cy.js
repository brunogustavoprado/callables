describe('Teste Inicial Importação', () => {
    it('Passos', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.visit("https://homologacao.promobank.com.br/sistema/corpo.php?src=importacao/cadastro.php&fks=t")
        cy.get('select[name="imp_tabela"]').select('cli0000')
        cy.get('select[name="imp_convenio"]').select('inss')
        cy.get('input[name="imp_descricao"]').type("Teste Importação Automatizado")


        cy.fixture('Clientes.csv').then(fileContent => {
            cy.get('input[type="file"]').attachFile({
                fileContent: fileContent.toString(),
                fileName: 'Clientes.csv',
                mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
        });

        cy.wait(2000);

        cy.get('div.formPosicao.formForma.formBotao.irLayout.salvar').click();

        cy.get('div.formPosicao.formForma.formBotao.irLayout.salvar').click();

        cy.get('button[id="iniciarImportacao"]').click()
    })
})
