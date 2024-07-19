import PropTypes from 'prop-types'; // Importez PropTypes depuis React
/**
 * Ligne produit dans un tableau a 2 colonnes (nom / prix)
 * 
 * @param {{name: string, stocked: boolean, price: string, product}}
 */
export function ProductRow({ product }) {
    const style = product.stocked ? undefined : { color: 'white' , backgroundColor:'red'};
    return (
      <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }

// Définissez le type de chaque prop attendue par ProductRow
ProductRow.propTypes = {
    product: PropTypes.shape({
      name: PropTypes.string.isRequired,
      stocked: PropTypes.bool.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
  };