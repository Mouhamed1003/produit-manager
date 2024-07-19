import PropTypes from 'prop-types'; // Importez PropTypes depuis React
/**
 * Ligne de tableau avec nom de la categorie
 * 
 * @param {string} name
 */
export function ProductCategoryRow ({name}){
    return <tr>
        <td colSpan={2}><h3><strong>{name}</strong></h3></td>
    </tr>
}

// Définissez le type de la prop 'name' attendue par ProductCategoryRow
ProductCategoryRow.propTypes = {
    name: PropTypes.string.isRequired,
};