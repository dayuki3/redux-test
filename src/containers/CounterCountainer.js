import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

export function getRandomColor(){
    const colors= [
        '#1bcd0c',
        '#0abc9b',
        '#2cde1e',
        '#3eef2d',
        '#4df03f',
        '#5fa14a',
        '#6ab25b',
        '#7bc36c',
        '#8cd47d',
        '#9de58e',
        '#10ef69',
        '#11fa70',
        '#12ab8a',
    ]
    const random = Math.floor(Math.random() * 13);

    return colors[random];
}

const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()),
    onDecreent: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);

export default CounterContainer;