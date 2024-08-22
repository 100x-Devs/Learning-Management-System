import { auth } from "@clerk/nextjs/server";
import { error } from "console";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const handelAuth = ()=>{
    const {userId} = auth();
    if(!userId) throw new Error("Unauthorized");
    return {userId};
} 
 

export const ourFileRouter = {
  courseImage: f({image: {maxFileSize: "4MB", maxFileCount: 1}})
  .middleware(()=> handelAuth())
  .onUploadComplete(()=>{}),
  courseAttachment: f(["text", "video", "audio", "pdf", "image"])
  .middleware(()=> handelAuth())
  .onUploadComplete(()=>{}),
  courseVideo: f({video: {maxFileSize: "512GB", maxFileCount: 1}})
  .middleware(()=> handelAuth())
  .onUploadComplete(()=>{}),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;