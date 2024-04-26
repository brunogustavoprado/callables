describe('Gerar Leads Das Categorias Emprestimo e RMC', () => {
    it('Passos', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.AbaFiltros()
        cy.CategoriaEmprestimo()
        cy.CategoriaRMC()
        cy.QuantidadeLeads()
        cy.GerarOsLeads()
    })
})
