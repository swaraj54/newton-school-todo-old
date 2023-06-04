export const incrementAsync = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: 'INCREMENT' });
        }, 1000);
    };
};
