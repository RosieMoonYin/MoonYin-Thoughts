import { useState } from "react";

export default function ImageUploadBLOB ({ setImageUrl }: { setImageUrl: (url: string) => void }) {
    const [journalImg, setJournalImg] = useState<File | null>(null);
    const [imgPreview, setImgPreview] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setJournalImg(e.target.files[0]);
            setImgPreview(URL.createObjectURL(e.target.files[0]));
        }
    };

    const UploadImg = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            if (journalImg) {
                const formData = new FormData();
                formData.append("file", journalImg);

                const response = await fetch("my_controller_endpoint", {
                    method: "POST",
                    body: formData,
                });

                if (!response.ok) {
                    throw new Error("Error uploading image");
                }

                const imgData = await response.json();
                setImageUrl(imgData.url);
            }
        } catch (error) {
            console.log("Error uploading image:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="flex-center">
            <div className="container p-2">
                <div className="card flex">
                    <form onSubmit={UploadImg}>
                        <input
                            type="file"
                            accept="image/png, image/jpeg, image/jpg"
                            name="image"
                            className="textarea textarea-bordered"
                            onChange={handleImgChange}
                        />
                        {isLoading ? (
                            "...Loading image"
                        ) : (
                            <button className="btn btn-info btn-m ms-2" type="submit">
                                Upload
                            </button>
                        )}
                    </form>
                    <div>
                        {imgPreview && (
                            <img src={imgPreview} alt="Img preview" width={120} className="p-4" />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
