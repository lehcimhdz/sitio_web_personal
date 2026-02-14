
const React = require('react');

module.exports = new Proxy({}, {
    get: (target, prop) => {
        return (props) => React.createElement('svg', { ...props, 'data-testid': `icon-${prop}` });
    }
});
