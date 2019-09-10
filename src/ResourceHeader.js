import PropTypes from 'prop-types'
import React from 'react'

const ResourceHeader = ({ label, resource }) => {
  return (
    <div
      className="rbc-resource-header"
      onClick={
        resource.onClick !== null && typeof resource.onClick === 'function'
          ? resource.onClick
          : null
      }
    >
      {label}
    </div>
  )
}

ResourceHeader.propTypes = {
  label: PropTypes.node,
  index: PropTypes.number,
  resource: PropTypes.object,
}

export default ResourceHeader
