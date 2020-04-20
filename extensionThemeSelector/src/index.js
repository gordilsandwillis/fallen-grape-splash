import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Select, Option, Subheading } from '@contentful/forma-36-react-components';
import { init } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import './index.css';
import themes from './themes.js'

export class App extends React.Component {
  static propTypes = {
    sdk: PropTypes.object.isRequired
  };

  detachExternalChangeHandler = null;

  constructor(props) {
    super(props);
    this.state = {
      value: props.sdk.field.getValue() || 'default'
    };
  }

  componentDidMount() {
    this.props.sdk.window.startAutoResizer();

    // Handler for external field value changes (e.g. when multiple authors are working on the same entry).
    this.detachExternalChangeHandler = this.props.sdk.field.onValueChanged(this.onExternalChange);
  }

  componentWillUnmount() {
    if (this.detachExternalChangeHandler) {
      this.detachExternalChangeHandler();
    }
  }

  onExternalChange = value => {
    if (!value) {
      value = 'default'
    }
    this.setState({ value });
  };

  onChange = e => {
    const value = e.currentTarget.value;
    this.setState({ value });
    if (value) {
      this.props.sdk.field.setValue(value);
    } else {
      this.props.sdk.field.removeValue();
    }
  };

  render() {
    const currentTheme = themes.filter(theme => theme.title === this.state.value)[0]

    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          width: '40px',
          height: '40px',
          background: currentTheme ? currentTheme.background : 'transparent',
          boxShadow: 'inset 0 0 1px rgba(0, 0, 0, .6)',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: '10px',
        }}>
          <Subheading style={{
            color: currentTheme ? currentTheme.color : '#ddd',
            paddingBottom: '.1em'
          }}>Aa</Subheading>
        </div>
        <Select
          value={this.state.value}
          onChange={this.onChange}
          style={{ outline: 'none', boxShadow: 'none' }}
        >
          {themes.map((option, index) => (
            <Option value={option.title} key={option.title}>{option.title}</Option>
          ))}
        </Select>
      </div>
    );
  }
}

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
