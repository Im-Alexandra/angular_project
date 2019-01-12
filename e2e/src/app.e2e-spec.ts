import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';

// describe('workspace-project App', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });

//   it('should display welcome message', () => {
//     page.navigateTo();
//     expect(page.getParagraphText()).toEqual('Welcome to test123!');
//   });
// });

describe ('register', () => {
  it("register new user and display", async()=>{
    // go on register page
    browser.get('register');
    // fill out the form
    expect(element(by.css(".sitters-headline")).click())
    expect(element(by.id("firstNameRegisterSitter")).sendKeys('Michal'))
    expect(element(by.id("lastNameRegisterSitter")).sendKeys('Labus'))
    expect(element(by.id("emailRegisterSitter")).sendKeys('michal@labus.com'))
    expect(element(by.id("passwordRegisterSitter")).sendKeys('12345'))
    expect(element(by.id("educationRegisterSitter")).sendKeys('some'))
    expect(element(by.id("descriptionRegisterSitter")).sendKeys('I am displayed!'))
    expect(element(by.id("avatarRegisterSitter")).sendKeys('https://i.imgur.com/2eJfLMc.png'))
    expect(element(by.id("pictureRegisterSitter")).sendKeys('https://i.imgur.com/hCoUhB7.png'))
    // click register

    // go to sitters page

    // freeze
  })
})
