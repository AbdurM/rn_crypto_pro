export const UseHomeScreen = () => {
    const userActions: UserActionModel[] = [
        {
            name: 'Receive',
            iconType: 'chevron-right',
        },
        {
            name: 'Send',
            iconType: 'chevron-right',
        },
        {
            name: 'Swap',
            iconType: 'chevron-right',
        },
        {
            name: 'Buy',
            iconType: 'chevron-right',
        },
        {
            name: 'Sell',
            iconType: 'chevron-right',
        },
        {
            name: 'Credit',
            iconType: 'chevron-right',
        },
    ];

    const cryptoCurrencies = [{
        name: 'Cardono',
        type: 'ADA',
        value: '$442.82',
        difference: '-1.22%'
    },
    {
        name: 'Bitcoin',
        type: 'BTC',
        value: '$800.46',
        difference: '+4.34%'
    },
    {
        name: 'Etherium',
        type: 'ETH',
        value: '$684.21',
        difference: '+8.26%'
    },
    {
        name: 'Binance Coin',
        type: 'BNB',
        value: '$214.32',
        difference: '-4.64%'
        },
    {
        name: 'Cardono',
        type: 'ADA',
        value: '$442.82',
        difference: '-1.22%'
    },
    {
        name: 'Bitcoin',
        type: 'BTC',
        value: '$800.46',
        difference: '+4.34%'
    },
    {
        name: 'Etherium',
        type: 'ETH',
        value: '$684.21',
        difference: '+8.26%'
    },
    {
        name: 'Binance Coin',
        type: 'BNB',
        value: '$214.32',
        difference: '-4.64%'
    }
    ]

    return {
        userActions,
        cryptoCurrencies,
    }
}