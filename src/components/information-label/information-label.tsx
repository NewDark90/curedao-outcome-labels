import { Component, Host, h, Prop, State } from '@stencil/core';

//&#9650; ▲
//&#9660; ▼

@Component({
    tag: 'information-label',
    styleUrl: 'information-label.scss',
    shadow: true,
})
export class InformationLabel
{

    @State() items: any[];


    
    private formatChangeAmount(amount: number): string
    {
        let type = ""
        if (amount !== 0)
            type = amount > 0 ? "▲ Higher" : "▼ Lower ";

        return `${amount.toFixed(1)}% ${type}`;
    }

    render()
    {
        return (
            <Host>
                <header class="title">
                    <slot name="title" />
                </header>
                <div class="description">
                    <slot name="description" />
                </div>
                <main>
                    <div class="controls">
                        <input type="text" placeholder="filter by name..."  />
                        <div>
                            <button>sort by</button>
                            <button>sort by</button>
                        </div>
                    </div>
                    <span>% Change from Baseline*</span>
                    <div class="detail-table">
                    {
                        this.items.map(i => {
                            return <div>
                                <div class="label">{i.label}</div>
                                <div class="change">{this.formatChangeAmount(i.changeAmount)}</div>
                            </div>
                        })
                    }
                    </div>
                </main>
                <footer class="disclaimer">
                    <slot name="disclaimer"></slot>
                </footer>
            </Host>
        );
    }

}
