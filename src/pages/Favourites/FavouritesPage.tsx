import styles from './FavouritesPage.module.scss';
import { useSelector } from 'react-redux';
import { selectAllProducts, selectfavorites } from '../../redux';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { BreadcrumbsComponent } from '../../UI/Breadcrumbs/Breadcrumbs';
import { Breadcrumb } from '../../types/Breadcrumb';
import { PATHS } from '../../constants';

export const FavouritesPage = () => {
  const productsFromServer = useSelector(selectAllProducts);
  const favouritesFromServer = useSelector(selectfavorites);

  const favouriteProducts = productsFromServer.filter(product =>
    favouritesFromServer.includes(product.itemId),
  );

  const breadcrumbsData: Breadcrumb[] = [
    { label: 'Favourites', path: PATHS.ACCESSORIES.LIST },
  ];

  const goodsLength = favouritesFromServer.length;

  return (
    <div className={styles.page__container}>
      <BreadcrumbsComponent breadcrumbs={breadcrumbsData} />

      <h2 className={styles.title}>Favourites</h2>
      <p className={styles.counter}>{goodsLength} items</p>

      <div className={styles.products}>
        {goodsLength === 0 ? (
          <div className={styles.products__empty}>
            There are no goods in your favourite list
          </div>
        ) : (
          favouriteProducts.map(item => {
            return (
              <div key={item.itemId} className={styles.product}>
                <ProductCard product={item} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
