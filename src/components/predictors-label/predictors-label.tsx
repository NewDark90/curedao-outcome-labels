import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'predictors-label',
    styleUrl: 'predictors-label.scss',
    shadow: true,
})
export class PredictorsLabel
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
