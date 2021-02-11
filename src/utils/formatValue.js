import 'intl';
import 'intl/locale-data/jsonp/pt-BR.js';

function formatValue(value) {
    return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value);
}

export default formatValue





