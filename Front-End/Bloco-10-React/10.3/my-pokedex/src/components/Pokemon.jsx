import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image } } = this.props;
        return (
            <section className='pokemon'>
                <section>
                    <p>Nome: {name}</p>
                    <p>Tipo: {type}</p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
                    </p>
                </section>
                <img src={image} alt={`${name} sprite`} />
            </section>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
            measurementUnit: PropTypes.string,
            value: PropTypes.number,
        }),
        image: PropTypes.string
    }).isRequired,

};

export default Pokemon;