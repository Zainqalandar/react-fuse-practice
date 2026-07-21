import themesConfig from 'app/configs/themesConfig';
import i18n from '../../i18n';
import authRoles from "../auth/authRoles";

const settingsConfig = {
    layout: {
        style: 'defaultLayout',
        config: {
            navbar: {
                display: false,
            },
            footer: {
                display: false,
            },
            leftSidePanel: {
                display: false,
            },
            rightSidePanel: {
                display: false,
            },
        },
    },
    customScrollbars: true,
    direction: i18n.dir(i18n.options.lng) || 'ltr', // rtl, ltr
    theme: {
        main: themesConfig.default,
        navbar: themesConfig.default,
        toolbar: themesConfig.default,
        footer: themesConfig.default,
    },
    defaultAuth: authRoles.all,
    loginRedirectUrl: '/',
};

export default settingsConfig;
