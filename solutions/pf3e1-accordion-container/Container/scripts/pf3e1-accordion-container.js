/* global b$ */
(function () {
    "use strict";

    var Container = b$.bdom
                    .getNamespace('http://backbase.com/2013/portalView')
                    .getClass('container');
 
    Container.extend(function (bdomDocument, node) {
        Container.apply(this, arguments);
        this.isPossibleDragTarget = true;
    }, {
        localName: 'pf3E1AccordionContainer',
        // the same as the viewNamespace property in the import XML for the container and in the soy template
        namespaceURI: 'templates_pf3E1AccordionContainer'
    }, {
        // template: function(json) {
        //     var data = {item: json.model.originalItem};
        //     var sTemplate = templates_pf3E1AccordionContainer.pf3E1AccordionContainer(data);
        //     return sTemplate;
        // },

        handlers: {
            DOMReady: function(){

            },

            preferencesSaved: function(event){
                if(event.target === this) {
                    this.refreshHTML(function(item){
                        // console.log(item)
                    });
                }
            }
        }
    });
})();
