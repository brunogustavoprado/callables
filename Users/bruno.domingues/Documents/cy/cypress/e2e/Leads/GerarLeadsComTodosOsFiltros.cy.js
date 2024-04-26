describe('Gerar Todos Os Leads', () => {
    it('Passos', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.AbaFiltros()
        cy.CategoriaPessoa()
        cy.CategoriaEmprestimo()
        cy.CategoriaRMC()
        cy.QuantidadeLeads()
        cy.GerarOsLeads()
    })
})
