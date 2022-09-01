import { newE2EPage } from '@stencil/core/testing';

describe('information-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<information-label></information-label>');

    const element = await page.find('information-label');
    expect(element).toHaveClass('hydrated');
  });
});
