describe('Gerar Leads Das Categorias Pessoas e Emprestimo', () => {
    it('Passos', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.login()
        cy.AbaFiltros()
        cy.CategoriaPessoa()
        cy.CategoriaEmprestimo()
        cy.QuantidadeLeads()
        cy.GerarOsLeads()
    })
})
