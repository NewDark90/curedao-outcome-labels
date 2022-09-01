import { newSpecPage } from '@stencil/core/testing';
import { OutcomesLabel } from '../outcomes-label';

describe('outcomes-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [OutcomesLabel],
      html: `<outcomes-label></outcomes-label>`,
    });
    expect(page.root).toEqualHtml(`
      <outcomes-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </outcomes-label>
    `);
  });
});
