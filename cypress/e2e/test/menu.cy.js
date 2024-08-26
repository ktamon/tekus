

describe("Probar navegación a través del menú Multimedia", () => {

    before(() => {
        // Visitamos la pagina del dashboard de TeKus
        cy.visit('https://qalab.invertebrado.co/screens/multimedia')
    })
    it('Debería navegar al menú Multimedia y verificar el contenido', () => {
      // Hacemos clic en la opción del menú "Multimedia"
      cy.get('nav').contains('Multimedia').click();

      // Verificamos que la URL cambie a la página de Multimedia
      cy.url().should('include', '/multimedia');

      // Verificamos que el contenido de la página de servicios sea el esperado
      cy.get('h1').should('contain.text', 'Nuestros Servicios');
    }
  )
})
