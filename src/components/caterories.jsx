import React, {useState} from 'react';

const Categories = React.memo(({onClickItem}) => {

  const items = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые'
  ]

    const [active, setActive] = useState(null);

    const onSelectItem = (index) => {
        setActive(index);;
        onClickItem(index);
    }

    console.log('RENDER CAT')

    return(
        <div className="categories">
        <ul>
          <li className={active === null ? 'active' : ''}
          onClick={() => setActive(null)}>Все</li>

          { items && items.map((item, index) => 
          <li 
          className={active === index ? 'active' : ''} 
          key={`${item}_${index}`} 
          onClick={() => onSelectItem(index, item)}>{item}
          </li>) }
        </ul>
      </div>
    )
})

export default Categories;