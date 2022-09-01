import { newE2EPage } from '@stencil/core/testing';

describe('outcomes-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<outcomes-label></outcomes-label>');

    const element = await page.find('outcomes-label');
    expect(element).toHaveClass('hydrated');
  });
});
