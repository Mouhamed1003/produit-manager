
export function ProductRow({ product }) {
    const style = product.stocked ? undefined : { color: 'white' , backgroundColor:'red'};
    return (
      <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
