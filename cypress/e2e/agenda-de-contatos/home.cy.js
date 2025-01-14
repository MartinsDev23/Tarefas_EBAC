describe('Teste para a página home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um contato', () => {
        cy.get('input[type="text"]').type('nome ficticio')
        cy.get('input[type="email"]').type('email@teste.com')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.get('.adicionar').click()
    })

    it('Deve alterar um contato', () => {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear().type('nome ficticio alterado')
        cy.get('input[type="email"]').clear().type('emailalterado@teste.com')
        cy.get('input[type="tel"]').clear().type('1212121212')
        cy.get('.alterar').click()
    })

    it('Deve remover um contato', () => {
        cy.get('.delete').first().click()
    })
})