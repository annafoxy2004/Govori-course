import React, { useEffect } from "react";
import "./request.css";

const AmoFormsComponent = () => {
  useEffect(() => {
    (function (
      windowObject,
      zero,
      amoFormsPrefix,
      paramsKey,
      loadKey,
      loadedKey
    ) {
      windowObject[amoFormsPrefix + paramsKey] = windowObject[
        amoFormsPrefix + paramsKey
      ] || {
        setMeta: function (p) {
          this.params = (this.params || []).concat([p]);
        },
      };

      windowObject[amoFormsPrefix + loadKey] =
        windowObject[amoFormsPrefix + loadKey] ||
        function (f) {
          windowObject[amoFormsPrefix + loadKey].f = (
            windowObject[amoFormsPrefix + loadKey].f || []
          ).concat([f]);
        };

      windowObject[amoFormsPrefix + loadKey]({
        id: "1266666",
        hash: "d8e405e3541b820f6251ebf63f7f1444",
        locale: "ru",
      });

      windowObject[amoFormsPrefix + loadedKey] =
        windowObject[amoFormsPrefix + loadedKey] ||
        function (f, k) {
          windowObject[amoFormsPrefix + loadedKey].f = (
            windowObject[amoFormsPrefix + loadedKey].f || []
          ).concat([[f, k]]);
        };
    })(window, 0, "amo_forms_", "params", "load", "loaded");

    const script = document.createElement("script");
    script.id = "amoforms_script_1266666";
    script.async = true;
    script.charset = "utf-8";
    script.src =
      "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1704771889";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div></div>;
};

export default AmoFormsComponent;
