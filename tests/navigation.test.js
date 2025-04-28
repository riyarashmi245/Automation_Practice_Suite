import { test, expect } from '@playwright/test';
import {navigateToSectionByIcon,loginDashboard,logoutDashboard} from '../helper';

test('Dashboard navigation via icons', async ({ page }) => {

  await loginDashboard(page, 'qa@julesai.com', 'QaJULES2023!')
  // -------- NAVIGATION using icons --------
  await navigateToSectionByIcon(page, 'LibraryBooksIcon','Suppliers & Sites'); 
  await navigateToSectionByIcon(page, 'ShoppingCartIcon','Purchase');
  await navigateToSectionByIcon(page, 'LocalOfferIcon','Sale');
  await navigateToSectionByIcon(page, 'WarehouseIcon','Inbound loads');
  await navigateToSectionByIcon(page, 'VerifiedUserIcon','Hedging contracts'); 
  await navigateToSectionByIcon(page, 'HeadsetMicIcon','Planning/Booking');
  await navigateToSectionByIcon(page, 'LocalShippingIcon','Rate management');
  await navigateToSectionByIcon(page, 'RequestQuoteIcon','Invoices');
  await navigateToSectionByIcon(page, 'CheckBoxIcon','Notes');
  await navigateToSectionByIcon(page, 'DashboardIcon','Dashboards');
});
