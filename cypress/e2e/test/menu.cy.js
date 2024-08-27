import { loginPage } from '../../support/page/loginpage'
import { menuPage } from '../../support/page/menupage'

describe("Probar navegación a través del menú Multimedia", () => {

  before(() => {

    // Visitamos la pagina de inicio de sesion de TeKus
    loginPage.navigate();

    //Arrange
    //Inicializar constantes
    const username = 'qatester';
    const password = 'N9j^u9&Hm@dz2Kcs';

    //Introducimos el Nombre de usuario o correo electronico
    loginPage.fillUsername(username);
    //Introducimos la contraseña
    loginPage.fillPassword(password);
    //Hacemos clic en el botón inicio de sesion
    loginPage.submit();
  })
  it('Debería navegar al menú Multimedia y verificar el contenido', () => {

    //Actions
    // Hacemos clic en la opción del menú "Multimedia"
    cy.get('nav').contains('Multimedia').click();

    //Assert
    // Verificamos que la URL cambie a la página de Multimedia
    cy.url().should('include', '/multimedia');

    // Verificamos el tamaño
    menuPage.size.should('contain', '1.02MB');

    // Verificar identificar unico
    menuPage.id.should('contain', 'MD-5')

    //Verificar previsualizacion
    menuPage.preview.should('be.visible')

    //Verificar descripción
    menuPage.description.should('contain', 'Tekus horizontal.png')
  }
  )
})
