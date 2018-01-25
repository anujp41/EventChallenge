import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  
  const {email, handleSubmit} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <br/>
      <form onSubmit={handleSubmit} name={event}>
        <div>
          <label htmlFor="name"><small>Event</small></label>
          <input name="name" type="text" />
        </div>
        <div>
          <label htmlFor="location"><small>Location</small></label>
          <input name="location" type="text" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email
  }
}

const mapDispatch = (state) => {
  return {
    handleSubmit(event) {
      event.preventDefault();
      const eventName = event.target.name.value;
      const eventLocation = event.target.location.value;
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
