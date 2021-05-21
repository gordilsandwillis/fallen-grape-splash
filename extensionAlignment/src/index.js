import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { init } from 'contentful-ui-extensions-sdk';
import './index.css';

export const App = ({sdk}) => {
  const [value, setValue] = useState(sdk.field.getValue() || 'center center');

  const onExternalChange = value => {
    setValue(value);
  }

  const onChange = e => {
    const value = e.currentTarget.value;
    setValue(value);
    if (value) {
      sdk.field.setValue(value);
    } else {
      sdk.field.removeValue();
    }
  }

  useEffect(() => {
    sdk.window.startAutoResizer();
  }, [sdk.window]);

  useEffect(() => {
    const detatchValueChangeHandler = sdk.field.onValueChanged(onExternalChange);
    return detatchValueChangeHandler;
  });

  var hasNoValue = typeof sdk.field.getValue() === 'undefined';

  if (hasNoValue) {
    sdk.field.setValue('center center');
  }

  const options = [
    { id: 'top left', className: 'top-left' },
    { id: 'top right', className: 'top-right' },
    { id: 'top center', className: 'top-center' },
    { id: 'center left', className: 'center-left' },
    { id: 'center right', className: 'center-right' },
    { id: 'center center', className: 'center-center' },
    { id: 'bottom left', className: 'bottom-left' },
    { id: 'bottom right', className: 'bottom-right' },
    { id: 'bottom center', className: 'bottom-center' }
  ]

  return (
    <div style={{ paddingBottom: '1px' }}>
      <div className="wrapper">
        {options.map((option) => (
          <div key={option.id}>
            <input checked={value === option.id} id={option.id} value={option.id} type='radio' name='alignment' onChange={onChange} />
            <label htmlFor={option.id} className={option.className} />
          </div>
        ))}
      </div>
    </div>
  );
}

App.propTypes = {
  sdk: PropTypes.object.isRequired
};

init(sdk => {
  ReactDOM.render(<App sdk={sdk} />, document.getElementById('root'));
});

/**
 * By default, iframe of the extension is fully reloaded on every save of a source file.
 * If you want to use HMR (hot module reload) instead of full reload, uncomment the following lines
 */
// if (module.hot) {
//   module.hot.accept();
// }
