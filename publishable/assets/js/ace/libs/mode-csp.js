ace.define("ace/mode/csp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,r){"use strict";var i=e("../lib/oop"),s=e("./text_highlight_rules").TextHighlightRules,o=function(){var e=this.createKeywordMapper({"constant.language":"child-src|connect-src|default-src|font-src|frame-src|img-src|manifest-src|media-src|object-src|script-src|style-src|worker-src|base-uri|plugin-types|sandbox|disown-opener|form-action|frame-ancestors|report-uri|report-to|upgrade-insecure-requests|block-all-mixed-content|require-sri-for|reflected-xss|referrer|policy-uri",variable:"'none'|'self'|'unsafe-inline'|'unsafe-eval'|'strict-dynamic'|'unsafe-hashed-attributes'"},"identifier",!0);this.$rules={start:[{token:"string.link",regex:/https?:[^;\s]*/},{token:"operator.punctuation",regex:/;/},{token:e,regex:/[^\s;]+/}]}};i.inherits(o,s),t.CspHighlightRules=o})),ace.define("ace/mode/csp",["require","exports","module","ace/mode/text","ace/mode/csp_highlight_rules","ace/lib/oop"],(function(e,t,r){"use strict";var i=e("./text").Mode,s=e("./csp_highlight_rules").CspHighlightRules,o=function(){this.HighlightRules=s};e("../lib/oop").inherits(o,i),function(){this.$id="ace/mode/csp"}.call(o.prototype),t.Mode=o})),ace.require(["ace/mode/csp"],(function(e){"object"==typeof module&&"object"==typeof exports&&module&&(module.exports=e)}));
