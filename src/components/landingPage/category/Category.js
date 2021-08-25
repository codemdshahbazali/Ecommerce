import React, { useEffect, useState } from 'react';
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
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='honmepage--category'>
      <Carousel
        showEmptySlots={true}
        breakPoints={breakPoints}
        disableArrowsOnEnd={false}
        showArrows={windowDimensions > 600 ? true : false}
        itemPadding={[2, 2, 2, 2]}
        focusOnSelect={true}
        outerSpacing={3}>
        {props.categories?.map((element, index) => (
          <CategoryItem category={element} key={index} />
        ))}
      </Carousel>
    </div>
  );
}

export default Category;
