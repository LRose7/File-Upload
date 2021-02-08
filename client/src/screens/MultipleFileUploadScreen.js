import React, { useEffect, useState } from 'react';
import MultipleFileUploader from '../components/MultipleFileUploader';
import { getMultipleFiles } from '../data/api';

function MultipleFileUploadScreen() {
    const [multipleFiles, setMultipleFiles] = useState([]);

    const getMultipleFilesList = async () => {
        try {
            const filesList = await getMultipleFiles();
            setMultipleFiles(filesList);
            console.log(multipleFiles);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMultipleFilesList();
    }, []);

    return(
        <>
            <div className="container mt-2">
                <h3 className="text-primary font-weight-bolder border-bottom text-center">Multiple Files Upload</h3>
                <MultipleFileUploader getMultiple={() => getMultipleFilesList()}></MultipleFileUploader>
            </div>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="col-6">
                        <h4 className="text-success font-weight-bold">Multiple Files</h4>
                        <div className="row">
                            {multipleFiles.map((element, index) => 
                                <div key={element._id}>
                                    <h6 className="text-primary font-weight-bold">{element.title}</h6>
                                    <div className="row">
                                        {element.files.map((file, index) =>
                                            <div className="col-6">
                                                <div className="card mb-2 border-0 p-0">
                                                    <img src={`http://localhost:5000/${file.filePath}`} height="200" className="card-img-top img-responsive" alt="img" />
                                                </div>
                                            </div>    
                                        )}
                                        
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

export default MultipleFileUploadScreen;