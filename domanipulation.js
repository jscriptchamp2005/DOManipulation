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
      cookie: document.cookie
    }
  };
  window.$DOManipulation = $DOManipulation;
})(window);
