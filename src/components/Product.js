// Code Product Component Here
import React from 'react';
import PropTypes   from 'react-proptypes';
class Product extends React.Component{
  function range(props, propName, componentName) {
    componentName = comopnentName || 'ANONYMOUS';
  
    if (props[propName]) {
      let value = props[propName];
      if (typeof value === 'number') {
          return (value >= 80 && value <= 300) ? null : new Error(propName + ' in ' + componentName + " is not within 1 to 10");
      }
    }
  
    // assume all ok
    return null;
  }

  render(){
    return(


      
    )
  }
}
Product.PropTypes={
  name:PropTypes.string.isRequired,
  producer:PropTypes.string,
  hasWatermark:PropTypes.boolean,
  color:PropTypes.string.isRequired.oneOf(['white','eggshell-white','salmon']),
  weight:range
}

Product.defaultProps ={
  hasWatermark:false,
  
}
export default Product