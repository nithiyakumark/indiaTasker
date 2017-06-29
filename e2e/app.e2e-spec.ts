import { IndiaTaskerPage } from './app.po';

describe('india-tasker App', () => {
  let page: IndiaTaskerPage;

  beforeEach(() => {
    page = new IndiaTaskerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
