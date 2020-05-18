import React from 'react';
import { Avatar, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import AvatarImg from '../media/me-original.png';
import useInputState from '../hooks/useInputState';
import './NewBeech.css';

const useStyles = makeStyles({
    inner: {
        "&&&:before": {
            borderBottom: "none"
          },
          "&&:after": {
            borderBottom: "none"
          },
        fontSize: "1.4rem"
    }
  });

function NewBeech() {
    const classes = useStyles();
    const [beech, changeBeechState] = useInputState("");
    return (
        <div className="NewBeech">
            <div className="NewBeech-header">
                <h2>Home</h2>
                <i className="fad fa-diamond"></i>
            </div>
            <div className="NewBeech-main">
                <Avatar alt="Remy Sharp" src={AvatarImg} />
                <div className="NewBeech-aside">
                    <TextField
                        InputProps={{
                            className: classes.inner
                        }}
                        autoFocus
                        value={beech}
                        onChange={changeBeechState}
                        placeholder="What's wrong?" 
                        id="beech" 
                        multiline
                        type="text" 
                        fullWidth />
                    <div className="NewBeech-footer">
                        <div className="NewBeech-icons">
                            <i className="fal fa-image"></i>
                            <i className="fal fa-film"></i>
                            <i className="fal fa-chart-bar"></i>
                            <i className="fal fa-angry"></i>
                        </div>
                        <button className="NewBeech-button">Beech</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewBeech;