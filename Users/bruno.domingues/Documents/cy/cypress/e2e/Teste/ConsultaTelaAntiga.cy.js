describe('template spec', () => {
    it('passes', () => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit('https://homologacao.promobank.com.br/')
        cy.get('[id="aceitarCookies"]').click()
        cy.get('[id="inputEmpresa"]').type('1111')
        cy.get('[id="inputUsuario"]').type('bruno.sup07')
        cy.get('[id="passField"]').type('Promo@123')
        cy.contains('button', 'Entrar').click()
        cy.pause(30000)
        cy.visit('https://homologacao.promobank.com.br/sistema/corpo.php?src=consulta/index.php')
        cy.get('input.form-control.input-lg.modoDemonstracao.cpf-consulta').type('27')
        cy.get('button[name="buttonConsultarInss"]').click()

    })
})