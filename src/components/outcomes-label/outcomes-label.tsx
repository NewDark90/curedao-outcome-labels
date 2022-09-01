import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'outcomes-label',
    styleUrl: 'outcomes-label.scss',
    shadow: true,
})
export class OutcomesLabel
{

    render()
    {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }

}
