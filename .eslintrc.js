module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "max-len": [
            "warn",
            80
        ],
        "no-lonely-if": [
            "warn"
        ],
        "no-irregular-whitespace": [
            "error",
            {
                "skipComments": true
            }
        ],
        "no-multi-spaces": [
            "error",
            {
                "exceptions": {
                    "Property": false
                }
            }
        ],
        "no-mixed-spaces-and-tabs": [
            "error",
            "smart-tabs"
        ],
        "no-trailing-spaces": [
            "error",
            {
                "skipBlankLines": false
            }
        ],
        "space-before-blocks": [
            "error",
            "always"
        ],
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-before-function-paren": [
            "error",
            {
                "anonymous": "always",
                "named": "never",
                "asyncArrow": "always"
            }
        ]
    }
};