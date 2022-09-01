import { newE2EPage } from '@stencil/core/testing';

describe('predictors-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<predictors-label></predictors-label>');

    const element = await page.find('predictors-label');
    expect(element).toHaveClass('hydrated');
  });
});
