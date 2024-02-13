export enum StatusMode {
  NotDelete = 0,
  Visible = 1,
  Delete = 2,
  All = 3,
  NoVisible = 4
}

export interface ListImageReq {
  author?: string;
  author_id?: string; 
  page?: number;
  page_size?: number;
  tags?: string[];
  illust_id?: number;
  status?: StatusMode;
}

export interface MultiTag {
  name: string;
  translation: string;
  visible: boolean;
}

export interface PixivImageInfo {
  image_key: string;
  pixiv_addr: string;
  visible: boolean;
  author: string;
  multi_tags: MultiTag[];
  create_time: Date;
  update_time: Date;
  height: number;
  width: number;
  size: number;
  need_download: boolean;
  tos_file_name: string;
  author_id?: string;
  del_flag: boolean;
  illust_id: number;
  title: string;
}

export interface PixivImageInfoWithUrl extends PixivImageInfo {
  url: string;
  download_url: string;
}

export interface ListImageData {
  images: PixivImageInfoWithUrl[];
  total: number;
}

export type UpdateStatusMode = StatusMode.Delete | StatusMode.Visible | StatusMode.NoVisible;

export interface UpdateImagesStatusReq {
  pixiv_addr_list: string[];
  status: UpdateStatusMode;
}
