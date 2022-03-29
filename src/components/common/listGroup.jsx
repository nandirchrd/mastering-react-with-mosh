import React, { Component } from 'react';
import propTypes from 'prop-types';

export class ListGroup extends Component {
  render() {
    const { items, onItemSelect, selectedGenre, idProperty, textProperty } =
      this.props;
    return (
      <ul className='list-group'>
        {' '}
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[idProperty]}
            style={{ cursor: 'pointer' }}
            className={
              item === selectedGenre
                ? 'list-group-item active'
                : 'list-group-item'
            }>
            {item[textProperty]}
          </li>
        ))}
      </ul>
    );
  }
}

ListGroup.defaultProps = {
  idProperty: '_id',
  textProperty: 'name',
};
ListGroup.propTypes = {
  items: propTypes.array.isRequired,
  onItemSelect: propTypes.func.isRequired,
};

export default ListGroup;
