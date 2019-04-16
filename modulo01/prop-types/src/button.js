'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
    <button onClick={handleClick}>{children}</button>
)

//https://reactjs.org/docs/typechecking-with-proptypes.html
Button.propTypes = {
    handleClick: React.PropTypes.func
}

export default Button