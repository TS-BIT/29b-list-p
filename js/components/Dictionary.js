class Dictionary {
    constructor(selector, name, list) {
        this.selector = selector;
        this.name = name;
        this.dictionaryList = list;
        // elemtas, kuriame generuosime visa turini
        this.DOM = null;
    }

    init() {
        // patikriname, jog validus this.selector
        // patikriname, jog validus this.dictionaryList
        if (!this.isValidSelector() ||
            !this.isValidDictionary() ||
            !this.findTargetElement()) {
            return false;
        }

        // randam this.DOM
        this.findTargetElement()

        // generuojame turini
        this.render();       
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
        this.selector === '') {
            console.error('ERROR: selector turi buti ne tuscias teklstas.');
            return false;
        }
        return true;
    }

    isValidDictionary() {
        if (!Array.isArray(this.dictionaryList) ||
        this.dictionaryList.length === 0) {
            console.error('ERROR: zodynas turi buti ne tuscias array.');
            return false;
        }
        return true;
    }

    findTargetElement() {
        this.DOM = document.querySelector(this.selector);
        
        if(!this.DOM) {
            console.error('ERROR: pagal pateikta selector, norimo elemto nepavyko rasti.');
            return false;
        }
        return true
        
    }

    render() {
        let HTML = '';

        for (let i = 0; i < this.dictionaryList.length; i++) {
            const wordPair = this.dictionaryList[i];
            HTML += `<div class="item">
                <div class="col">${wordPair.en}</div>
                <div class="col">${wordPair.lt}</div>
            </div>`;
        }
            this.DOM.innerHTML = HTML;
    }
    
    isValidWordPair() {
        if (typeof pair !== 'object' || Array.isArray(pair) || pair === null || !pair.en || !pair.lt || typeof pair.en !== 'string' || pair.en === '' || typeof pair.lt !== 'string' || pair.lt === ''  ) {
            console.warn(`WARNIG: verciamu zodziu pora (gauta reisme: ${pair}) turi buti objektas su "en" ir"lt" parametrais, kuriu abu turi buti ne tusti tekstai.`);
            return false;
        }        
        return true;
    }    
}

export { Dictionary }

/*    
render() 

        console.log('piesiam turini.....');
        console.log(this.DOM);
        console.log(this.dictionaryList);

        // const HTML = '<div class="ryts">labas ryts</div>';

        
        const HTML = `<div class="item">
                <div class="col">Dog</div>
                <div class="col">Šuo</div>
            </div>
            <div class="item">
                <div class="col">Cat</div>
                <div class="col">Katė</div>
                </div>`;                
*/             