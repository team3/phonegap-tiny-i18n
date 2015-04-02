# phonegap-tiny-i18n
Tiny Javascript localization library for PhoneGap/Cordova applications.
Library depends on jquery and may or may not use Cordova Globalization plugin.

##Simple usage:##
Put your localized strings in some file as follows:
```javascript
$(function() {
    $.i18n.strings['en-US'] = $.i18n.strings.en = $.extend($.i18n.strings.en, {
            "hello world": "Hello World",
            "connecting to device": "Connecting to Device",
            "device is ready": "Device is Ready"
    })
});
```

Add the library itself and localization strings to your index.html:
```html
<script src="js/i18n.js"></script>
<script src="i18n/demo.i18n.en.js"></script>
```

Add special "i18n" attribute to each html-tag that should be localized:
```html
<title i18n="hello world">Hello World</title>
```

Initialize library somewhere in your `onDeviceReady()` callback:
```javascript
// setting up localization, params:
// 1st (true) - do localization upon ready
// 2nd (false) - do not use globalization plugin, use navigator.language instead
$.i18n.init(true, false);
```
