import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

class SimplePopover extends React.Component {
  render() {
    const { classes, anchorEl, handleClose, cellValue } = this.props;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={(e) => handleClose()}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>Cell value: <b style={{color: '#CC0000'}}>{cellValue}</b><br/>This is a material-ui popover</Typography>
        </Popover>
      </div>
    );
  }
}

SimplePopover.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimplePopover);