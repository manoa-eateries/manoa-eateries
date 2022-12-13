import { Selector } from 'testcafe';

class EditProfilePage {
  constructor() {
    this.pageId = '#edit-profile-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Edits the form and submits */
  async editInfo(testController) {
    await this.isDisplayed(testController);
    await testController.click('#asian');
    await testController.click('#submit');
  }
}

export const editProfilePage = new EditProfilePage();
