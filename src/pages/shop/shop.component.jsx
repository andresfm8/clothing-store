import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopItems } from '../../redux/shop/shop.selector.js';

import CollectionPreview from '../../components/collection.-preview/collection-preview.component.jsx';

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps}/>
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems
})

export default connect(mapStateToProps)(ShopPage);