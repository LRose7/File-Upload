import React, { useState, useEffect } from 'react';
import SingleFileUploader from '../components/SingleFileUploader';
import { getSingleFiles } from '../data/api';

function SingleFileUploadScreen() {
    const [singleFiles, setSingleFiles] = useState([]);

    const getSingleFilesList = async () => {
        try {
            const filesList = await getSingleFiles();
            setSingleFiles(filesList);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSingleFilesList();
    },[]);

    return(
        <>
            <div className="container mt-2">
                <h3 className="text-primary font-weight-bolder border-bottom text-center">Single File Upload</h3>
                <SingleFileUploader getSingle={() => getSingleFilesList()}></SingleFileUploader>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-6">
                        <h4 className="text-success font-weight-bold">Single Files List</h4>
                        <div className="row">
                            {singleFiles.map((file, index) => 
                                <div className="col-6">
                                    <div className="card mb-2 border-0 p-0">
                                        <img src={`http://localhost:5000/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img" />
                                    </div>
                                </div>    
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleFileUploadScreen;