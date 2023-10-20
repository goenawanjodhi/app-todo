export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CLEAR = 'CLEAR'

export const incrementCounter = () => ({
    type: INCREMENT,
});

export const decrementCounter = () => ({
    type: DECREMENT,
});

export const clearCounter = () => ({
    type: CLEAR,
})