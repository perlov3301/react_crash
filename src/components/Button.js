import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
    // click eveng keys:
    // _reactName,_tagetInst,type, nativeEvent, target,currentTarget
    // event Phase, bubbles, cancelable, timeStamp, defaultPrevented,
    // isTrusted, view, detail, screenX, screenY, clientX, clientY,
    // pageX, pageY, ctrlKey, shiftKey, altKey, metaKey,getModifierState,
    // button, buttons, relatedTarget, movementX, movementY, 
    // isDefaultPrevented, isPropagationStopped
    return (
        <button className="btn"  onClick={onClick}
            style={{ backgroundColor: color }}  > 
          {text} 
        </button>
    );
};
const buttonStyle = {
    
};
Button.defaultProps = {
    color: 'steelblue',
};
Button.propTypes = {
    color: PropTypes.string ,
    text: PropTypes.string,
    onClick:PropTypes.func,
}
 export default Button;