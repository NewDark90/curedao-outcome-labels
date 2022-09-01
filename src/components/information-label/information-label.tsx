import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'information-label',
    styleUrl: 'information-label.scss',
    shadow: true,
})
export class InformationLabel
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
