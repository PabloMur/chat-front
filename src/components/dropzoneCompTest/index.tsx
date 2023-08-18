import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useRecoilState } from "recoil";
import { userImageUploadUrlAtom } from "../../atoms/index";
import css from "./styles.module.css";

const FileUploader = () => {
  const [fileData, setFileData] = useRecoilState(userImageUploadUrlAtom);

  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      setFileData(event.target.result);
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      {!fileData && (
        <div {...getRootProps()} className={css.dropzone}>
          <input {...getInputProps()} />
          <p>
            Arrastra y suelta archivos aquí, o haz clic para seleccionar
            archivos
          </p>
        </div>
      )}
      {fileData && (
        <div className="preview">
          <img src={fileData} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default FileUploader;
