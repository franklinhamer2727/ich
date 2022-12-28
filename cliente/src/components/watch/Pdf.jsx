import React from 'react';
import FileViewer from 'react-file-viewer';

class Pdf extends React.Component{
    state={
        fileUrl: null,
    };
    componentDidMount(){
        this.fetchFile()
    }

}