import React, { useState, useEffect } from 'react'
import { singleFileUpload } from '../data/api';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

export default function SingleFileUploader(props) {
    const [singleFile, setSingleFile] = useState('');
    const [singleProgress, setSingleProgress] = useState(0);

    const singleFileChange = (e) => {
        setSingleFile(e.target.files[0]);
        setSingleProgress(0);
    }

    const singleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setSingleProgress(percentage);
        }
    }

    const uploadSingleFile = async () => {
        const formData = new FormData();
        formData.append('file', singleFile);
        await singleFileUpload(formData, singleFileOptions);
    }

 

    return (
        <div className="row mt-7">
            <div className="col-6 mt-4">
                <div className="form-group">
                    <label>Select Single File</label>
                    <input type="file" className="form-control" onChange={(e) => singleFileChange(e)} />
                </div>
                <div className="row">
                    <div className="col-10">
                        <button type="button" className="btn btn-primary" onClick={() => uploadSingleFile()}>Upload</button>
                    </div>
                    <div className="col-2">
                        <CircularProgressbar
                        value={singleProgress}
                        text={`${singleProgress}%`}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: 'butt',
                            textSize: '16px',
                            pathTransitionDuration: 0.5,
                            pathColor: `rgba(255, 136, 136, ${singleProgress / 100})`,
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
