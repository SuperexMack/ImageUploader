import { useState ,  useRef} from 'react';
import PhotoUploader from "./imageUploader.jpeg";
import './App.css';

function App() {
  const inputImage = useRef(null)
  const [Image, imageUploader] = useState("");

  const downloadButton = (ImageSrc , ImgName)=>{
    const link = document.createElement('a')
    link.href = ImageSrc
    link.download = ImgName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    console.log("ho gya download")
  }

  
  const makeRef = () => {
    inputImage.current.click();
  };

  const UploadTheImage = (event)=>{
    let file = event.target.files[0]
    console.log(file)
    imageUploader(event.target.files[0])
    console.log(Image)
    // some changes were placed
  }

  return (
    <>
      <h1 className='Heading'>Photo uploader </h1>
      <div className='PhotoContent' onClick={makeRef}>
        {Image?<img className='photo' src={URL.createObjectURL(Image)}/> : <img src={PhotoUploader}/>}
        <input type='file' ref={inputImage} onChange={UploadTheImage} style={{ display: 'none' }}></input>
        <p className='aboutPara'>Click the image to upload the photo</p>
       
      </div>
       <button className='downloadButton' onClick={()=>{
          downloadButton(URL.createObjectURL(Image) , "profileImage")
        }}>Download Image </button>
    </>
  );
}

export default App;
