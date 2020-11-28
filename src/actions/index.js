export const increment = (num) => {
    return {
        type: 'inc',
        payload: num
    }
}

export const decrement = () => {
    return {
        type: 'dec'
    }
}