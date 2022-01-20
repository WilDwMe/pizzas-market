import React, {useState} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Button from '../button';



const ItemBlock = ({id, name, price, imageURL, types, sizes, onAddItem}) => {
    const avaibleTypes = ['тонкое', 'традицинное'];
    const avaibleSize = [26, 30, 40];

    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const onSelectType = (index) => {
        setActiveType(index);
    }

    const onSelectSize = (index) => {
        setActiveSize(index);
    }

    const handleAddItem = () => {
      const obj = {
        id,
        name,
        imageURL,
        price,
        size: sizes[activeSize],
        type: avaibleTypes[activeType]
      }
    onAddItem(obj);
    };

    return (
        <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={imageURL}
          alt="Pizza"
        />
          <h4 className="pizza-block__title">{name}</h4>
          <div className="pizza-block__selector">
            <ul>
                { avaibleTypes.map((type, index) => 
                <li key={type} 
                onClick={() => onSelectType(index)} 
                className={cn({
                    active: activeType === index,
                    disabled: !types.includes(index)
                    })}>{avaibleTypes[index]}</li>) }
            </ul>
            <ul>
            { avaibleSize.map((size, index) => 
                <li key={size} 
                onClick={() => onSelectSize(index)} 
                className={cn({
                    active: activeSize === index,
                    disabled: !sizes.includes(size)
                    })}>{avaibleSize[index]} см</li>) }
            </ul>
          </div>
          <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price} ₽</div>
            <Button onClick={handleAddItem} 
            className="button--add" 
            outline>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill="white"
                />
              </svg>
              <span>Добавить</span>
              <i>2</i>
            </Button>
          </div>
        </div>
    )
}

ItemBlock.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    imageURL: PropTypes.string,
    types: PropTypes.array,
    sizes: PropTypes.array,
    handleAddItem: PropTypes.func
}

ItemBlock.defaultProps = {
  sizes: [],
  types: [],
  price: 0,
  name: '-'
}

export default ItemBlock;