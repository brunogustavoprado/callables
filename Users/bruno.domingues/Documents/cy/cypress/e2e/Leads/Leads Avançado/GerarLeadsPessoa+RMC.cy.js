describe('Gerar Leads Das Categorias Pessoa e RMC', () => {
    it('Passos', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.AbaFiltros()
        cy.CategoriaPessoa()
        cy.CategoriaRMC()
        cy.QuantidadeLeads()
        cy.GerarOsLeads()
    })
})
