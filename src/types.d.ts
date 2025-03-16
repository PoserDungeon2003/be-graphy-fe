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

export interface PackageModel {
  id: number;
  photographerId: number;
  packageName: string;
  description: string;
  price: number;
  duration: number;
  createdAt: string;
}