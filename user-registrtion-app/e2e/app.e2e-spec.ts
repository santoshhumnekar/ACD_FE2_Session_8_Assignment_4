import { UserRegistrtionAppPage } from './app.po';

describe('user-registrtion-app App', function() {
  let page: UserRegistrtionAppPage;

  beforeEach(() => {
    page = new UserRegistrtionAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
