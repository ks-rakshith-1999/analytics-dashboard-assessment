var Ee=Object.create;var me=Object.defineProperty;var we=Object.getOwnPropertyDescriptor;var Ce=Object.getOwnPropertyNames;var Re=Object.getPrototypeOf,Oe=Object.prototype.hasOwnProperty;var xe=(x,d)=>()=>(d||x((d={exports:{}}).exports,d),d.exports);var Ie=(x,d,q,V)=>{if(d&&typeof d=="object"||typeof d=="function")for(let K of Ce(d))!Oe.call(x,K)&&K!==q&&me(x,K,{get:()=>d[K],enumerable:!(V=we(d,K))||V.enumerable});return x};var Ae=(x,d,q)=>(q=x!=null?Ee(Re(x)):{},Ie(d||!x||!x.__esModule?me(q,"default",{value:x,enumerable:!0}):q,x));var ye=xe((de,le)=>{"use strict";(function(x,d){typeof define=="function"&&define.amd?define([],d):typeof le=="object"&&typeof de<"u"?le.exports=d():x.Papa=d()})(de,function x(){"use strict";var d=typeof self<"u"?self:typeof window<"u"?window:d!==void 0?d:{},q=!d.document&&!!d.postMessage,V=d.IS_PAPA_WORKER||!1,K={},ke=0,f={parse:function(t,e){var r=(e=e||{}).dynamicTyping||!1;if(g(r)&&(e.dynamicTypingFunction=r,r={}),e.dynamicTyping=r,e.transform=!!g(e.transform)&&e.transform,e.worker&&f.WORKERS_SUPPORTED){var i=function(){if(!f.WORKERS_SUPPORTED)return!1;var h=(T=d.URL||d.webkitURL||null,b=x.toString(),f.BLOB_URL||(f.BLOB_URL=T.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",b,")();"],{type:"text/javascript"})))),l=new d.Worker(h),T,b;return l.onmessage=be,l.id=ke++,K[l.id]=l}();return i.userStep=e.step,i.userChunk=e.chunk,i.userComplete=e.complete,i.userError=e.error,e.step=g(e.step),e.chunk=g(e.chunk),e.complete=g(e.complete),e.error=g(e.error),delete e.worker,void i.postMessage({input:t,config:e,workerId:i.id})}var s=null;return f.NODE_STREAM_INPUT,typeof t=="string"?(t=function(h){return h.charCodeAt(0)===65279?h.slice(1):h}(t),s=e.download?new ne(e):new re(e)):t.readable===!0&&g(t.read)&&g(t.on)?s=new ae(e):(d.File&&t instanceof File||t instanceof Object)&&(s=new se(e)),s.stream(t)},unparse:function(t,e){var r=!1,i=!0,s=",",h=`\r
`,l='"',T=l+l,b=!1,a=null,w=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||f.BAD_DELIMITERS.filter(function(n){return e.delimiter.indexOf(n)!==-1}).length||(s=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(r=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(b=e.skipEmptyLines),typeof e.newline=="string"&&(h=e.newline),typeof e.quoteChar=="string"&&(l=e.quoteChar),typeof e.header=="boolean"&&(i=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");a=e.columns}e.escapeChar!==void 0&&(T=e.escapeChar+l),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(w=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var u=new RegExp(ie(l),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return N(null,t,b);if(typeof t[0]=="object")return N(a||Object.keys(t[0]),t,b)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||a),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),N(t.fields||[],t.data||[],b);throw new Error("Unable to serialize unrecognized input");function N(n,y,L){var E="";typeof n=="string"&&(n=JSON.parse(n)),typeof y=="string"&&(y=JSON.parse(y));var S=Array.isArray(n)&&0<n.length,I=!Array.isArray(y[0]);if(S&&i){for(var A=0;A<n.length;A++)0<A&&(E+=s),E+=D(n[A],A);0<y.length&&(E+=h)}for(var o=0;o<y.length;o++){var c=S?n.length:y[o].length,v=!1,O=S?Object.keys(y[o]).length===0:y[o].length===0;if(L&&!S&&(v=L==="greedy"?y[o].join("").trim()==="":y[o].length===1&&y[o][0].length===0),L==="greedy"&&S){for(var _=[],F=0;F<c;F++){var C=I?n[F]:F;_.push(y[o][C])}v=_.join("").trim()===""}if(!v){for(var m=0;m<c;m++){0<m&&!O&&(E+=s);var B=S&&I?n[m]:m;E+=D(y[o][B],m)}o<y.length-1&&(!L||0<c&&!O)&&(E+=h)}}return E}function D(n,y){if(n==null)return"";if(n.constructor===Date)return JSON.stringify(n).slice(1,25);var L=!1;w&&typeof n=="string"&&w.test(n)&&(n="'"+n,L=!0);var E=n.toString().replace(u,T);return(L=L||r===!0||typeof r=="function"&&r(n,y)||Array.isArray(r)&&r[y]||function(S,I){for(var A=0;A<I.length;A++)if(-1<S.indexOf(I[A]))return!0;return!1}(E,f.BAD_DELIMITERS)||-1<E.indexOf(s)||E.charAt(0)===" "||E.charAt(E.length-1)===" ")?l+E+l:E}}};if(f.RECORD_SEP="",f.UNIT_SEP="",f.BYTE_ORDER_MARK="\uFEFF",f.BAD_DELIMITERS=["\r",`
`,'"',f.BYTE_ORDER_MARK],f.WORKERS_SUPPORTED=!q&&!!d.Worker,f.NODE_STREAM_INPUT=1,f.LocalChunkSize=10485760,f.RemoteChunkSize=5242880,f.DefaultDelimiter=",",f.Parser=ue,f.ParserHandle=ce,f.NetworkStreamer=ne,f.FileStreamer=se,f.StringStreamer=re,f.ReadableStreamStreamer=ae,d.jQuery){var te=d.jQuery;te.fn.parse=function(t){var e=t.config||{},r=[];return this.each(function(h){if(!(te(this).prop("tagName").toUpperCase()==="INPUT"&&te(this).attr("type").toLowerCase()==="file"&&d.FileReader)||!this.files||this.files.length===0)return!0;for(var l=0;l<this.files.length;l++)r.push({file:this.files[l],inputElem:this,instanceConfig:te.extend({},e)})}),i(),this;function i(){if(r.length!==0){var h,l,T,b,a=r[0];if(g(t.before)){var w=t.before(a.file,a.inputElem);if(typeof w=="object"){if(w.action==="abort")return h="AbortError",l=a.file,T=a.inputElem,b=w.reason,void(g(t.error)&&t.error({name:h},l,T,b));if(w.action==="skip")return void s();typeof w.config=="object"&&(a.instanceConfig=te.extend(a.instanceConfig,w.config))}else if(w==="skip")return void s()}var u=a.instanceConfig.complete;a.instanceConfig.complete=function(N){g(u)&&u(N,a.file,a.inputElem),s()},f.parse(a.file,a.instanceConfig)}else g(t.complete)&&t.complete()}function s(){r.splice(0,1),i()}}}function j(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var r=he(e);r.chunkSize=parseInt(r.chunkSize),e.step||e.chunk||(r.chunkSize=null),this._handle=new ce(r),(this._handle.streamer=this)._config=r}.call(this,t),this.parseChunk=function(e,r){if(this.isFirstChunk&&g(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);i!==void 0&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var h=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var l=h.meta.cursor;this._finished||(this._partialLine=s.substring(l-this._baseIndex),this._baseIndex=l),h&&h.data&&(this._rowCount+=h.data.length);var T=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(V)d.postMessage({results:h,workerId:f.WORKER_ID,finished:T});else if(g(this._config.chunk)&&!r){if(this._config.chunk(h,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);h=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(h.data),this._completeResults.errors=this._completeResults.errors.concat(h.errors),this._completeResults.meta=h.meta),this._completed||!T||!g(this._config.complete)||h&&h.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),T||h&&h.meta.paused||this._nextChunk(),h}this._halted=!0},this._sendError=function(e){g(this._config.error)?this._config.error(e):V&&this._config.error&&d.postMessage({workerId:f.WORKER_ID,error:e,finished:!1})}}function ne(t){var e;(t=t||{}).chunkSize||(t.chunkSize=f.RemoteChunkSize),j.call(this,t),this._nextChunk=q?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(r){this._input=r,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),q||(e.onload=J(this._chunkLoaded,this),e.onerror=J(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!q),this._config.downloadRequestHeaders){var r=this._config.downloadRequestHeaders;for(var i in r)e.setRequestHeader(i,r[i])}if(this._config.chunkSize){var s=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+s)}try{e.send(this._config.downloadRequestBody)}catch(h){this._chunkError(h.message)}q&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(r){var i=r.getResponseHeader("Content-Range");return i===null?-1:parseInt(i.substring(i.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(r){var i=e.statusText||r;this._sendError(new Error(i))}}function se(t){var e,r;(t=t||{}).chunkSize||(t.chunkSize=f.LocalChunkSize),j.call(this,t);var i=typeof FileReader<"u";this.stream=function(s){this._input=s,r=s.slice||s.webkitSlice||s.mozSlice,i?((e=new FileReader).onload=J(this._chunkLoaded,this),e.onerror=J(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var s=this._input;if(this._config.chunkSize){var h=Math.min(this._start+this._config.chunkSize,this._input.size);s=r.call(s,this._start,h)}var l=e.readAsText(s,this._config.encoding);i||this._chunkLoaded({target:{result:l}})},this._chunkLoaded=function(s){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(s.target.result)},this._chunkError=function(){this._sendError(e.error)}}function re(t){var e;j.call(this,t=t||{}),this.stream=function(r){return e=r,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var r,i=this._config.chunkSize;return i?(r=e.substring(0,i),e=e.substring(i)):(r=e,e=""),this._finished=!e,this.parseChunk(r)}}}function ae(t){j.call(this,t=t||{});var e=[],r=!0,i=!1;this.pause=function(){j.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){j.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(s){this._input=s,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):r=!0},this._streamData=J(function(s){try{e.push(typeof s=="string"?s:s.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(h){this._streamError(h)}},this),this._streamError=J(function(s){this._streamCleanUp(),this._sendError(s)},this),this._streamEnd=J(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=J(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function ce(t){var e,r,i,s=Math.pow(2,53),h=-s,l=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,T=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,b=this,a=0,w=0,u=!1,N=!1,D=[],n={data:[],errors:[],meta:{}};if(g(t.step)){var y=t.step;t.step=function(o){if(n=o,S())E();else{if(E(),n.data.length===0)return;a+=o.data.length,t.preview&&a>t.preview?r.abort():(n.data=n.data[0],y(n,b))}}}function L(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function E(){return n&&i&&(A("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+f.DefaultDelimiter+"'"),i=!1),t.skipEmptyLines&&(n.data=n.data.filter(function(o){return!L(o)})),S()&&function(){if(!n)return;function o(v,O){g(t.transformHeader)&&(v=t.transformHeader(v,O)),D.push(v)}if(Array.isArray(n.data[0])){for(var c=0;S()&&c<n.data.length;c++)n.data[c].forEach(o);n.data.splice(0,1)}else n.data.forEach(o)}(),function(){if(!n||!t.header&&!t.dynamicTyping&&!t.transform)return n;function o(v,O){var _,F=t.header?{}:[];for(_=0;_<v.length;_++){var C=_,m=v[_];t.header&&(C=_>=D.length?"__parsed_extra":D[_]),t.transform&&(m=t.transform(m,C)),m=I(C,m),C==="__parsed_extra"?(F[C]=F[C]||[],F[C].push(m)):F[C]=m}return t.header&&(_>D.length?A("FieldMismatch","TooManyFields","Too many fields: expected "+D.length+" fields but parsed "+_,w+O):_<D.length&&A("FieldMismatch","TooFewFields","Too few fields: expected "+D.length+" fields but parsed "+_,w+O)),F}var c=1;return!n.data.length||Array.isArray(n.data[0])?(n.data=n.data.map(o),c=n.data.length):n.data=o(n.data,0),t.header&&n.meta&&(n.meta.fields=D),w+=c,n}()}function S(){return t.header&&D.length===0}function I(o,c){return v=o,t.dynamicTypingFunction&&t.dynamicTyping[v]===void 0&&(t.dynamicTyping[v]=t.dynamicTypingFunction(v)),(t.dynamicTyping[v]||t.dynamicTyping)===!0?c==="true"||c==="TRUE"||c!=="false"&&c!=="FALSE"&&(function(O){if(l.test(O)){var _=parseFloat(O);if(h<_&&_<s)return!0}return!1}(c)?parseFloat(c):T.test(c)?new Date(c):c===""?null:c):c;var v}function A(o,c,v,O){var _={type:o,code:c,message:v};O!==void 0&&(_.row=O),n.errors.push(_)}this.parse=function(o,c,v){var O=t.quoteChar||'"';if(t.newline||(t.newline=function(C,m){C=C.substring(0,1048576);var B=new RegExp(ie(m)+"([^]*?)"+ie(m),"gm"),z=(C=C.replace(B,"")).split("\r"),W=C.split(`
`),H=1<W.length&&W[0].length<z[0].length;if(z.length===1||H)return`
`;for(var M=0,k=0;k<z.length;k++)z[k][0]===`
`&&M++;return M>=z.length/2?`\r
`:"\r"}(o,O)),i=!1,t.delimiter)g(t.delimiter)&&(t.delimiter=t.delimiter(o),n.meta.delimiter=t.delimiter);else{var _=function(C,m,B,z,W){var H,M,k,R;W=W||[",","	","|",";",f.RECORD_SEP,f.UNIT_SEP];for(var Y=0;Y<W.length;Y++){var p=W[Y],ee=0,Q=0,X=0;k=void 0;for(var $=new ue({comments:z,delimiter:p,newline:m,preview:10}).parse(C),Z=0;Z<$.data.length;Z++)if(B&&L($.data[Z]))X++;else{var G=$.data[Z].length;Q+=G,k!==void 0?0<G&&(ee+=Math.abs(G-k),k=G):k=G}0<$.data.length&&(Q/=$.data.length-X),(M===void 0||ee<=M)&&(R===void 0||R<Q)&&1.99<Q&&(M=ee,H=p,R=Q)}return{successful:!!(t.delimiter=H),bestDelimiter:H}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);_.successful?t.delimiter=_.bestDelimiter:(i=!0,t.delimiter=f.DefaultDelimiter),n.meta.delimiter=t.delimiter}var F=he(t);return t.preview&&t.header&&F.preview++,e=o,r=new ue(F),n=r.parse(e,c,v),E(),u?{meta:{paused:!0}}:n||{meta:{paused:!1}}},this.paused=function(){return u},this.pause=function(){u=!0,r.abort(),e=g(t.chunk)?"":e.substring(r.getCharIndex())},this.resume=function(){b.streamer._halted?(u=!1,b.streamer.parseChunk(e,!0)):setTimeout(b.resume,3)},this.aborted=function(){return N},this.abort=function(){N=!0,r.abort(),n.meta.aborted=!0,g(t.complete)&&t.complete(n),e=""}}function ie(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ue(t){var e,r=(t=t||{}).delimiter,i=t.newline,s=t.comments,h=t.step,l=t.preview,T=t.fastMode,b=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(b=t.escapeChar),(typeof r!="string"||-1<f.BAD_DELIMITERS.indexOf(r))&&(r=","),s===r)throw new Error("Comment character same as delimiter");s===!0?s="#":(typeof s!="string"||-1<f.BAD_DELIMITERS.indexOf(s))&&(s=!1),i!==`
`&&i!=="\r"&&i!==`\r
`&&(i=`
`);var a=0,w=!1;this.parse=function(u,N,D){if(typeof u!="string")throw new Error("Input must be a string");var n=u.length,y=r.length,L=i.length,E=s.length,S=g(h),I=[],A=[],o=[],c=a=0;if(!u)return P();if(t.header&&!N){var v=u.split(i)[0].split(r),O=[],_={},F=!1;for(var C in v){var m=v[C];g(t.transformHeader)&&(m=t.transformHeader(m,C));var B=m,z=_[m]||0;for(0<z&&(F=!0,B=m+"_"+z),_[m]=z+1;O.includes(B);)B=B+"_"+z;O.push(B)}if(F){var W=u.split(i);W[0]=O.join(r),u=W.join(i)}}if(T||T!==!1&&u.indexOf(e)===-1){for(var H=u.split(i),M=0;M<H.length;M++){if(o=H[M],a+=o.length,M!==H.length-1)a+=i.length;else if(D)return P();if(!s||o.substring(0,E)!==s){if(S){if(I=[],X(o.split(r)),oe(),w)return P()}else X(o.split(r));if(l&&l<=M)return I=I.slice(0,l),P(!0)}}return P()}for(var k=u.indexOf(r,a),R=u.indexOf(i,a),Y=new RegExp(ie(b)+ie(e),"g"),p=u.indexOf(e,a);;)if(u[a]!==e)if(s&&o.length===0&&u.substring(a,a+E)===s){if(R===-1)return P();a=R+L,R=u.indexOf(i,a),k=u.indexOf(r,a)}else if(k!==-1&&(k<R||R===-1))o.push(u.substring(a,k)),a=k+y,k=u.indexOf(r,a);else{if(R===-1)break;if(o.push(u.substring(a,R)),G(R+L),S&&(oe(),w))return P();if(l&&I.length>=l)return P(!0)}else for(p=a,a++;;){if((p=u.indexOf(e,p+1))===-1)return D||A.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:I.length,index:a}),Z();if(p===n-1)return Z(u.substring(a,p).replace(Y,e));if(e!==b||u[p+1]!==b){if(e===b||p===0||u[p-1]!==b){k!==-1&&k<p+1&&(k=u.indexOf(r,p+1)),R!==-1&&R<p+1&&(R=u.indexOf(i,p+1));var ee=$(R===-1?k:Math.min(k,R));if(u.substr(p+1+ee,y)===r){o.push(u.substring(a,p).replace(Y,e)),u[a=p+1+ee+y]!==e&&(p=u.indexOf(e,a)),k=u.indexOf(r,a),R=u.indexOf(i,a);break}var Q=$(R);if(u.substring(p+1+Q,p+1+Q+L)===i){if(o.push(u.substring(a,p).replace(Y,e)),G(p+1+Q+L),k=u.indexOf(r,a),p=u.indexOf(e,a),S&&(oe(),w))return P();if(l&&I.length>=l)return P(!0);break}A.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:I.length,index:a}),p++}}else p++}return Z();function X(U){I.push(U),c=a}function $(U){var _e=0;if(U!==-1){var fe=u.substring(p+1,U);fe&&fe.trim()===""&&(_e=fe.length)}return _e}function Z(U){return D||(U===void 0&&(U=u.substring(a)),o.push(U),a=n,X(o),S&&oe()),P()}function G(U){a=U,X(o),o=[],R=u.indexOf(i,a)}function P(U){return{data:I,errors:A,meta:{delimiter:r,linebreak:i,aborted:w,truncated:!!U,cursor:c+(N||0)}}}function oe(){h(P()),I=[],A=[]}},this.abort=function(){w=!0},this.getCharIndex=function(){return a}}function be(t){var e=t.data,r=K[e.workerId],i=!1;if(e.error)r.userError(e.error,e.file);else if(e.results&&e.results.data){var s={abort:function(){i=!0,pe(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:ge,resume:ge};if(g(r.userStep)){for(var h=0;h<e.results.data.length&&(r.userStep({data:e.results.data[h],errors:e.results.errors,meta:e.results.meta},s),!i);h++);delete e.results}else g(r.userChunk)&&(r.userChunk(e.results,s,e.file),delete e.results)}e.finished&&!i&&pe(e.workerId,e.results)}function pe(t,e){var r=K[t];g(r.userComplete)&&r.userComplete(e),r.terminate(),delete K[t]}function ge(){throw new Error("Not implemented.")}function he(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var r in t)e[r]=he(t[r]);return e}function J(t,e){return function(){t.apply(e,arguments)}}function g(t){return typeof t=="function"}return V&&(d.onmessage=function(t){var e=t.data;if(f.WORKER_ID===void 0&&e&&(f.WORKER_ID=e.workerId),typeof e.input=="string")d.postMessage({workerId:f.WORKER_ID,results:f.parse(e.input,e.config),finished:!0});else if(d.File&&e.input instanceof File||e.input instanceof Object){var r=f.parse(e.input,e.config);r&&d.postMessage({workerId:f.WORKER_ID,results:r,finished:!0})}}),(ne.prototype=Object.create(j.prototype)).constructor=ne,(se.prototype=Object.create(j.prototype)).constructor=se,(re.prototype=Object.create(re.prototype)).constructor=re,(ae.prototype=Object.create(j.prototype)).constructor=ae,f})});var ve=Ae(ye());addEventListener("message",({data:x})=>{ve.parse(x,{header:!0,dynamicTyping:!0,chunkSize:1e3,chunk:d=>{postMessage({type:"chunk",data:d.data})},complete:()=>{postMessage({type:"complete"})}})});