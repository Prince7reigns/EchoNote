import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';


 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'your_cloud_name', 
        api_key: process.env.CLOUDINARY_API_KEY || '<your_api_key>', 
        api_secret:process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

export const uploadOnCloudinary = async (localFilePath) => {
      try {
        if(!localFilePath) return null;

        const result = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "image", // Automatically detect the resource type
        });
        // Remove the local file after upload
        fs.unlinkSync(localFilePath)
        return result;
      } catch (error) {
        fs.unlinkSync(localFilePath);
        return error;
      }
}

export const deleteFromCloudinary = async (publicId,resource_type="image") => {
    try {
        if(!publicId) return null;

        const result = await cloudinary.uploader.destroy(publicId, {
            resource_type: `${resource_type}` // Specify the resource type (image, video, etc.)
        });
        console.log("delete from cloudinary result", result);
        
    } catch (error) {
        console.log("delete on cloudinary failed", error);
        return error;
    }
}