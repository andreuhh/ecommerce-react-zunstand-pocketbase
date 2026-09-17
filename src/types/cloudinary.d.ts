/**
 * Ambient typings for the Cloudinary Upload Widget, loaded from the
 * <script> tag in index.html (https://widget.cloudinary.com/v2.0/global/all.js).
 *
 * Cloudinary ships no first-party types for the widget, so this covers the
 * slice of the API we actually use. Add fields here as needed.
 */

interface CloudinaryUploadWidgetOptions {
    cloudName: string;
    uploadPreset: string;
    sources?: Array<'local' | 'url' | 'camera' | 'image_search' | 'google_drive' | 'dropbox'>;
    folder?: string;
    multiple?: boolean;
    maxFiles?: number;
    maxFileSize?: number;
    clientAllowedFormats?: string[];
    cropping?: boolean;
}

interface CloudinaryUploadWidgetInfo {
    public_id: string;
    url: string;
    secure_url: string;
    thumbnail_url: string;
    format: string;
    width: number;
    height: number;
    bytes: number;
    original_filename: string;
}

type CloudinaryUploadWidgetEvent =
    | 'success'
    | 'abort'
    | 'batch-cancelled'
    | 'close'
    | 'display-changed'
    | 'publicid'
    | 'queues-start'
    | 'queues-end'
    | 'retry'
    | 'show-completed'
    | 'source-changed'
    | 'tags'
    | 'upload-added';

/**
 * Discriminated on `event`, so `result.event === 'success'` narrows `info`
 * to CloudinaryUploadWidgetInfo. Keep every member's `event` a literal union:
 * widening one to `string` would break the narrowing for all of them.
 */
type CloudinaryUploadWidgetResult =
    | { event: 'success'; info: CloudinaryUploadWidgetInfo }
    | { event: Exclude<CloudinaryUploadWidgetEvent, 'success'>; info?: unknown };

type CloudinaryUploadWidgetCallback = (
    error: unknown,
    result: CloudinaryUploadWidgetResult
) => void;

interface CloudinaryUploadWidget {
    open(): void;
    close(options?: { quiet?: boolean }): void;
    hide(): void;
    show(): void;
    isShowing(): boolean;
    destroy(): Promise<void>;
    update(options: Partial<CloudinaryUploadWidgetOptions>): void;
}

interface CloudinaryGlobal {
    /** Builds the widget without showing it; call `.open()` yourself. */
    createUploadWidget(
        options: CloudinaryUploadWidgetOptions,
        cb: CloudinaryUploadWidgetCallback
    ): CloudinaryUploadWidget;
    /** Builds *and* opens the widget immediately. */
    openUploadWidget(
        options: CloudinaryUploadWidgetOptions,
        cb: CloudinaryUploadWidgetCallback
    ): CloudinaryUploadWidget;
}

interface Window {
    cloudinary?: CloudinaryGlobal;
}
