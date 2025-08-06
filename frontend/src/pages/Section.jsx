import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Section = forwardRef(({
  children,
  className = '',
  id,
  as: Component = 'section',
  ...props
}, ref) => {
  return (
    <Component
      ref={ref}
      id={id}
      className={`section ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
});

Section.displayName = 'Section';

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  as: PropTypes.elementType,
};

export default Section;