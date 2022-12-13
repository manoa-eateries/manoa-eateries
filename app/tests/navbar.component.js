import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSignInPage(testController) {
    await this.ensureLogout(testController);
    const visible = await Selector('#basic-navbar-nav').visible;
    if (visible) {
      await testController.click('#login-dropdown');
      await testController.click('#login-dropdown-sign-in');
    }
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (visible) {
      await testController.click('#account');
      await testController.click('#signout');
    }
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignUpPage(testController) {
    await this.ensureLogout(testController);
    const visible = await Selector('#basic-navbar-nav').visible;
    if (visible) {
      await testController.click('#login-dropdown');
      await testController.click('#login-dropdown-sign-up');
    }
  }

  /** Go to List All Vendors Page */
  async gotoListAllVendors(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (visible) {
      await testController.click('#list-vendors-nav');
    }
  }

  async gotoListAdmin(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (visible) {
      await testController.click('#list-admin');
    }
  }

  async gotoProfile(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (visible) {
      await testController.click('#account');
      await testController.click('#profile');
    }
  }

  async gotoOpenNow(testController) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (visible) {
      await testController.click('#user-home-nav');
    }
  }
}

export const navBar = new NavBar();
