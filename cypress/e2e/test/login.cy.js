import{loginPage}from '../../support/page/loginpage'

describe("Probar pagina de rigistro TeKus", () => {
   
    before(() => {
       
        // Visitamos la pagina de inicio de sesion de TeKus
        loginPage.navigate();
    })
    
    it('Deberia permitir a los usuarios iniciar sesión con credenciales válidas', () => {
       
        //Arrange
        //Inicializar constantes
        const username = 'qatester';  
        const password = 'N9j^u9&Hm@dz2Kcs';

        //Actions
        //Introducimos el Nombre de usuario o correo electronico
        loginPage.fillUsername(username);
        //Introducimos la contraseña
        loginPage.fillPassword(password);
        //Hacemos clic en el botón inicio de sesion
        loginPage.submit();

        //Assert
        // Verificamos que el usuario haya sido redirigido al dashboard de TeKus
        cy.url().should('eq', 'https://qalab.invertebrado.co/screens/dashboard') // => true
    }
)
})
