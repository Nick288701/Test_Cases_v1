describe('Web Inputs Automation Testing', () => {
    beforeEach(() => {
        // Visit the homepage
        cy.visit('https://practice.expandtesting.com/');
        
        // Locate the Web Inputs section and click the "Try it out" button
        cy.contains('h3', 'Web inputs') // Find the Web Inputs section by its heading
          .parents('.card') // Get the parent card containing the button
          .find('a.btn.btn-primary') // Find the "Try it out" button
          .click();
        
        // Verify navigation to Web Inputs page
        cy.url().should('include', '/inputs');
    });

    it('should verify page title and header', () => {
        // Verify page title
        cy.title().should('eq', 'Web inputs | Automation Testing Practice');
        
        // Verify header text
        cy.get('h1').should('contain.text', 'Web Inputs');
    });

    it('should interact with number input field', () => {
        // Enter a number
        cy.get('#input-number')
            .clear()
            .type('42')
            .should('have.value', '42');

        // Verify input accepts only numbers
        cy.get('#input-number')
            .clear()
            .type('abc')
            .should('have.value', '');
    });

    it('should interact with text input field', () => {
        // Enter text
        cy.get('#input-text')
            .clear()
            .type('Test Automation')
            .should('have.value', 'Test Automation');

        // Verify text input accepts special characters
        cy.get('#input-text')
            .clear()
            .type('Test@123!')
            .should('have.value', 'Test@123!');
    });

    it('should interact with password input field', () => {
        // Enter password
        cy.get('#input-password')
            .clear()
            .type('SecurePass123')
            .should('have.value', 'SecurePass123');

        // Verify password is masked
        cy.get('#input-password')
            .should('have.attr', 'type', 'password');
    });

    it('should interact with date input field', () => {
        // Enter valid date
        cy.get('#input-date')
            .clear()
            .type('2025-10-14')
            .should('have.value', '2025-10-14');

        // Verify invalid date is rejected
        cy.get('#input-date')
            .clear()
            .type('2025-13-45')
            .should('not.have.value', '2025-13-45');
    });

    it('should verify form submission', () => {
        // Fill all input fields
        cy.get('#input-number').type('100');
        cy.get('#input-text').type('Sample Text');
        cy.get('#input-password').type('Test1234');
        cy.get('#input-date').type('2025-10-14');

        // Submit form (if there's a submit button)
        cy.get('form').then(($form) => {
            if ($form.find('button[type="submit"]').length) {
                cy.get('button[type="submit"]').click();
                // Verify success message or redirect if applicable
                cy.get('.alert-success').should('be.visible')
                    .and('contain.text', 'Form submitted successfully');
            }
        });
    });

    it('should verify input field validations', () => {
        // Test required fields
        cy.get('#input-number').clear();
        cy.get('#input-text').clear();
        cy.get('#input-password').clear();
        cy.get('#input-date').clear();

        cy.get('form').then(($form) => {
            if ($form.find('button[type="submit"]').length) {
                cy.get('button[type="submit"]').click();
                // Check for validation errors
                cy.get('.error-message').should('be.visible');
            }
        });
    });

    it('should verify input field placeholders', () => {
        // Check placeholder text for each input
        cy.get('#input-number').should('have.attr', 'placeholder')
            .and('match', /number/i);
        cy.get('#input-text').should('have.attr', 'placeholder')
            .and('match', /text/i);
        cy.get('#input-password').should('have.attr', 'placeholder')
            .and('match', /password/i);
        cy.get('#input-date').should('have.attr', 'placeholder')
            .and('match', /date/i);
    });

    it('should verify input field max length', () => {
        // Test max length for text input
        cy.get('#input-text')
            .clear()
            .type('A'.repeat(1000))
            .invoke('val')
            .then((value) => {
                expect(value.length).to.be.at.most(255); // Assuming typical max length
            });
    });

    it('should verify input field responsiveness', () => {
        // Test on different viewport sizes
        cy.viewport('iphone-6');
        cy.get('#input-number').should('be.visible').type('123');
        cy.get('#input-text').should('be.visible').type('Mobile Test');
        cy.get('#input-password').should('be.visible').type('Pass123');
        cy.get('#input-date').should('be.visible').type('2025-10-14');

        cy.viewport('macbook-15');
        cy.get('#input-number').should('be.visible');
        cy.get('#input-text').should('be.visible');
        cy.get('#input-password').should('be.visible');
        cy.get('#input-date').should('be.visible');
    });

    it('should verify clear button functionality', () => {
        // Fill inputs and clear them
        cy.get('#input-number').type('123').clear().should('have.value', '');
        cy.get('#input-text').type('Test').clear().should('have.value', '');
        cy.get('#input-password').type('Pass123').clear().should('have.value', '');
        cy.get('#input-date').type('2025-10-14').clear().should('have.value', '');
    });
});