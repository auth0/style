import React, { PropTypes } from 'react';
import { Example, PropertiesTable } from 'react/components';
import './index.styl';

const ComponentPage = ({ title, name, description, props, url, examples, reactBootstrap }) =>
  <section className="react-component-page">
    <div className="component-information">
      <h1 className="component-title">{title}</h1>
      <p className="component-description">{description}</p>
    </div>
    {reactBootstrap &&
      <div>
        <p>
          This component is from
          {' '}<a href="https://react-bootstrap.github.io/">React-Bootstrap</a>,
          find more info about this component <a href={reactBootstrap}>here</a>.
          License:
          {' '}
          <a href="https://github.com/react-bootstrap/react-bootstrap/blob/master/LICENSE">
            MIT
          </a>.
        </p>
      </div>}
    {examples.map((example, index) =>
      <Example
        key={index} // eslint-disable-line react/no-array-index-key
        url={url}
        component={example.component}
        code={example.code}
        title={example.title}
        componentName={name}
        showTitle={example.showTitle}
        exampleUrl={example.url}
        center={example.center}
      />
    )}
    {props && <PropertiesTable props={props} />}
  </section>;

ComponentPage.defaultProps = {
  props: undefined,
  reactBootstrap: ''
};

ComponentPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  props: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  examples: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  reactBootstrap: PropTypes.string
};

export default ComponentPage;
