import { Selector } from 'testcafe';

class EditVendorPage {
  constructor() {
    this.pageId = '#edit-vendor-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Edits the form and submits */
  async editInfo(testController) {
    await testController.click('#asian');
    await testController.click('#submit');
  }
}

export const editVendorPage = new EditVendorPage();
