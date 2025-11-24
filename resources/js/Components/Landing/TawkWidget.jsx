import { useEffect } from 'react';

const TawkWidget = ({ settings }) => {
    useEffect(() => {
        if (settings?.tawk_property_id && settings?.tawk_widget_id) {
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function () {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = `https://embed.tawk.to/${settings.tawk_property_id}/${settings.tawk_widget_id}`;
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
            })();
        }
    }, [settings]);

    return null; // Komponen ini tidak merender UI visual, hanya script
};

export default TawkWidget;
