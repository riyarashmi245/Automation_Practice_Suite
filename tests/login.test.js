import { test, expect } from '@playwright/test';
import loginData from '../data/loginData.json';
import {loginDashboard,logoutDashboard} from '../helper';

// Basic login data-driven test
for (const data of loginData) {
  test(`Login test for ${data.email}`, async ({page}) => {
  await loginDashboard(page,data.email,data.password,data.expectedResult);

    //LOGOUT FLOW
      if(data.expectedResult === "success"){
      
       await logoutDashboard(page);
      }
});
};
