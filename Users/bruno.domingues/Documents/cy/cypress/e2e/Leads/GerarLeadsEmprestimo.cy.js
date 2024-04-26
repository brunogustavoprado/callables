describe('Gerar Leads Da Categoria Emprestimo', () => {
    it('Passos', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.AbaFiltros()
        cy.CategoriaEmprestimo()
        cy.QuantidadeLeads()
        cy.GerarOsLeads()
    })
})
