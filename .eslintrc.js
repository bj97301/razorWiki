module.exports = {
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    'parser': 'babel-eslint',
    'env': {
        'jest': true,
    },
    'rules': {
        "prefer-arrow-callback": "error",
        "indent": [
            "error",
            4, {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "never"
        ],
        "comma-dangle": ["fix", "always"],
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prop-types': 'off',
    },
    'globals': {
        "fetch": false,
        "process": false,
        "module": false,
        "global": false,
    }
}
