import React, { useEffect } from "react";

const AmoModal = ({ setModal }) => {
  useEffect(() => {
    (function (windowObj, zero, prefix, paramKey, loadKey, loadedKey) {
      windowObj[prefix + paramKey] = windowObj[prefix + paramKey] || {
        setMeta: function (p) {
          this.params = (this.params || []).concat([p]);
        },
      };
      windowObj[prefix + loadKey] =
        windowObj[prefix + loadKey] ||
        function (f) {
          windowObj[prefix + loadKey].f = (
            windowObj[prefix + loadKey].f || []
          ).concat([f]);
        };
      windowObj[prefix + loadKey]({
        id: "1266678",
        hash: "25301c71e5d46365e814cf236abe7be0",
        locale: "ru",
      });
      windowObj[prefix + loadedKey] =
        windowObj[prefix + loadedKey] ||
        function (f, k) {
          windowObj[prefix + loadedKey].f = (
            windowObj[prefix + loadedKey].f || []
          ).concat([[f, k]]);
        };
    })(window, 0, "amo_forms_", "params", "load", "loaded");
  }, []);

  return (
    <>
      <div
        className="text-white absolute right-0 text-[40px] top-0 cursor-pointer"
        onClick={() => {
          setModal(false);
          // eslint-disable-next-line no-restricted-globals
          window.location.reload(); // Disabling ESLint warning for this line
        }}
      >
        &times;
      </div>
      <script
        id="amoforms_script_1266678"
        async
        charSet="utf-8"
        src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1704775198"
      ></script>
    </>
  );
};

export default AmoModal;
