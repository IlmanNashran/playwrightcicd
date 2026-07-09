// REST API - CRUD Operations
// Objective
// Execute GET API requests using Playwright.
// Steps
// 1. Create a new API test file.
// 2. Send a GET request to "https://ip-api.com/#8.8.8.8"
// 3. Capture the response.
// 4. Validate the HTTP status code as 200
// 5. Validate response header: "server" should be "cloudflare".
// 6. Validate the response json body: "country" node should be "US"
// 7. Execute the test & analyze the results

import { test, expect } from '@playwright/test';


test('TestCase15 - REST API - GET Request', async ({ request }) => {

  await request.get('https://jsonplaceholder.typicode.com/posts/1').then(async (response) => {
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id', 1);
    expect(responseBody).toHaveProperty('title');
    expect(responseBody).toHaveProperty('body');
  })
})






test('TestCase15 - REST API - POST Request', async ({ request }) => {
  await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'Playwright Test',
      body: 'Training',
      userId: 1
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).then(async (response) => {
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('title', 'Playwright Test');
    expect(responseBody).toHaveProperty('body', 'Training');
    expect(responseBody).toHaveProperty('userId', 1);
  })
})

test('TestCase15 - REST API - PUT Request', async ({ request }) => {
  await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      title: 'Playwright Test',
      body: 'Training 2026',
      userId: 1
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  }).then(async (response) => {
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('title', 'Playwright Test');
    expect(responseBody).toHaveProperty('body', 'Training 2026');
    expect(responseBody).toHaveProperty('userId', 1);
  })
})

test('TestCase15 - REST API - DELETE Request', async ({ request }) => {
  await request.delete('https://jsonplaceholder.typicode.com/posts/1').then(async (response) => {
    expect(response.status()).toBe(200);
  })
})

test('IPAPI.co - GET Request', async ({ request }) => {
  await request.get('https://ipapi.co/8.8.8.8/json/')
   .then(async (response) => {
      expect(response.status()).toBe(200);
      const responseBody = await response.json();
      const responseHeader = response.headers();
      expect(responseBody).toHaveProperty('country', 'US');
      expect(responseHeader).toHaveProperty('server', 'cloudflare');
  })
})