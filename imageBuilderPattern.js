const DEFAULT_LAYOUT_WIDTH = 1;
const DEFAULT_LAYOUT_HEIGHT = 2;
const DEFAULT_LAYOUT_TOP = 3;
const DEFAULT_LAYOUT_LEFT = 14;
const SHOUTOUT_INCOMING_BUCKET_DEFAULT_TEMPLATE_FOLDER_NAME = "bucket";
const DEFAULT_LAYOUT_LAYER = 1;
const SHOUTOUT_BACKGROUND_FRAME_FILE_NAME = "background";
class awsImageBuilder {
    constructor() {
        this.awsImage = [];
    }

    createLayoutProperty() {
        this.awsImage.push({
          width: DEFAULT_LAYOUT_WIDTH,
          height: DEFAULT_LAYOUT_HEIGHT,
          top: DEFAULT_LAYOUT_TOP,
          left: DEFAULT_LAYOUT_LEFT,
          link: `s3://bucketName/${SHOUTOUT_INCOMING_BUCKET_DEFAULT_TEMPLATE_FOLDER_NAME}/${SHOUTOUT_BACKGROUND_FRAME_FILE_NAME}`,
          layer: DEFAULT_LAYOUT_LAYER,
        });

        return this;
      }
    
      /**
       * Create Background Image Property
       */
      createBackgroundProperty(background) {
        this.awsImage.push({
          width: DEFAULT_BG_WIDTH,
          height: DEFAULT_BG_HEIGHT,
          top: DEFAULT_BG_TOP,
          left: DEFAULT_BG_LEFT,
          link: `s3://${getRawBucketName()}/${SHOUTOUT_INCOMING_BUCKET_DEFAULT_TEMPLATE_FOLDER_NAME}/${background}`,
          layer: DEFAULT_BG_LAYER,
        });
        return this;
      }
    
      /**
       * Create Shoutout Image Property
       * @param link
       */
      createShoutoutProperty(link) {
        this.awsImage.push({
          width: DEFAULT_SHOUTOUT_WIDTH,
          height: DEFAULT_SHOUTOUT_HEIGHT,
          top: DEFAULT_SHOUTOUT_TOP,
          left: DEFAULT_SHOUTOUT_LEFT,
          link,
          layer: DEFAULT_SHOUTOUT_LAYER,
        });
        return this;
      }
    
      /**
       * Create Text Image Property
       * @param captionPath
       */
      createTextProperty(captionPath) {
        this.awsImage.push({
          width: DEFAULT_TEXT_WIDTH,
          height: DEFAULT_TEXT_HEIGHT,
          top: DEFAULT_TEXT_TOP,
          left: DEFAULT_TEXT_LEFT,
          link: `s3://${getRawBucketName()}/${SHOUTOUT_INCOMING_BUCKET_DEFAULT_FOLDER_NAME}/${captionPath}`,
          layer: DEFAULT_TEXT_LAYER,
        });
        return this;
      }
    
      /**
       * Create QR Property
       */
      createQRProperty(qr) {
        // assuming the generateQrCodeForShoutout function has been called
        this.awsImage.push({
          width: DEFAULT_QR_WIDTH,
          height: DEFAULT_QR_HEIGHT,
          top: DEFAULT_QR_TOP,
          left: DEFAULT_QR_LEFT,
          link: `s3://${getRawBucketName()}/${qr.fileStorageLocation}`,
          layer: DEFAULT_QR_LAYER,
        });
        return this;
      }

    build() {
        return this.awsImage;
    }
}

const order = new awsImageBuilder().createLayoutProperty("yellow").build();
console.log(order);