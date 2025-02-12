export declare class UploadService {
    getMulterConfig(): {
        storage: import("multer").StorageEngine;
        fileFilter: (req: any, file: any, callback: any) => any;
        limits: {
            fileSize: number;
        };
    };
    deleteFile(fileUrl: string): Promise<unknown>;
}
