import { convertToBase64 } from "../helpers/convertToBase64";
import { DropzoneState, useDropzone } from "react-dropzone";
import { useAppDispatch } from "../../store/store";
import { setPromptImage } from "../../store/slices/promptSlice";

export const useDropImage = (): DropzoneState => {
  const dispatch = useAppDispatch();
  const onDrop = async (acceptedFiles: File[]) => {
    // используем асинхронный импорт что-бы не взрываться на билде, т.к. либа использует window при инициализации
    let heic2any = await import("heic2any");
    let image: File | Blob = acceptedFiles?.[0];
    if (image?.type === "image/heic") {
      image = (await heic2any.default({ blob: image })) as Blob;
    }
    convertToBase64(image).then((img: string) => {
      let imageElement = new Image();

      console.log(imageElement, 18);

      imageElement.src = img;
      dispatch(setPromptImage(imageElement.src));
    });
  };
  return useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".heic"],
    },
    multiple: false,
    noClick: true,
  });
};
