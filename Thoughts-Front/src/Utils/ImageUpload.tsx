import { useState } from "react";


export default function ImageUpload ({ setImageUrl }: { setImageUrl: (url: string) => void }) {

    const [journalImg, setJournalImg] = useState <File | null>(null);
    const [imgPreview, setImgPreview] = useState <string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setJournalImg(e.target.files[0]);
            setImgPreview(URL.createObjectURL(e.target.files[0]));
        }
    }
       
    
    const UploadImg = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            

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
                    setImageUrl(imgData.url)
            }
            
            console.log(uploadPreset);
        }

        catch (error) {
            console.log("error uploading image", error);
            setIsLoading(false)
        }
        setIsLoading(false);
    }


    

    return (
    <section className="flex-center">
        <div className="container p-2"> 
            <div className="card flex">
                <form onSubmit = {UploadImg}>
                
                    <input type="file" accept="image/png, image/jpeg, image/jpg" name="image" className="textarea textarea-bordered" onChange={handleImgChange} />
                    {
                        isLoading ? ("...Loading image") : (
                            <button className="btn btn-info btn-m ms-2" type = "submit">Upload</button>
                        )
                    }     
                
                </form>
                <div>
                    <div>
                        {imgPreview && (
                            <img src={imgPreview} alt="Img preview" width={120} className="p-4"/>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    
    )    
}