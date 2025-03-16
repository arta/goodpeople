# Dark Mode implementation key details notes

## States:
- light|dark (L|D)
- default (visitor's system theme)

## Parts:
- two sets of colors
- L|D toggle button = SENSOR
- body tag w/ state class <body class="color-theme-[light|dark]"> = ACTUATOR
- color_theme.js module file = PROCESSORs
- localStorage for state persistance = STORE
- variable for state runtime = STORE

## State stores:
- persistant - JS localStorage item "colorThemeStore"
- runtime - JS variable "colorTheme"

## Events:
- page load
- toggle button click
