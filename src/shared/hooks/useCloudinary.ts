export function useCloudinary() {

  function openWidget(): Promise<{ img: string, tmb: string }> {
    return new Promise((resolve, reject) => {
      const cloudinary = window.cloudinary;

      if (!cloudinary) {
        reject(new Error('Cloudinary upload widget script is not loaded'));
        return;
      }

      const uploadWidget = cloudinary.openUploadWidget(
        {
          cloudName: 'dd2shhonr',
          uploadPreset: 'ml_default',
          sources: ['local', 'camera', 'url']
        },
        function(error, result) {
          if (!error && result.event === 'success') {
            const img = result.info.url;
            const tmb = result.info.thumbnail_url;
            resolve({ img, tmb })
            //  setFormData(s => ({ ...s, img, tmb }))
          }
        }
      )

      uploadWidget.open();
    })

  }

  return {
    openWidget
  }
}
