describe('Gerar Leads Da Categoria Pessoas', () => {
    it('Passos', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.AbaFiltros()
        cy.CategoriaPessoa()
        cy.QuantidadeLeads()
        cy.GerarOsLeads()
    })
})
