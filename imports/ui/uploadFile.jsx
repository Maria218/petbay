import { withTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {UserFiles} from '/imports/api/upload/collections.js';
import { Session } from 'meteor/session'
// import IndividualFile from './FileIndividualFile.js';

// const debug = require('debug')('demo:file');

class FileUploadComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploading: [],
      progress: 0,
      inProgress: false,
      file:'',
      imagePreviewUrl:''
    };

    this.uploadIt = this.uploadIt.bind(this);
  }

//   showImages(){
//     const mFiles = this.props.files;
//     console.log("files:" + mFiles);
//     return mFiles.map((file) => {
//         return (
//         <div key ={file._id}>
//             <p>{file.name}</p>
//             <img src={file.path}></img>
//         </div>
//         )
//     }
// );
// }

  uploadIt(e) {
    e.preventDefault();

    let self = this;

    if (e.currentTarget.files && e.currentTarget.files[0]) {
      // We upload only one file, in case
      // there was multiple files selected
      let reader = new FileReader();
      var file = e.currentTarget.files[0];
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }

      reader.readAsDataURL(file)

            console.log(file);

      if (file) {
        const currentUserId = Meteor.userId();
        let uploadInstance = UserFiles.insert({
          file: file,
          fileName: this.props.fileName,
          meta: {
            locator: self.props.fileLocator,
            createdBy: currentUserId,
            // userId: Meteor.userId() // Optional, used to check on server for file tampering
          },
          streams: 'dynamic',
          chunkSize: 'dynamic',
          allowWebWorkers: true // If you see issues with uploads, change this to false
        }, false)

        self.setState({
          uploading: uploadInstance, // Keep track of this instance to use below
          inProgress: true // Show the progress bar now
        });

        // These are the event functions, don't need most of them, it shows where we are in the process
        uploadInstance.on('start', function () {
          console.log('Starting');
        })

        uploadInstance.on('end', function (error, fileObj) {
          console.log('On end File Object: ', fileObj);
          const id = fileObj._id
          console.log(id);
          Session.set('imageId', id)
        })

        uploadInstance.on('uploaded', function (error, fileObj) {

          console.log('uploaded: ', fileObj);

          // Remove the filename from the upload box
          self.refs['fileinput'].value = '';

          // Reset our state for the next file
          self.setState({
            uploading: [],
            progress: 0,
            inProgress: false
          });
        })

        uploadInstance.on('error', function (error, fileObj) {
          console.log('Error during upload: ' + error)
        });

        uploadInstance.on('progress', function (progress, fileObj) {
          console.log('Upload Percentage: ' + progress)
          // Update our progress bar
          self.setState({
            progress: progress
          });
        });

        uploadInstance.start(); // Must manually start the upload
      }
    }
  }


  showUploads() {
    console.log('**********************************', this.state.uploading);

    if (!_.isEmpty(this.state.uploading)) {
      return <div>
        {this.state.uploading.file.name}

        <div className="progress progress-bar-default">
          <div style={{width: this.state.progress + '%'}} aria-valuemax="100"
             aria-valuemin="0"
             aria-valuenow={this.state.progress || 0} role="progressbar"
             className="progress-bar">
            <span className="sr-only">{this.state.progress}% Complete (success)</span>
            <span>{this.state.progress}%</span>
          </div>
        </div>
      </div>
    }
  }

  render() {
    // debug("Rendering FileUpload",this.props.docsReadyYet);
    console.log("files : "+ this.props.docsReadyYet);
    if (this.props.files && this.props.docsReadyYet) {
   let {imagePreviewUrl} = this.state;
   let $imagePreview = null;
   if (imagePreviewUrl) {
     $imagePreview = (<img src={imagePreviewUrl} style={{width:100+"px",height:100+"px"}}/>);
   } else {
     $imagePreview = (<div className="previewText"><br/></div>);
   }
      return (
        <div>
          <div className="col-md-6">
            {/* {this.showImages()} */}
            {$imagePreview}
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>Upload Image:</p>
              <input type="file" id="fileinput"
              disabled={this.state.inProgress}
              ref="fileinput"
                  onChange={this.uploadIt}/>
            </div>
          </div>

          <div className="row m-t-sm m-b-sm">
            <div className="col-md-6">
              {/* {this.showImages()} */}
              {this.showUploads()}
            </div>
          </div>
        </div>)
    } else {
      return <p>loading . . .</p>
    }

  }
}

//
// This is the HOC - included in this file just for convenience, but usually kept
// in a separate file to provide separation of concerns.
//
export default withTracker( ( props ) => {
  const filesHandle = Meteor.subscribe('files.all');
  const docsReadyYet = filesHandle.ready();
  const files = UserFiles.find({}, {sort: {name: 1}}).fetch();

  return {
    docsReadyYet,
    files,
  };
})(FileUploadComponent);
