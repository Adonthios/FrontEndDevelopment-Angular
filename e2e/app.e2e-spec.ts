import { ATApp } from './app.po';

describe('AT-App', () => {
  let page: ATApp;

  beforeEach(() => {
    page = new ATApp();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
