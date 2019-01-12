import { browser, by, element, $$  } from 'protractor';
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
    // go on sitter list and count the sitters
    browser.get('index/sitter-list');

    $$('.example-card').then(function(sittersBefore) {
        let sittersCountBefore = sittersBefore.length;
        console.log("sitter count initial: " + sittersCountBefore);
        browser.sleep(5000);

        // go on register page
        browser.get('register');

        // fill out the form
        $$(".sitters-headline").click()
        $$("#firstNameRegisterSitter").sendKeys('Michal')
        $$("#lastNameRegisterSitter").sendKeys('Labus')
        $$("#emailRegisterSitter").sendKeys('michal@labus.com')
        $$("#passwordRegisterSitter").sendKeys('12345')
        $$("#phoneRegisterSitter").sendKeys('12312312')
        $$("#passwordRegisterSitter").sendKeys('12345')
        $$("#locationRegisterSitter").sendKeys('Denmark')
        $$("#educationRegisterSitter").sendKeys('some')
        $$("#descriptionRegisterSitter").sendKeys('I am displayed!')
        $$("#avatarRegisterSitter").sendKeys('https://i.imgur.com/2eJfLMc.png')
        $$("#pictureRegisterSitter").sendKeys('https://i.imgur.com/hCoUhB7.png')

        // click register btn
        $$(".register-sitter-btn").click()

        // click on login link
        $$(".go-to-login").click()
        browser.sleep(5000);
        // fill out login form

        // go to sitters page
        browser.get('index/sitter-list');
        browser.sleep(5000);
        // count sitters again
        $$('.example-card').then((sittersAfter) => { 
        let sittersCountAfter = sittersAfter.length;
          // Insert expect statements here..
          // browser.sleep(3000);
          console.log("sitter count after registering: " +sittersCountAfter);
          console.log("sittersCountAfter - sittersCountBefore : ");
          console.log(sittersCountAfter - sittersCountBefore);
          expect(sittersCountAfter - sittersCountBefore).toBe(1);
        });
        // freeze
        
    });
    
  })
})
