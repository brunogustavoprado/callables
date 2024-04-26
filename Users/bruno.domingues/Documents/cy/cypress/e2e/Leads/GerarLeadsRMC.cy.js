describe('Gerar Leads Da Categoria RMC', () => {
    it('Passos', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.AbaFiltros()
        cy.CategoriaRMC()
        cy.QuantidadeLeads()
        cy.GerarOsLeads()
    })
})
