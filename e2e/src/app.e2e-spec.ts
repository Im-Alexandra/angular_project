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
    browser.get('register');
    expect(element(by.css(".sitters-headline")).click())
    expect(element(by.id("firstNameRegisterSitter")).sendKeys('New'))
    expect(element(by.id("lastNameRegisterSitter")).sendKeys('User'))
    expect(element(by.id("emailRegisterSitter")).sendKeys('user@user.com'))
    expect(element(by.id("passwordRegisterSitter")).sendKeys('1234'))
    expect(element(by.id("educationRegisterSitter")).sendKeys('some'))
    expect(element(by.id("descriptionRegisterSitter")).sendKeys('hehe'))
    expect(element(by.id("avatarRegisterSitter")).sendKeys('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/230px-Albert_Einstein_Head.jpg'))
    expect(element(by.id("pictureRegisterSitter")).sendKeys(''))
  })
})
