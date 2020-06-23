var regRules = {
  leggerDigitSymbol: /^([-!$%^&*()_+|~=`{}\[\]:";'?,.\/]|[！@#￥%……&*（）\—\—+\-={}|：”《》？【】、；’，。、]|\d|[a-zA-Z])+$/,
  leggerDigitSymbol0: /^([-!$%^&*()_+|~=`{}\[\]:";'?,.\/]|[！@#￥%……&*（）\—\—+\-={}|：”《》？【】、；’，。、]|\d|[a-zA-Z])*$/,
  leggerDigitSymbol20: /^([-!$%^&*()_+|~=`{}\[\]:";'?,.\/]|[！@#￥%……&*（）\—\—+\-={}|：”《》？【】、；’，。、]|\d|[a-zA-Z]){0,20}$/,
  nonSpace: /^\S+$/,
  digit: /^\d+$/,
  noBracket: /^[^<>]+$/,
  noBracketWithEmpty: /^((?![<>]).)*$/,
  numOrLetter: /^[0-9a-zA-Z]+$/,
  numOrLetterWithEmpty: /^[0-9a-zA-Z-]*$/,
  numOrLetter40: /^[0-9a-zA-Z]{2,40}$/,
  numOrLetterCross40: /^[0-9a-zA-Z-]{2,40}$/,
  biggerThanOrEqualZero: /(^([1-9][0-9]*)(\.[0-9]*[1-9])$)|(^0\.[0-9]*[1-9]$)|0|(^[1-9][0-9]*$)/,
  biggerThanZero: /(^([1-9][0-9]*)(\.[0-9]*[1-9])$)|(^0\.[0-9]*[1-9]$)|(^[1-9][0-9]*$)/,
  numberReasonably: /(^(0|[1-9][0-9]{0,7})(\.[0-9]{1,2})?$)/,
  numberReasonablyWithEmpty: /(^(0|[1-9][0-9]{0,7})(\.[0-9]{1,2})?$)|^$/,
  numberReasonablyBack4: /(^(0|[1-9][0-9]{0,7})(\.[0-9]{1,4})?$)/,
  fiveDigits: /(^(0|[1-9][0-9]{0,2})(\.[0-9]?[1-9])?$)/,
  front3Back3: /(^(0|[1-9][0-9]{0,2})(\.[0-9]?[0-9]?[1-9])?$)/,
  noLeadingOrEndingSpace: /(^\S+$|^\S+\s+\S+$)/,
  positiveInteger: /^([1-9][0-9]{0,7}|0)$/,
  lessThan100: /^([0-9]|[1-9][0-9]|100)$/,
  lessThan10000: /^([1-9][0-9]{0,3})$/,
  required: /.+/,
  leggerDigitSymbol1: /^([-!@#$%^&*()_+|~=`{}\[\]:";'?,.\/]|[！@#￥%……&*（）\—\—+\-={}|：”《》？【】、；’，。、]|\d|[a-zA-Z\u4e00-\u9fa5])*$/,
  beforeSkuMessage: /^(SKU)+/,
  Emoj: /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi
};
export default regRules;