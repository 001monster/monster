import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-RIXSSPKG.js";
import "./chunk-ERH5PQIG.js";
import "./chunk-LCZWRCVV.js";
import "./chunk-YPTPVA7L.js";
import "./chunk-ANKY43RT.js";
import "./chunk-RRVQ2EVT.js";
import "./chunk-YACYAO4R.js";
import {
  defineComponent,
  h
} from "./chunk-DAFWFJC4.js";
import "./chunk-MQXBTJN7.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/LocalEncrypt.js
var LocalEncrypt_default = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { isEncrypted, validateToken } = usePathEncrypt();
    return () => {
      var _a;
      return isEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_LocalEncrypt__js
var theme_hope_modules_encrypt_components_LocalEncrypt_js_default = LocalEncrypt_default;
export {
  theme_hope_modules_encrypt_components_LocalEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_LocalEncrypt__js.js.map