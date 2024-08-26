

describe("Probar pagina de rigistro TeKus", () => {
   
    before(() => {
        // Visitamos la pagina de inicio de sesion de TeKus
        cy.visit('https://qalab.invertebrado.co')
    })
    it('Deberia permitir a los usuarios iniciar sesión con credenciales válidas', () => {
        //Introducimos el Nombre de usuario o correo electronico
        cy.get('#mat-input-0').type('qatester')
        //Introducimos la contraseña
        cy.get('#mat-form-field-label-3 > .ark-mat-label').type('N9j^u9&Hm@dz2Kcs')
        //Hacemos clic en el botón inicio de sesion
        cy.get('span.ark-btn-loader > :nth-child(1)').click();
        // Verificamos que el usuario haya sido redirigido al dashboard de TeKus
        cy.url().should('eq', 'https://qalab.invertebrado.co/screens/dashboard') // => true
    })
    it('Debería navegar al menú Multimedia y verificar el contenido', () => {
        // Hacemos clic en la opción del menú "Multimedia"
        cy.get(':nth-child(8) > a.ng-star-inserted > .ark-title').contains('Multimedia').click();
  
        // Verificamos que la URL cambie a la página de Multimedia
        cy.url().should('include', '/multimedia');
  
        // Verificamos que el contenido de la página de servicios sea el esperado
        cy.get('h1').should('contain.text', 'Nuestros Servicios');
    }
)
})