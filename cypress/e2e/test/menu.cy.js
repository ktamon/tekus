

describe("Probar navegación a través del menú Multimedia", () => {

    before(() => {
        // Visitamos la pagina de inicio de sesion de TeKus
        cy.visit('https://qalab.invertebrado.co')
        //Introducimos el Nombre de usuario o correo electronico
        cy.get('#mat-input-0').type('qatester')
        //Introducimos la contraseña
        cy.get('#mat-form-field-label-3 > .ark-mat-label').type('N9j^u9&Hm@dz2Kcs')
        //Hacemos clic en el botón inicio de sesion
        cy.get('span.ark-btn-loader > :nth-child(1)').click();

        // Visitamos la pagina del dashboard de TeKus
        //cy.visit('https://qalab.invertebrado.co/screens/multimedia')
    })
    it('Debería navegar al menú Multimedia y verificar el contenido', () => {
      // Hacemos clic en la opción del menú "Multimedia"
      cy.get('nav').contains('Multimedia').click();

      // Verificamos que la URL cambie a la página de Multimedia
      cy.url().should('include', '/multimedia');

      // Verificamos el tamaño
      cy.get('div:nth-child(1) > div > div > div > div > div > div.row.ark-header-card > div.col.d-flex.align-items-center.justify-content-start > span.ark-date-highlight.ng-star-inserted > span').should('contain', '1.02MB');
    }
  )
})
