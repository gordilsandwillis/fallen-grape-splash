import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { init } from 'contentful-ui-extensions-sdk'
import './index.css'
import themes from './themes'

export const App = ({sdk}) => {
  const [value, setValue] = useState(sdk.field.getValue() || 'default');

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
    sdk.field.setValue('default');
  }

  return (
    <div style={{ paddingBottom: '1px' }}>
      <div className="wrapper">
        {themes.map((option) => (
          <div key={option.title}>
            <input checked={value === option.title} id={option.title} value={option.title} type='radio' name='alignment' onChange={onChange} />
            <label htmlFor={option.title} className={option.title} title={option.title}>
              <div style={{ color: option.color, background: option.background }}>
                Aa
              </div>
            </label>
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
