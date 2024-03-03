export const convertToBase64 = (file: any): any => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader?.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

export const urlToBase64 = (url: string): Promise<string> =>
  new Promise((resolve, reject) => {
    let img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = () => {
      let canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      let ctx = canvas.getContext("2d");
      ctx!.drawImage(img, 0, 0);
      let dataURL = canvas.toDataURL("image/png");
      resolve(dataURL.replace(/^data:image\/?[A-z]*;base64,/, ""));
    };
  });
