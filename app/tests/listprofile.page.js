import { Selector } from 'testcafe';

class ListProfilePage {
  constructor() {
    this.pageId = '#list-profile-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Edits the form and submits */
  async edit(testController) {
    await this.isDisplayed(testController);
    await testController.click('#edit');
  }
}

export const listProfilePage = new ListProfilePage();
