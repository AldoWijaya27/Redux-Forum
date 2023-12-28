/**
 * Skenario Pengujian e2e Login
 * - Login spec
 *   - menampilkan halaman login dengan benar
 *   - menampilkan alert saat email kosong
 *   - menampilkan alert saat password kosong
 *   - menampilkan alert saat email atau password salah
 *   - menampilkan halaman home saat login berhasil
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('menampilkan halaman login dengan benar', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button')
      .contains(/^LOGIN$/)
      .should('be.visible');
  });

  it('menampilkan alert saat email kosong', () => {
    cy.get('button')
      .contains(/^LOGIN$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('menampilkan alert saat password kosong', () => {
    cy.get('input[placeholder="Email"]').type('aldo@gmail.com');

    cy.get('button')
      .contains(/^LOGIN$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('menampilkan alert saat email atau password salah ', () => {
    cy.get('input[placeholder="Email"]').type('aldo@gmail.com');
    cy.get('input[placeholder="Password"').type('password');

    cy.get('button')
      .contains(/^LOGIN$/)
      .click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Email or password is wrong');
    });
  });

  it('menampilkan halaman home saat login berhasil', () => {
    cy.get('input[placeholder="Email"]').type('aldo@gmail.com');
    cy.get('input[placeholder="Password"]').type('123456');

    cy.get('button')
      .contains(/^LOGIN$/)
      .click();

    cy.url().should('include', '/');
  });
});
