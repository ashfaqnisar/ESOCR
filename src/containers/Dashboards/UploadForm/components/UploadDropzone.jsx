import React from 'react';
import Dropzone from 'react-dropzone';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)'
  },
  title: {
    color: theme.colors.white
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  image: {
    height: '325px !important',
    position: 'relative',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: theme.spacing(2)
  }
}));

const DropZoneMultipleField = props => {
  const { name, value, onChange } = props;
  const onDrop = files => {
    const { onChange } = props;
    console.log(onChange);
    onChange(
      files.map(fl =>
        Object.assign(fl, {
          preview: URL.createObjectURL(fl)
        })
      )
    );
  };

  const removeFile = (index, e) => {
    e.preventDefault();
    onChange(value.filter((val, i) => i !== index));
  };

  const files = value;

  const classes = useStyles();
  return (
    <div className="dropzone dropzone--multiple">
      <Dropzone
        className="dropzone__input"
        accept="image/jpeg, image/png"
        name={name}
        onDrop={filesToUpload => {
          onDrop(value ? value.concat(filesToUpload) : filesToUpload);
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone__input">
            {(!files || files.length === 0) && (
              <Grid container alignItems={'center'} justify={'center'}>
                <Grid item>Drop file here to upload</Grid>
              </Grid>
            )}
            <input {...getInputProps()} />
          </div>
        )}
      </Dropzone>
      {files && Array.isArray(files) && (
        <Grid container alignItems={'center'} justify={'center'}>
          <GridList
            cellHeight={200}
            className={'dropzone__imgs-wrapper'}
            cols={6}
            style={{
              border: 'solid red',
              display: 'flex',
              justifyContent: 'space-evenly',
              overflow: 'auto',
              maxHeight: '600px'
            }}
          >
            {files.map((file, index) => (
              <GridListTile
                key={index}
                className={classes.image}
                style={{ backgroundImage: `url(${file.preview})` }}
              >
                <GridListTileBar
                  title={file.name}
                  classes={{ root: classes.titlebar, title: classes.title }}
                  actionIcon={
                    <IconButton onClick={e => removeFile(index, e)}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      )}

      {/*{files && Array.isArray(files) && (
        <div className="dropzone__imgs-wrapper">
          {files.map((file, i) => (
            <div
              className="dropzone__img"
              key={i}
              style={{ backgroundImage: `url(${file.preview})` }}
            >
              <p className="dropzone__img-name">{file.name}</p>
              <button
                className="dropzone__img-delete"
                type="button"
                onClick={e => removeFile(i, e)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}*/}
    </div>
  );
};

const renderDropZoneMultipleField = props => {
  const { input } = props;
  return <DropZoneMultipleField {...input} />;
};

export default renderDropZoneMultipleField;
