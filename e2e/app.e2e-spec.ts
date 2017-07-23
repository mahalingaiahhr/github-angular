import { Angular2SamplePage } from './app.po';

describe('angular2-sample App', () => {
  let page: Angular2SamplePage;

  beforeEach(() => {
    page = new Angular2SamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
