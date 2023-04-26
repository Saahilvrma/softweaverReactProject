import React from 'react'
import { useDropzone } from 'react-dropzone'

function MyDropzone(props) {
    const { files, setFiles } = props
    const img = {
        width: '100%',
        height: '100%'
    };
    let filesArray = ''
    const baseStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'rgb(139 137 137)',
        borderStyle: 'dashed',
        backgroundColor: '#fafafa',
        color: '#bdbdbd',
        outline: 'none',
        transition: 'border .24s ease-in-out'
    };

    const focusedStyle = {
        borderColor: '#2196f3'
    };

    const acceptStyle = {
        borderColor: '#00e676'
    };

    const rejectStyle = {
        borderColor: '#ff1744'
    };

    const encodeImageFileAsURL = async (file) => {
        let response = ""
        var reader = new FileReader();
        reader.onloadend = async () => {
            response = reader.result
        }
        reader.readAsDataURL(file);
        await new Promise((resolve) => setTimeout(resolve, 1000))
        return response

    }
    const removeImage = (index) => {
        
        setFiles([])
        // setFiles(files);
    };

    const { getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject } = useDropzone({
            accept: {
                'image/*': []
            },
            onDrop: async (acceptedFiles) => {

                await Promise.all(acceptedFiles.map(async (file) => {
                    const newFile = [await encodeImageFileAsURL(file)]
                    filesArray = [...filesArray, newFile]
                }))
                setFiles([...filesArray])

            }
        });

    const thumbs = files.map((file, index) => (
        <>
            <span className="cutBtn float-right" onClick={() => removeImage(index)}>x</span>
            <img
                src={file[0]}
                style={img}
                // Revoke data uri after image is loaded
                // onLoad={() => { URL.revokeObjectURL(file.preview) }}
                className="dropZoneImg"
                alt="" />
        </>
    ));


    const style = React.useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isFocused,
        isDragAccept,
        isDragReject
    ]);

    React.useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach(file => URL.revokeObjectURL(file.preview));
    }, []);

    return (
        <>
            <div className="min-[480px]:grid  grid-cols-4 min-[480px]:max-[992px]:gap-0 gap-8 border-2 border-blue-500 rounded-md">

                <div className="mt-5 mb-5 ml-8 max-[480px]:mr-8">
                    {thumbs}

                </div>
                <div {...getRootProps()} className="col-span-3 align-middle mt-5 mb-5 mr-8 min-[480px]:max-[992px]:ml-4 ">
                    <a href="/" className="w-full flex flex-col items-center bg-white border-1 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-blue-700 dark:bg-gray-1200 dark:hover:bg-gray-700 ">
                        <div className="flex items-center justify-center w-full max-[768px]:w-34">
                            <label htmlFor="dropzone-file" className="max-[480px]:ml-8 flex flex-col items-center bg-blue-100 justify-center w-full h-34 border-2 border-blue-400  rounded-lg cursor-pointer  dark:hover:bg-blue-100 dark:bg-gray-700 hover:bg-blue-100 dark:border-gray-600 dark:hover:border-gray-500">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6 max-[768px]:py-2 max-[768px]:text-center">
                                   <p className="text-sm font-bold text-black max-[768px]:text-xs">Drag and drop your art here to Add more Images</p>
                                    <p className="text-sm font-bold text-black dark:text-gray-400 my-6 max-[768px]:text-xs max-[768px]:my-2">or</p>
                                    <p className="text-white bg-blue-500 focus:ring-2 focus:ring-blue-500 font-medium rounded-full  px-7 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-400 focus:outline-none dark:focus:ring-blue-500 py-1.5 max-[768px]:text-xs max-[768px]:py-1.5 max-[768px]:px-2.5">Choose a File</p>
                                 </div>
                                <input {...getInputProps()} id="dropzone-file" type="file" />
                            </label>
                        </div>
                    </a>
                </div>

            </div>
        </>
    );
}
export default MyDropzone