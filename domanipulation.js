/**
  DOManipulation 1.0
  jscriptchamp2005 brings his 3rd JavaScript library called DOManipulation.
  
  This will manipulate with the DOM a lot easier (jQuery style).
  It is easy because the only parameter of the $DOManipulation function you have to pass in is the root element (whether you are working with either HTML or XML).
  
  Specs:
    - Uses all functions associated with the DOM
    - No need to reference the document object when calling $DOManipulation.method()
    
  Credit goes to where it is due, enjoy the library!
**/
(function(window, undefined) {
  function $DOManipulation(rootElement) {
    if(window === this) {
      return new $DOManipulation(rootElement);
    }
  };
  
  $DOManipulation.fn = $DOManipulation.prototype = {
    props: {
      allElements: document.getElementsByTagName("*"),
      HTMLText: function(elementInd) {
        return this.allElements[elementInd].innerHTML;
      },
      regText: function(elementInd) {
        return.this.allElements[elementInd].textContent;
      },
      links: document.anchors,
      URI: document.baseURI,
      bodyElement: document.body,
      cookie: document.cookie,
      doctype: document.doctype,
      rootElement: document.documentElement,
      mode: document.documentMode,
      docURI: document.documentURI,
      serverDomain: document.domain,
      embedElements: document.embeds,
      formElements: document.forms,
      headElement: document.head,
      images: document.images,
      DOMImplementation: document.implementation,
      encoding: document.inputEncoding,
      latestUpdate: document.lastModified,
      areaLinks: document.links,
      loadingStatus: document.ready,
      linkingDoc: document.referrer,
      codingScripts: document.scripts,
      webpageTitle: document.title,
      docURL: document.URL
    },
    selectViaID: function(id) {
      for(var i = 0; i < this.props.allElements.length; i++) {
        if(this.props.allElements[i].getAttribute('id') == id) {
          return this.props.allElements[i];
        }
      }
    },
    selectViaClass: function(class) {
      for(var j = 0; j < this.props.allElements.length; j++) {
        if(this.props.allElements[j].getAttribute('class') == class) {
          return this.props.allElements[j];
        }
      }
    },
    selectViaTag: function(tag) {
      for(var k = 0; < this.props.allElements.length; k++) {
        if(document.getElementsByTagName(this.props.allElements[k]) == tag) {
          return this.props.allElements[k];
        }
      }
    },
    selectViaName: function(fname) {
      for(var l = 0; l < this.props.allElements.length; l++) {
        if(this.props.allElements[l].getAttribute('name') == fname) {
          return this.props.allElements[l];
        }
      }
    },
    selectViaNamespaceName: function(namespace, name) {
      if(document.documentElement.getAttribute('xmlns') == null || document.documentElement.getAttribute('xmlns') == '') {
        throw new Error("No namespace provided");
      } else {
        for(var m = 0; m < this.props.allElements.length; m++) {
          if(document.getElementsByTagName(this.props.allElements[m]) == name) {
            return this.props.allElements[m];
          }
        }
      }
    }
  };
  window.$DOManipulation = $DOManipulation;
})(window);
