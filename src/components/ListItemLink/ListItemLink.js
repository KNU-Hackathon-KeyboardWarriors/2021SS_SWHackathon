import React from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function ListItemLink(props) {
  const { primary, to, onPage } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {onPage ? (
          <ListItemText primary={primary} />
        ) : (
          <ListItemText primary={primary} />
        )}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ListItemLink;
