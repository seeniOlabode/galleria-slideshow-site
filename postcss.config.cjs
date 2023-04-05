module.exports = {
    plugins: {
        "postcss-mixins": {},
        "postcss-nested": {},
        "postcss-preset-env": {stage: 1},
        "postcss-import": {},
        "postcss-css-reset": {},
        "postcss-external-vars": {
            data: {
                colors: {
                    black: "rgba(0, 0, 0, 1)",
                    "grey": "rgba(125, 125, 125, 1)",
                    "light-grey": "rgba(229, 229, 229, 1)",
                    "lighter-grey": "rgba(243, 243, 243, 1)",
                    white: "rgba(255, 255, 255, 1)"
                }
            },
        }
    }
}
