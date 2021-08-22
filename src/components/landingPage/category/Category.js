import React from 'react';
import CategoryItem from './CategoryItem';
import './Category.css';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

function Category(props) {
  return (
    <div className='honmepage--category'>
      <Carousel
        showEmptySlots={true}
        breakPoints={breakPoints}
        showArrows={true}
        disableArrowsOnEnd={false}
        itemPadding={[2, 2, 2, 2]}
        outerSpacing={3}>
        {props.categories?.map((element, index) => (
          <CategoryItem category={element} key={index} />
        ))}
      </Carousel>
    </div>
  );
}

export default Category;
