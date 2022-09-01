import { newSpecPage } from '@stencil/core/testing';
import { InformationLabel } from '../information-label';

describe('information-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InformationLabel],
      html: `<information-label></information-label>`,
    });
    expect(page.root).toEqualHtml(`
      <information-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </information-label>
    `);
  });
});
