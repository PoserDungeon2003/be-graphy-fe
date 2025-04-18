export type LoginRQ = {
  email: string;
  password: string;
};

export interface SignupRQ {
  username: string;
  email: string;
  phone: string;
  password: string;
  role?: "customer" | "photographer";
  profilePic: string;
}

export type Messenges = {
  messenger_id: number;
  conversation_id: number;
  sender_id: number;
  content: string;
  is_read: boolean;
  sent_at: Date;
};

interface PhotoPostHome {
  imgUrl: string;
  title: string;
  author: string;
  actionButtons?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: any;
}
export interface PackageModel {
  packageId: number;
  photographerId: number;
  packageName: string;
  description: string;
  price: number;
  duration: number;
  createdAt: string;
}
export interface Album {
  id: string;
  style: string;
  author: string;
  mainImage: string;
  images: string[];
}
export interface Tab {
  name: string;
  key: string;
}