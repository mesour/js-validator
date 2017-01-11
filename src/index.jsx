import 'mesour-core/dist/mesour.min.js';
import Validator from './Validator.jsx';

(function(mesour) {
	mesour.createWidget('validator', new Validator());
})(window.mesour);

export default Validator;