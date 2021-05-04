import PropTypes from 'prop-types'

const UserDetails = ({ user }) => { 

    const { name, surname, age } = user;
    return (
        <div>
            <h5>User details </h5>
            <p>Name: {name}</p>
            <p>Surname: {surname}</p>
            <p>Age: {age}</p>
        </div>
    )
}

UserDetails.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
    }),
}

export default UserDetails;