export const UseHomeScreen = () => {
    const userActions: UserActionModel[] = [
        {
            name: 'Receive',
            iconType: 'flash',
        },
        {
            name: 'Send',
            iconType: 'paper-plane-o',
        },
        {
            name: 'Swap',
            iconType: 'exchange',
        },
        {
            name: 'Buy',
            iconType: 'credit-card',
        },
        {
            name: 'Sell',
            iconType: 'money',
        },
        {
            name: 'Credit',
            iconType: 'pie-chart',
        },
    ];

    const cryptoCurrencies = [{
        name: 'Cardono',
        type: 'ADA',
        value: '$442.82',
        difference: '-1.22%',
        positiveDifference: false
    },
    {
        name: 'Bitcoin',
        type: 'BTC',
        value: '$800.46',
        difference: '+4.34%',
        positiveDifference: true
    },
    {
        name: 'Etherium',
        type: 'ETH',
        value: '$684.21',
        difference: '+8.26%',
        positiveDifference: true
    },
    {
        name: 'Binance Coin',
        type: 'BNB',
        value: '$214.32',
        difference: '-4.64%',
        positiveDifference: false
        },
    {
        name: 'Cardono',
        type: 'ADA',
        value: '$442.82',
        difference: '-1.22%',
        positiveDifference: false
    },
    {
        name: 'Bitcoin',
        type: 'BTC',
        value: '$800.46',
        difference: '+4.34%',
        positiveDifference: true
    },
    {
        name: 'Etherium',
        type: 'ETH',
        value: '$684.21',
        difference: '+8.26%',
        positiveDifference: true
    },
    {
        name: 'Binance Coin',
        type: 'BNB',
        value: '$214.32',
        difference: '-4.64%',
        positiveDifference: false
    },
    {
    name: 'Tether',
    type: 'USDT',
    value: '$1.00',
    difference: '-0.3%',
     positiveDifference: false
    },
        {
    name: 'USD Coin',
    type: 'USDC',
    value: '$1.32',
    difference: '+1.64%',
     positiveDifference: true
    },
    {
    name: 'Solana',
    type: 'SOL',
    value: '$32.61',
    difference: '-0.5%',
    positiveDifference: false
    },
    {
    name: 'Avalanche',
    type: 'AVAX',
    value: '$17.24',
    difference: '+2.0%',
    positiveDifference: true
    },
    ]

    return {
        userActions,
        cryptoCurrencies,
    }
}