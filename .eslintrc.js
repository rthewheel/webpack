var OFF = 0, WARN = 1, ERROR = 2;

module.exports = exports = {
    "root": true,
    env: {
        'es6': true,        // We are writing ES6 code
        'browser': true,    // for the browser
        'commonjs': true    // and use require() for stylesheets
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        },
        "sourceType": "module"
    },
    "rules":{
        "no-console": OFF,
        "jsx-quotes": WARN,
        "no-unused-vars": WARN,
        "no-undef": WARN,
        "react/jsx-no-undef": WARN,
        "react/jsx-uses-react": WARN,
        "react/jsx-uses-vars": WARN,
        "react/react-in-jsx-scope": WARN

    },
    "globals": {
        "ReactDOM": true,
        "React": true,
        "$": true
    },
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "pragma": "React",  // Pragma to use, default to "React"
            "version": "15.0" // React version, default to the latest React stable release
        }
    },

    "extends": ["eslint:recommended", "plugin:react/recommended"]
};