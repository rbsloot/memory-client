import { MemoryPage } from './app.po';

describe('memory App', () => {
  let page: MemoryPage;

  beforeEach(() => {
    page = new MemoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
