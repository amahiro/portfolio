class Hamburger {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.js-hamburger');
        this.DOM.body = document.querySelector('body');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        const isTouchCapable =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0;
    
        return isTouchCapable ? "touchstart" : "click";
    }

    _toggle() {
        this.DOM.btn.classList.toggle('is-hamburger-open');
        this.DOM.body.classList.toggle('is-hamburger-body');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    }
}
