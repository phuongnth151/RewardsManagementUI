export default class ResponseHelper {
    constructor() {
        this.state = {};
    }

    setHelper(props, val) {
        this.state[props] = val;
    }
    
    isSkuNotFound(args){
        if(!args){
         return false;
        }
        return true;
    }

    isStoreFound(args){
        if(args !== null && args.code !== null && (args.code === 204)){
         return false;
        }
        return true;
    }

    isTimeOut(args){
        if(args !== null && args.code !== null && (args.code === 504)){
            return true;
        }
        return false;
    }

    servicedown(args){
        if(args !== null && args.code !== null && (args.code === 503)){
            return true;
        }
        return false;
    }

    errorHandler(args) {
        let noError = true;
        if(args !== null && (args.code === 503 || args.code === 500)) {

            //set ifError Boolean to false if error code is 500, 503, or 204
            noError = false;
        }
        return noError;
    }

    //TODO: add jsdocs for this method
    showHideScrollBar = (showHide = '') => {
        // if nothing is passed, it will clear the class name
        return document.getElementsByTagName("body")[0].className = showHide;
    }
        
}