import { newSpecPage } from '@stencil/core/testing';
import { PredictorsLabel } from '../predictors-label';

describe('predictors-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PredictorsLabel],
      html: `<predictors-label></predictors-label>`,
    });
    expect(page.root).toEqualHtml(`
      <predictors-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </predictors-label>
    `);
  });
});
