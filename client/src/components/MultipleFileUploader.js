import React, { useState } from 'react';
import { multipleFilesUpload } from '../data/api';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function MultipleFileUploader(props) {
    const [multipleFiles, setMultipleFiles] = useState('');
    const [title, setTitle] = useState('');
    const [multipleProgress, setMultipleProgress] = useState(0);

    const multipleFileChange = (e) => {
        setMultipleFiles(e.target.files);
        setMultipleProgress(0);
    }

    const multipleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setMultipleProgress(percentage);
        }
    }

    const UploadMultipleFiles = async () => {
        const formData = new FormData();
        formData.append('title', title);
        for (let i=0; i < multipleFiles.length; i++) {
            formData.append('files', multipleFiles[i]);
        }
        await multipleFilesUpload(formData, multipleFileOptions);
        props.getMultiple();

        console.log(multipleFiles);
    }

    return (
        <div className="row mt-7">
            <div className="row">
                <label>Title</label>
                <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title for Your Gallery" className="form-control" />
            </div>
            <div className="col-6 mt-4">
                <div className="form-group">
                    <label>Select Multiple Files</label>
                    <input type="file" className="form-control" onChange={(e) => multipleFileChange(e)} multiple/>
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-primary" onClick={() => UploadMultipleFiles()}>Upload</button>
                    </div>
                    <div className="col-2">
                        <CircularProgressbar
                        value={multipleProgress}
                        text={`${multipleProgress}%`}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: `rgba(255, 136, 136, ${multipleProgress / 100})`,
                            textColor: '#e7eff5',
                            trailColor: '#336388',
                            backgroundColor: '#6d7174'
                        })}
                        >
                        </CircularProgressbar>
                    </div>
                </div>
            </div>            
        </div>
    )

}