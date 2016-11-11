//wtl/classes/locale
define([
    'dojo/cookie'
], function (
    cookie
) {
    var localeMap = {
        'en-ca': 1,
        'fr-ca': 2,
        'zh-cn': 3
    };

    return {
        _languageCookieName: "lang",
        _defaultLanguageName:  'en-CA',
        getLocale: function () {
            var localValue = cookie(this._languageCookieName);

            if (!localValue)
            {
                this.setLocale(this._defaultLanguageName);
                localValue = cookie(this._languageCookieName);
            }

            return  (localValue) ? localValue : this._defaultLanguageName;
        },
        getLanguageType :function() {
            var lang = this.getLocale();
            return localeMap[lang.toLowerCase()];
        },
        setLocale: function (language) {
            if (!language)
                language = this._defaultLanguageName;

            cookie(this._languageCookieName, language, { expires: 365, path: '/' });
        }
    }
});
