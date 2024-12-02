import { useState } from "react";


export default function ImageUpload () {

    const [journalImg, setJournalImg] = useState <File | null>(null);
    const [imgPreview, setImgPreview] = useState <string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

    const handleImgChange = (e) => {
        setJournalImg(e.target.files[0]);
        setImgPreview(URL.createObjectURL(e.target.files[0]));
    }
    
    const UploadImg = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            let imgURL;

            if (journalImg && (journalImg.type === "image/png" || journalImg.type === "image/jpg" || journalImg.type === "image/jpeg")) 
                {
                    const image = new FormData();
                    image.append("file", journalImg);
                    // image.append("cloud_name", "dmoaqxaqk");
                    image.append("upload_preset", uploadPreset);

                    const response = await fetch(
                        "https://api.cloudinary.com/v1_1/dmoaqxaqk/image/upload",
                        {
                            method: "post",
                            body: image
                        }
                    );
                    const imgData = await response.json();
                    imgURL = imgData.url;
            }
            alert(imgURL);
            console.log(uploadPreset);
        }

        catch (error) {
            console.log("error uploading image", error);
            setIsLoading(false)
        }
    }


    

    return (
    <section className="flex-center">
        <div className="container p-2">
            <h2>Upload Image Here</h2> 
            <div className="card">
                <form onSubmit = {UploadImg}>
                <p>
                    <label>Image:</label>
                    <input type="file" accept="image/png, image/jpeg, image/jpg" name="image" onChange={handleImgChange} />
                </p> 
                <p>
                    {
                        isLoading ? ("...Loading image") : (
                            <button className="btn btn-info" type = "submit">Upload</button>
                        )
                    }     
                </p>
                </form>
                <div>
                    <div>
                        {imgPreview && (
                            <img src={imgPreview} alt="Img preview"/>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    
    )    
}